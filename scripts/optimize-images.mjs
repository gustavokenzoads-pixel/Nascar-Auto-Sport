import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname, dirname, basename } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const PUBLIC_DIR = join(__dirname, '..', 'public')
const EXTS = ['.png', '.jpg', '.jpeg']

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) files.push(...await walk(full))
    else if (EXTS.includes(extname(e.name).toLowerCase())) files.push(full)
  }
  return files
}

async function main() {
  const files = await walk(PUBLIC_DIR)
  let totalBefore = 0, totalAfter = 0

  for (const file of files) {
    const { size: before } = await stat(file)
    const outPath = join(dirname(file), basename(file, extname(file)) + '.webp')
    await sharp(file).webp({ quality: 80 }).toFile(outPath)
    const { size: after } = await stat(outPath)
    totalBefore += before
    totalAfter += after
    const pct = (((before - after) / before) * 100).toFixed(1)
    console.log(`  ${basename(file)} -> ${basename(outPath)}  (${(before/1024/1024).toFixed(2)} MB -> ${(after/1024/1024).toFixed(2)} MB, -${pct}%)`)
  }

  const totalPct = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)
  console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(2)} MB -> ${(totalAfter/1024/1024).toFixed(2)} MB  (reducao de ${totalPct}%)`)
  console.log(`Arquivos convertidos: ${files.length}`)
}

main().catch(console.error)
