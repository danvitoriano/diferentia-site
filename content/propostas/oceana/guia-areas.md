# Guia de Adaptação por Área: Trilha Diferentia / Oceana

Como usar este guia: cada seção descreve como adaptar os exercícios, exemplos e
demos da trilha para um perfil de área específico. O conteúdo dos módulos não muda.
O que muda é o caso de uso demonstrado e os exercícios propostos.

Antes de cada módulo, o facilitador identifica o perfil predominante da turma e
seleciona os exemplos correspondentes do `exemplos-oceana.md` de cada curso.

---

## Analistas de Investimento

**Perfil:** Analistas de RV, Research, portfólio. Usuários de maior maturidade na
Oceana. Vários já usam Claude diariamente. Interesse principal em automação de
processos analíticos: leitura de releases, atualização de modelos, análise setorial,
monitoramento de carteira.

**O que priorizar na trilha:**

No Módulo 1, abra com a demo de extração de release e tabela de KPIs. O impacto
é imediato porque o grupo reconhece o processo.

No Módulo 2, priorize o exercício de duas etapas para atualização de modelo
(ver `exemplos-oceana.md` do Introdutório, seção Módulo 3 avançado). O bloco 5B
de confiança é especialmente relevante aqui: Marcelo Moraes e Fernando Zorzi
expressaram explicitamente preocupação com alucinações em números financeiros.
Use os casos deles como referência sem citar os nomes.

No Módulo 4, a skill `nota-de-resultado` é o exemplo certo. No Bloco 5B, o
agente de monitoramento setorial é o caso de uso mais próximo do que o grupo pediu.

**Exercícios prioritários por módulo:**

- M1: extração de KPIs de um release real
- M2: protocolo de duas etapas para validação de números
- M3: Projeto com cobertura setorial (instruções + arquivos de contexto)
- M4: skill `nota-de-resultado` + agente de monitoramento setorial

**Processos mapeados no diagnóstico (referência para exercícios):**

Atualização de modelos financeiros a partir de releases, leitura e estruturação
de resultados trimestrais, preview de earnings antes da divulgação, análise setorial
(utilities e energia), compilação de dados de múltiplas fontes, checagem de modelos,
monitoramento de oportunidades de investimento, gestão de agenda de reuniões com
executivos e especialistas.

---

## Operações / Backoffice

**Perfil:** Operadores e analistas de Backoffice responsáveis por conciliação de
carteiras, controle e monitoramento de fundos, operacionalização de trades.
Nível de uso de IA mais baixo que analistas. Interesse em automação de batimentos
e conciliação, que são processos com muito volume e pouca variação.

**O que priorizar na trilha:**

No Módulo 1, abra com a demo de comparação de dois documentos (planilha de
custodiante vs sistema interno), pedindo ao Claude para identificar divergências.
O grupo reconhece o processo imediatamente.

No Módulo 2, o bloco de pesquisa na web tem menos relevância para esta área.
Priorize artefatos: tabelas de conciliação, relatórios de divergência. O bloco 5B
de confiança é crítico aqui: a IA não deve fechar uma divergência sozinha. O
operador valida e assina.

No Módulo 3, mostre o uso de Projetos com arquivos de referência: padrões de
conciliação, formatos de extrato esperados por cada custodiante.

No Módulo 4, a skill de relatório diário de operações (ver `exemplos-oceana.md`)
é o caso mais direto. O agente de conciliação automatizada é o objetivo de longo
prazo para este perfil.

**Exercícios prioritários por módulo:**

- M1: colar dois extratos fictícios e pedir comparação linha a linha
- M2: artefato de relatório de divergências formatado
- M3: Projeto com padrões de conciliação como arquivo de instrução
- M4: skill de relatório diário + agendamento para rodar ao fechar do dia

**Processos mapeados no diagnóstico (referência para exercícios):**

Conciliação de carteiras (custodiante vs sistema interno), controle e monitoramento
de fundos, batimento diário de posições, operacionalização de trades, identificação
de divergências de quantidade e valor, relatório de pendências operacionais.

