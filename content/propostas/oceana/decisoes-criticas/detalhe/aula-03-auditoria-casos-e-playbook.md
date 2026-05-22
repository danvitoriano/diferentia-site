---
title: Aula 03 Auditoria Casos E Playbook
---

# Aula 03: Auditoria de Outputs, Casos Práticos e Playbook
**Claude para Decisões Críticas | Duração: 2h | Formato: Online síncrono (Teams ou Meet)**

---

## Visão geral dos blocos

| Bloco | Tema | Tempo |
|---|---|---|
| 1 | Abertura com recap e demo de auditoria ao vivo | 0:00 a 0:15 |
| 2 | Framework de auditoria de outputs | 0:15 a 0:50 |
| 3 | Intervalo | 0:50 a 1:00 |
| 4 | Casos práticos por área da Oceana | 1:00 a 1:35 |
| 5 | Entrega coletiva: playbook de prompts da Oceana | 1:35 a 1:55 |
| 6 | Encerramento do curso | 1:55 a 2:00 |

---

## BLOCO 1: Abertura com recap e demo (0:00 a 0:15)

### Roteiro

**[0:00 a 0:05] Recap das Aulas 01 e 02**

> "Cobrimos chain-of-thought e few-shot na Aula 01, system prompts e fluxos multi-etapas na Aula 02. Alguém testou o system prompt na rotina e quer compartilhar o que observou?"

Aguardar 2 ou 3 respostas. Comentar brevemente.

**[0:05 a 0:12] Demo: checklist de auditoria em ação**

Pegar um output gerado por fluxo na aula anterior e rodar o checklist de auditoria sobre ele ao vivo (ver exemplos-oceana.md, seção "Framework de auditoria de outputs").

> "O Claude auditando o próprio output encontra coisas que passariam numa leitura humana rápida. Não substitui a revisão humana em decisões críticas, mas filtra os erros óbvios antes de chegar no analista."

**[0:12 a 0:15] Visão geral da aula**

> "Em 2 horas: framework de auditoria para outputs com números críticos, casos práticos por área da Oceana combinando tudo que aprendemos, e entrega do playbook de prompts avançados. Saem daqui com o playbook pronto."

---

## BLOCO 2: Framework de auditoria de outputs (0:15 a 0:50)

### Objetivo
O time deve sair sabendo quando e como auditar um output do Claude antes de usá-lo em decisão.

### Roteiro

**[0:15 a 0:25] Por que auditar e quando**

> "A regra de ouro: qualquer número que vai para uma decisão de portfólio, um documento oficial ou uma comunicação com investidor precisa passar por uma etapa de auditoria. Não precisa ser humana em todos os casos, mas precisa existir."

Apresentar os quatro tipos de erro que a auditoria captura:

**Tipo 1: Número inventado.** A IA pode citar um número que não está em nenhuma fonte, com a mesma confiança de quem está citando o release.

**Tipo 2: Fonte desatualizada.** A IA acessa o que está disponível. Se a decisão foi revertida três dias depois, ela pode não saber.

**Tipo 3: Inferência disfarçada de fato.** A IA conecta dois fatos reais e tira uma conclusão que parece dado mas é interpretação.

**Tipo 4: Omissão silenciosa.** A IA não costuma dizer "não sei". Ela responde com o que tem, e o que não tinha fica de fora.

**[0:25 a 0:40] Demo: o checklist de auditoria em ação**

Usar a nota interna gerada no fluxo da Aula 02 e rodar o checklist completo (ver exemplos-oceana.md).

Mostrar ao vivo quando o Claude identifica uma divergência ou inferência não sustentada. Comparar com o documento original.

**[0:40 a 0:50] Auditoria pelo Claude vs. revisão humana**

> "A auditoria pelo Claude não substitui a revisão humana. Ela serve para filtrar os erros óbvios antes de chegar no analista, para que o analista gaste o tempo de revisão nas partes que realmente exigem julgamento humano."

> "O que nunca terceirizar para a IA sem revisão humana: números que vão para uma decisão de portfólio, interpretação de regulamento com implicação financeira ou jurídica, e qualquer dado em documento oficial da Oceana."

---

## BLOCO 3: Intervalo (0:50 a 1:00)

