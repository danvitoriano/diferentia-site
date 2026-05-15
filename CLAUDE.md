# Diferentia — Site MVP

## O produto

**Diferentia** é um produto independente de metodologia de adoção de IA para empresas do setor financeiro (fundos, gestoras, fintechs).

Não é uma consultoria de pessoa física. É uma marca/produto com metodologia proprietária escalável.

**Posicionamento:** startup de metodologia de IA para o mercado financeiro.
**Contexto adicional:** o site precisa ter cara de startup para eventos como o Rio Innovation Week.

---

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v3
- Deploy: Vercel (planejado)

---

## Identidade visual

Sem logo definida ainda. O site estabelece a identidade:

- **Background:** `#080810` (near-black com tonalidade azul)
- **Surface:** `#0F0F1A`
- **Borda:** `#1E1E2E`
- **Primary:** `#7C6FF7` (indigo suave — premium, tech)
- **Accent:** `#E8B84B` (âmbar dourado — mercado financeiro)
- **Texto principal:** `#F0F0FA`
- **Texto secundário:** `#9090B0`

Tipografia: Inter (Google Fonts), sem-serif limpa.

Dark theme. Sem logo por enquanto — logotipo textual "Diferentia." com ponto indigo.

---

## Estrutura da página (single page)

Tudo em `app/page.tsx` para facilitar iteração no MVP. Componentes inline no arquivo.

Seções:
1. **Nav** — logo + links âncora + CTA "Agendar diagnóstico"
2. **Hero** — headline, subtext, métricas rápidas
3. **Problem** — 3 cards com os problemas do mercado
4. **Method** — 4 fases da metodologia
5. **Results** — quote + 3 métricas de resultado
6. **Contact** — formulário com estado local (sem backend ainda)
7. **Footer**

---

## TODOs / próximos passos

### Funcionalidade
- [ ] Integrar formulário de contato com backend (Resend / Make / n8n)
- [ ] Adicionar animações de entrada (Framer Motion ou CSS)
- [ ] Mobile nav (hamburger menu)
- [ ] Analytics (Vercel Analytics ou Plausible)

### Conteúdo
- [ ] Logo / identidade visual real
- [ ] Casos reais (anônimos ou nomeados) na seção de Resultados
- [ ] Página de blog ou recursos (fase 2)
- [ ] Página de metodologia detalhada

### Deploy
- [ ] `npx create-next-app` ou clonar estrutura em repo próprio
- [ ] Configurar domínio diferentia.com.br ou similar
- [ ] Deploy na Vercel (zero config para Next.js)

---

## Como rodar localmente

```bash
npm install
npm run dev
# acesse http://localhost:3000
```

---

## Decisões tomadas

- **Single-file page:** todas as seções em `app/page.tsx` com componentes inline. Facilita iteração rápida no MVP sem overhead de estrutura de pastas.
- **Sem CMS:** conteúdo hardcoded por enquanto. Migrar para Contentlayer ou Sanity quando houver necessidade de edição frequente.
- **Formulário sem backend:** estado local com `useState`. A integração com e-mail/CRM fica como próxima tarefa.
- **Dark theme por padrão:** posicionamento premium e startup tech. Não há suporte a light mode no MVP.