**Nota sobre limitações:** o batimento de fundos que o analista de Ops descreveu
envolve um sistema terceirizado com deficiências próprias. A IA pode ajudar na
detecção e formatação de divergências, mas não acessa o sistema diretamente sem
integração via API (fora do escopo desta trilha). Comunicar essa limitação com
clareza no Módulo 3.

---

## Jurídico / Compliance

**Perfil:** Advogados e analistas de compliance responsáveis por due diligences,
revisão de contratos, atas de gestão, análise de KYP e validação de regulamentos.
Luísa expressou o desejo de "autonomia sem depender de TI". Interesse em usar
a IA de forma independente para o trabalho documental intenso da área.

**O que priorizar na trilha:**

No Módulo 1, abra com a demo de extração de obrigações de contrato. O grupo
reconhece o volume de documentos que precisam revisar e a possibilidade de
acelerar essa triagem inicial.

No Módulo 2, Deep Research é o recurso mais relevante para esta área: pesquisa
de jurisprudência, decisões regulatórias recentes, histórico de atuação de
órgãos como CVM e ANBIMA. Priorize esse bloco. O bloco 5B de confiança é
fundamental aqui: a IA pode resumir e estruturar, mas interpretação jurídica
com implicação real precisa de revisão humana.

No Módulo 3, Projetos com documentos de referência é o recurso mais útil:
templates de checklist de due diligence, regulamentos internos, políticas de
compliance como arquivos fixos de contexto.

No Módulo 4, a skill de revisão de ata de gestão e a skill de triagem de due
diligence são os casos mais diretos. O agente de checklist automático ao
adicionar documento no Drive é o objetivo de longo prazo.

**Exercícios prioritários por módulo:**

- M1: extrair obrigações com prazo de um contrato fictício
- M2: Deep Research sobre decisão recente da CVM ou ANBIMA relevante para a Oceana
- M3: Projeto com templates de KYP e due diligence como contexto fixo
- M4: skill de revisão de ata + skill de checklist de due diligence

**Processos mapeados no diagnóstico (referência para exercícios):**

Due diligences de fornecedores e prestadores, revisão de atas de reunião de
gestão, análise de KYP, elaboração e revisão de contratos e acordos, validação
de regulamentos de fundos, consultas de due diligences anteriores,
conferência de textos e e-mails, traduções de documentos jurídicos.

---

## Comercial

**Perfil:** Analistas e gestores da área comercial responsáveis por captação de
investidores, atendimento ao cliente, resposta a formulários de due diligence,
revisão de contratos comerciais e atas. Interesse em criar "robôs" para
aumentar eficiência no atendimento. Alto volume de tarefas repetitivas de
comunicação com investidores.

**O que priorizar na trilha:**

No Módulo 1, abra com a demo de resposta a formulário de investidor. O grupo
reconhece o processo imediatamente: é uma das tarefas mais demoradas da área.

No Módulo 2, artefatos são o recurso mais relevante: rascunhos de resposta,
sumários de regulamento em linguagem acessível para o investidor, one-pagers
de apresentação de fundo. O bloco 5B de confiança é crítico aqui por um motivo
diferente: o que a IA produz em comunicação com investidores precisa ser
revisado por compliance antes de sair.

No Módulo 3, Projetos com o material padrão da gestora como contexto é o
recurso mais útil: regulamento dos fundos, deck de apresentação, perguntas
frequentes. Isso permite que a IA responda em linguagem alinhada com o que
a Oceana já aprova para comunicação com investidores.

No Módulo 4, a skill de triagem de e-mails e a skill de resposta a formulário
são os casos mais diretos. O agente de triagem de caixa de entrada é o objetivo
de longo prazo.

**Exercícios prioritários por módulo:**

- M1: rascunho de resposta a uma pergunta típica de formulário de due diligence
- M2: artefato de sumário de regulamento de fundo em linguagem acessível
- M3: Projeto com regulamento e FAQ como arquivos de contexto
- M4: skill de triagem de e-mails + skill de resposta a formulário

**Processos mapeados no diagnóstico (referência para exercícios):**