> "10 minutos. Voltamos com os casos práticos."

---

## BLOCO 4: Casos práticos por área da Oceana (1:00 a 1:35)

### Objetivo
Aplicar as três técnicas das aulas anteriores em casos reais por área. Cada time sai com pelo menos um fluxo funcional para o próprio contexto.

### Roteiro

**[1:00 a 1:20] Quatro casos ao vivo**

Percorrer um caso por área usando os prompts do exemplos-oceana.md:

**Análise de renda variável:** fluxo do release à nota com chain-of-thought na etapa de síntese e auditoria no final

**Crédito privado:** chain-of-thought para análise de risco de emissor com system prompt do analista de crédito

**Due diligence:** few-shot com exemplos internos e checklist de auditoria ao final

**Compliance:** system prompt do revisor aplicado a e-mail institucional real

**[1:20 a 1:35] Prática guiada**

> "Cada um escolhe a área mais próxima da sua rotina e monta um fluxo de dois ou três passos combinando as técnicas que aprendeu. Pode usar qualquer combinação: chain-of-thought, few-shot, system prompt, fluxo encadeado, auditoria."

> "12 minutos. No final, cada um posta no chat: o processo escolhido, as técnicas usadas e o resultado obtido."

Comentar dois ou três ao vivo.

---

## BLOCO 5: Entrega coletiva — playbook de prompts da Oceana (1:35 a 1:55)

### Roteiro

**[1:35 a 1:42] Estrutura do playbook**

> "Vamos montar agora o playbook de prompts avançados da Oceana. Um documento que concentra os melhores prompts, system prompts e fluxos que o time produziu ao longo das três aulas."

Abrir um documento compartilhado ao vivo (Notion, Google Docs ou planilha).

Estrutura de cada entrada:

```
Nome: [verbo + contexto]
Área: [Renda variável / Crédito / Due diligence / Compliance / Comercial]
Técnica: [chain-of-thought / few-shot / system prompt / fluxo / auditoria]
Prompt: [texto completo]
Quando usar: [1 frase]
Resultado esperado: [o que o prompt entrega]
Testado por: [nome]
Data: [AAAA-MM-DD]
Observações: [o que funciona bem, o que exige atenção]
```

**[1:42 a 1:52] Contribuição coletiva ao vivo**

> "Cada um posta no chat o melhor prompt ou fluxo que produziu neste curso. Vou coletando no documento ao vivo."

Coletar as contribuições, organizar por área e incluir no documento.

**[1:52 a 1:55] Leitura coletiva dos melhores prompts**

Ler dois ou três prompts do playbook ao vivo. Pedir ao time que identifique qual técnica está sendo usada em cada um.

---

## BLOCO 6: Encerramento do curso (1:55 a 2:00)

> "Três aulas. Seis horas. Recap:"

> "Aula 01: chain-of-thought para raciocínio auditável, few-shot para replicar padrões internos. Aula 02: system prompts para calibrar o Claude por contexto, fluxos multi-etapas para processos repetitivos com auditabilidade em cada etapa. Aula 03: framework de auditoria para outputs críticos e entrega do playbook."

> "O que não muda: o julgamento de qualidade continua sendo de vocês. O Claude acelera a análise e estrutura o raciocínio. A decisão final é responsabilidade do analista."

> "O link do playbook está no chat. Continuem contribuindo. Quanto mais rico ele ficar com os casos reais da Oceana, mais valioso para todo o time."

---

## Material de apoio para distribuir após a aula

- Link do playbook de prompts da Oceana (preencher ao vivo)
- [exemplos-oceana.md](exemplos-oceana.md) com todos os prompts das três aulas
- Documentação de Projetos: https://support.claude.ai (buscar "projects")

---

## O que NÃO entra nesta aula

| Tema | Onde buscar |
|---|---|
| Chain-of-thought e few-shot | Aula 01 deste curso |
| System prompts e fluxos | Aula 02 deste curso |
| Skills e automações | [Claude Essentials — Módulo 4](https://github.com/diferentia/curso-claude-introdutorio/blob/main/modulo-04-skills-automacoes.md) |
| Claude Code e scripts | [curso-claude-code](https://github.com/diferentia/curso-claude-code) |
