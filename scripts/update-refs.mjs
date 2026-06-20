import { readdir, readFile, writeFile } from 'fs/promises'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'

const DIRS = ['app', 'components', 'data', 'lib']
const EXTS = ['.ts', '.tsx', '.js', '.jsx', '.mjs']
const __dirname = fileURLToPath(new URL('.', import.meta.url))
const ROOT = join(__dirname, '..')

// Substitui .png/.jpg/.jpeg por .webp apenas em caminhos locais (nao toca URLs com http/https)
const RE = /(?<![:/])(["'/][^"']*?)\.(png|jpg|jpeg)(?=["'\s)\]},])/g

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) files.push(...await walk(full))
    else if (EXTS.includes(extname(e.name))) files.push(full)
  }
  return files
}

async function main() {
  let changed = 0
  for (const d of DIRS) {
    const files = await walk(join(ROOT, d)).catch(() => [])
    for (const file of files) {
      const original = await readFile(file, 'utf8')
      // Troca extensoes mas preserva URLs externas (http/https/instagram)
      const updated = original.replace(RE, (match, prefix, ext) => {
        // Se o prefixo contem http ou instagram, nao altera
        if (/https?:\/\/|instagram/.test(prefix)) return match
        return `${prefix}.webp`
      })
      if (updated !== original) {
        await writeFile(file, updated, 'utf8')
        console.log(`  Atualizado: ${file.replace(ROOT, '')}`)
        changed++
      }
    }
  }
  console.log(`\nTotal de arquivos modificados: ${changed}`)
}

main().catch(console.error)
