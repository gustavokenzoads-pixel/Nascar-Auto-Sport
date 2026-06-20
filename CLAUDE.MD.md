# CLAUDE.md — NASCAR Auto Sport

Contexto do projeto para o Claude Code. Leia antes de qualquer alteração.

## O que é este projeto

Site institucional do cliente **NASCAR Auto Sport** (oficina/funilaria premium em São Paulo),
gerenciado pela agência KenzoAds. É um site **comercial com tráfego pago ativo** (Meta + Google Ads).
Domínio: nascarautosport.com.br · Hospedagem: Vercel · Repo: gustavokenzoads-pixel/Nascar-Auto-Sport

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- framer-motion (animações)
- Deploy automático na Vercel (push na `main` = deploy em produção)

## Estrutura

- `app/` — páginas (App Router): `/` (home), `/servicos`, `/projetos`, `/sobre`
- `components/` — componentes (`ui/`, `layout/`)
- `data/` — dados centralizados (ex: `projects.ts` com a galeria antes/depois)
- `lib/` — utilitários
- `public/` — imagens estáticas

## REGRAS — o que NÃO mexer sem autorização explícita

1. **Infraestrutura de rastreamento.** O site tem instalação completa e funcionando de:
   - Meta Pixel (ID 925971887127074)
   - Google Tag Manager (GTM-WL8Z7JC7)
   - GA4 (G-LWR8KWPJRP)
   NÃO altere, remova ou "refatore" esses componentes (incluindo `MetaPixel.tsx`).
   Eles foram ajustados manualmente para corrigir disparo duplicado de PageView,
   deduplicação do evento Lead e o widget flutuante de WhatsApp. Mexer quebra conversão.

2. **Botão/widget de WhatsApp.** Já foi corrigido (button vs. anchor tag). Não reverter.

3. **URLs externas** (instagram.com, links http). Nunca trocar extensão ou alterar.

4. **Nada de deploy direto na `main`.** Sempre trabalhar em branch
   (`git checkout -b nome-da-tarefa`), testar com `npm run build`, e só depois push.
   O merge na main eu (Kenzo) faço manualmente após conferir o preview na Vercel.

## Performance (prioridade atual)

O consumo de banda na Vercel estourou por causa de imagens PNG pesadas não otimizadas.
Já existe um fluxo de otimização:
- `scripts/optimize-images.mjs` — converte PNG/JPG → WebP (quality 80), mantém originais
- `scripts/update-refs.mjs` — troca referências `.png/.jpg` → `.webp` no código (preserva URLs externas)
- `next.config.mjs` — `images.unoptimized` deve ficar `false` para o Next otimizar/redimensionar

Ao adicionar imagens novas: usar WebP, preferir `next/image`, nunca colar PNG de print direto.

## Estilo de trabalho esperado

- Antes de mexer em imagem ou referência, rodar `npm run build` ao final e confirmar que passou.
- Não apagar arquivos originais sem confirmação.
- Mudanças incrementais e explicadas, não refatoração ampla sem pedir.
- Comentários e commits podem ser em português.

## Comandos úteis

- `npm run dev` — rodar local (http://localhost:3000)
- `npm run build` — testar build (valida que nada quebrou)
- `node scripts/optimize-images.mjs` — converter imagens
- `node scripts/update-refs.mjs` — atualizar referências no código
