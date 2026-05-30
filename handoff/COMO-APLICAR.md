# Diferentia — aplicar o redesign no Next.js

São só 3 passos. O design usa CSS próprio (classes prontas), então não precisa mexer no Tailwind.

## 1. Substituir o CSS global
Copie `globals.css` deste pacote por cima de `app/globals.css`.
Ele mantém as diretivas do Tailwind (`@tailwind base/components/utilities`) e troca o tema dark antigo pelo tema novo (branco puro + Saira/Hanken). As classes usadas pela página estão todas aqui.

## 2. Substituir a página
Copie `page.tsx` por cima de `app/page.tsx`.
É a página inteira convertida para React: header com sombra no scroll, filtro de cursos e formulário com estados de sucesso/erro, tudo em hooks. O conteúdo está em arrays no topo do arquivo, fácil de editar.

## 3. Colocar as imagens
Copie os arquivos da pasta `public/` deste pacote para a pasta `public/` do projeto:
- `public/hero-abstract.png`
- `public/results-abstract.png`

A página referencia `/hero-abstract.png` e `/results-abstract.png` (raiz de `public`). Quando tiver fotos reais, troque o `src` desses dois `<img>` no `page.tsx`.

## Rodar
```
npm run dev
```

## Observações
- A fonte vem do Google Fonts via `@import` no `globals.css`. Se preferir, dá para migrar para `next/font` depois (melhor performance), mas não é obrigatório.
- O formulário hoje só valida e mostra a mensagem (sem backend), igual ao MVP atual. É só plugar o `handleSubmit` no seu endpoint quando quiser.
- A revelação no scroll respeita `prefers-reduced-motion` (quem desativa animações vê tudo direto).