Captação de investidores, atendimento ao cliente, revisão de contratos comerciais,
resposta a formulários de due diligence de investidores, revisão de atas,
validação de regulamentos de fundos, elaboração de estudos, e-mails institucionais.

---

## Administrativo

**Perfil:** Assistentes e analistas administrativos responsáveis por viagens,
gestão de fornecedores, controle de gastos e processos de suporte interno.
Julianna e Mariana expressaram interesse em "tudo que gere economia de tempo".
Nível de uso de IA mais baixo. Interesse prático e imediato.

**O que priorizar na trilha:**

No Módulo 1, abra com a demo mais concreta possível: colar um e-mail longo e
pedir ao Claude para resumir os pontos de ação. O grupo não precisa de caso
financeiro, precisa de ganho de tempo visível.

No Módulo 2, artefatos simples têm o maior impacto: tabelas de controle,
rascunhos de e-mail, organização de listas de solicitações. Não force Deep
Research aqui: é o recurso de menor relevância para este perfil.

No Módulo 3, App Mobile é especialmente relevante para este perfil: quem
lida com demandas por WhatsApp e e-mail tem ganho imediato com a câmera
e o ditado por voz.

No Módulo 4, a skill de consolidação de despesas e a skill de organização
de solicitações de viagem são os casos mais diretos.

**Exercícios prioritários por módulo:**

- M1: resumo de e-mail longo com pontos de ação
- M2: artefato de tabela de controle de solicitações
- M3: uso do app mobile com câmera para fotografar um documento e extrair informação
- M4: skill de consolidação de despesas do cartão corporativo

**Processos mapeados no diagnóstico (referência para exercícios):**

Controle de gastos e cartão corporativo, solicitações de viagem, agenda e
organização de pessoal, comunicação por e-mail, organização de planilhas de
controle interno.

---

## Como usar este guia em turmas mistas

A Oceana é pequena o suficiente para que algumas turmas misturem áreas.
Quando isso acontecer, use a seguinte lógica:

**Demo de abertura de cada módulo:** use sempre o exemplo de analistas de
investimento. É o perfil de maior impacto visual e o que mais ressoa para a
liderança que costuma estar presente.

**Exercícios:** ofereça duas opções sempre que possível (analistas + uma
variante de outra área). O participante escolhe a que faz sentido para ele.
Não force todos a usar o mesmo caso.

**Bloco 5B de confiança (Módulo 2):** este bloco é universal. O princípio de
verificar fonte primária antes de usar número em decisão vale para todas as
áreas, só o exemplo muda.

**Bloco 5B de agentes (Módulo 4):** apresente os três casos de agente (setor,
e-mails, due diligence) e deixe cada perfil se identificar com o que faz
sentido para ele. Não é necessário aprofundar todos os três.

---

## Computer use (Chrome, Excel e PowerPoint)

**Perfil:** Qualquer área que usa browser, Excel e PowerPoint diariamente. Complementa o
Introdutório (chat e artefatos) sem exigir o app Cowork.

**O que priorizar na trilha:**

Na sessão 1, escolha um fluxo web reconhecível pelo grupo (portal de RI, formulário
interno fictício ou consulta pública). Na sessão 2, priorize **Excel** para analistas e
operações; **PowerPoint** para comercial, RI e liderança.

Use `exemplos-oceana.md` do módulo Computer use para trocar demo e exercício por área.

**Exercícios prioritários:**

- Sessão 1: uma tarefa real no Chrome com revisão humana do resultado
- Sessão 2: uma planilha ou deck da área (modelo, relatório ou apresentação)

**Governança:** reforçar que computer use e extensões Office não substituem validação de
números nem parecer jurídico. Alinhar com TI sobre plano, extensões permitidas e dados
que não podem sair da máquina.

---

## Referências cruzadas

- Exemplos por área em cada curso: `exemplos-oceana.md` dentro de cada pasta
- Diagnóstico original: `../oceana/` (CSV com respostas individuais)
- Mapa da trilha completa: `README.md` (este repositório)
