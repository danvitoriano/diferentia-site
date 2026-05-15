# Diferentia

Landing page institucional (MVP) — metodologia de adoção de IA para empresas do mercado financeiro (fundos, gestoras, fintechs).

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- React 19
- TypeScript
- Tailwind CSS v3

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Scripts

| Comando       | Descrição        |
| ------------- | ---------------- |
| `npm run dev`   | Servidor de desenvolvimento |
| `npm run build` | Build de produção           |
| `npm run start` | Servidor após `build`       |
| `npm run lint`  | ESLint (Next.js)            |

## Estrutura principal

- `app/page.tsx` — página única (nav, hero, problema, método, resultados, contato, footer)
- `app/layout.tsx` — layout raiz, fontes e metadados
- `app/globals.css` — estilos globais e tokens visuais
- `app/api/contact/route.ts` — API do formulário de contato / leads

## Formulário de contato (`/api/contact`)

- **Sem variáveis de ambiente:** em desenvolvimento a rota apenas registra o lead no servidor (`console`) e retorna sucesso — útil para testar o front sem backend.
- **Com Supabase:** defina no `.env.local`:

  ```env
  SUPABASE_URL=...
  SUPABASE_ANON_KEY=...
  ```

  Os dados são enviados para a tabela `leads` (ajuste permissões/RLS conforme sua instância).

Nunca exponha secrets no cliente; use apenas em variáveis de ambiente do servidor.

## Documentação extra

Detalhes de produto, identidade visual (cores, tipografia) e roadmap estão em [`CLAUDE.md`](./CLAUDE.md).

## Deploy

Compatível com [Vercel](https://vercel.com/) (deploy zero-config para Next.js). Configure as variáveis de ambiente no painel do projeto. Domínio previsto: [diferentia.com.br](https://diferentia.com.br) (`NEXT_PUBLIC_SITE_URL`).
