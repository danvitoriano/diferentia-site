# Exemplos específicos Oceana: Curso Introdutório

Use estes exemplos nos módulos indicados para substituir os exemplos genéricos.
Cada módulo traz o exemplo padrão (analistas de investimento) seguido de
variantes por área: use a variante adequada ao perfil da turma.

---

## Módulo 2: substituir o exemplo de análise de texto

### Analistas de investimento

**Caso: resumo de ata de reunião**

Prompt para exercício:

> Você é um assistente de analistas de investimento da Oceana.
> Leia a ata abaixo e produza: (1) lista de decisões tomadas,
> (2) lista de pendências com responsável e prazo, (3) um parágrafo
> de resumo executivo em até 5 linhas.
> Ata: [participante cola o texto]

### Variante: Operações / Backoffice

**Caso: sumário de pendências operacionais do dia**

Prompt para exercício:

> Leia o extrato de movimentações abaixo e identifique: (1) trades que
> ainda precisam de confirmação de contraparte, (2) discrepâncias entre
> quantidade negociada e quantidade liquidada, (3) itens que exigem ação
> antes do fechamento do dia.
> Se um item não tiver informação suficiente para classificar, diga
> explicitamente em vez de assumir.
> Extrato: [participante cola o texto]

### Variante: Jurídico / Compliance

**Caso: extração de obrigações de contrato**

Prompt para exercício:

> Leia o contrato abaixo e produza: (1) lista de obrigações da Oceana
> com prazo definido, (2) cláusulas que exigem aprovação interna antes
> de qualquer ação, (3) pontos que precisam de atenção de compliance
> (dados pessoais, sigilo, vedações regulatórias).
> Cite o número da cláusula para cada item.
> Se uma cláusula for ambígua, sinalize em vez de interpretar.
> Contrato: [participante cola o texto]

### Variante: Comercial

**Caso: resposta a formulário de investidor**

Prompt para exercício:

> Leia o formulário de due diligence abaixo e rascunhe respostas para
> cada pergunta usando as informações que eu vou fornecer logo depois.
> Para perguntas que você não tem dados suficientes para responder,
> deixe marcado como [PENDENTE: informação necessária].
> Não invente nenhum dado sobre a gestora, a carteira ou o time.
> Formulário: [participante cola o texto]
> Informações disponíveis: [participante cola o material de referência]

### Variante: Administrativo

**Caso: organização de solicitações de viagem**

Prompt para exercício:

> Leia os e-mails abaixo com solicitações de viagem e produza uma tabela
> com as colunas: colaborador, destino, data de ida, data de volta,
> finalidade, status (confirmado / pendente / sem informação suficiente).
> Para cada linha com informação faltando, liste o que precisa ser confirmado.
> E-mails: [participante cola o texto]

---

## Módulo 3: substituir o exemplo de conector MCP

### Analistas de investimento

**Caso: leitor de releases de resultados**

Prompt para exercício:

> Leia o release de resultados do 1T25 da empresa X que está no arquivo
> que compartilhei. Extraia: receita líquida, EBITDA, lucro líquido,
> dívida líquida e guidance para o próximo trimestre.
> Apresente em tabela comparando com o trimestre anterior.
> Se alguma informação não estiver no documento, diga explicitamente.

### Analistas de investimento (avançado): atualização de modelo

Este é o caso mais pedido no diagnóstico da Oceana: usar a IA para
ajudar a preencher os campos de um modelo financeiro a partir de um release,
sem apenas resumir o documento.

Prompt para exercício (duas etapas):

**Etapa 1: mapeamento dos campos:**
> Leia o release do 1T25 da empresa X que está no arquivo.
> Abaixo estão os campos que preciso atualizar no meu modelo. Para cada
> campo, encontre o número correspondente no release e cite a página ou
> seção de origem. Se não encontrar, diga "não localizado".
> Campos: receita líquida 1T25, EBITDA ajustado 1T25, capex 1T25,
> dívida líquida em 31/03/2025, guidance de receita para 2025.

**Etapa 2: checagem cruzada:**
> Os números que você extraiu batem com os que estão na tabela de
> destaques financeiros na página 2 do release? Aponte qualquer
> divergência antes de eu usar esses dados.

**Nota para o facilitador:** o exercício de duas etapas ensina o
participante a usar a IA como extrator, não como oráculo. A etapa 2
é o coração da aula de confiança (ver Módulo 2, bloco de verificação).

### Variante: Operações / Backoffice

**Caso: conciliação de posições a partir de dois extratos**

Prompt para exercício:

> Tenho dois arquivos: o extrato da custodiante e o extrato do sistema
> interno. Compare as posições linha a linha e produza: (1) itens que
> batem nos dois sistemas, (2) itens que aparecem em um e não no outro,
> (3) itens com quantidade ou valor divergente.
> Não arredonde diferenças: se houver qualquer divergência, mesmo de
> centavos, liste.
> Extrato custodiante: [participante cola ou anexa]
> Extrato interno: [participante cola ou anexa]

### Variante: Jurídico / Compliance

**Caso: checagem de due diligence em fornecedor**

Prompt para exercício:

> Leia os documentos do fornecedor que compartilhei (contrato social,
> certidões, proposta comercial). Produza: (1) lista de itens de KYP
> que estão presentes e conformes, (2) itens ausentes ou vencidos,
> (3) pontos de atenção que merecem consulta ao jurídico antes de
> assinar. Cite o documento de origem para cada item.

### Variante: Comercial

**Caso: análise de regulamento de fundo para investidor**

Prompt para exercício:

> Leia o regulamento do fundo que está no arquivo. O investidor quer
> saber: (1) qual a política de liquidez e prazo de resgate, (2) quais
> são as taxas cobradas, (3) quais os riscos explicitamente declarados.
> Responda em linguagem acessível, sem jargão técnico.
> Se uma informação não estiver no regulamento, diga explicitamente.

---

## Módulo 4: substituir o exemplo de skill

### Analistas de investimento

**Caso: checagem de compliance em e-mail**

Prompt para exercício:

> Você é um revisor de comunicações de uma gestora de recursos.
> Leia o e-mail abaixo e identifique: (1) menções a rentabilidade futura
> sem disclaimer adequado, (2) linguagem que pode ser interpretada como
> promessa de retorno, (3) informações que precisam de aprovação de
> compliance antes de enviar.
> E-mail: [participante cola o texto]

### Variante: Operações / Backoffice

**Caso: skill de relatório diário de operações**

Prompt base para criar a skill:

> Toda vez que eu usar esta skill, vou colar o boletim de operações do dia.
> Produza: (1) resumo em 3 linhas do que foi feito, (2) lista de itens
> que precisam de follow-up até amanhã, (3) flag se houver qualquer
> operação fora do padrão (volume atípico, ativo incomum, prazo diferente
> do usual). Formato: markdown simples, sem tabelas longas.

### Variante: Jurídico / Compliance

**Caso: skill de revisão de ata de gestão**

Prompt base para criar a skill:

> Toda vez que eu usar esta skill, vou colar o texto de uma ata de
> reunião de gestão. Produza: (1) decisões tomadas com o quórum presente,
> (2) matérias que exigem registro em órgão regulador, (3) pendências
> com prazo. Sinalize se faltar informação de quórum ou data.

### Variante: Comercial

**Caso: skill de triagem de e-mails de investidores**

Prompt base para criar a skill:

> Toda vez que eu usar esta skill, vou colar um e-mail de investidor.
> Classifique o e-mail em uma destas categorias: solicitação de resgate,
> aporte, dúvida sobre extrato, dúvida sobre estratégia, reclamação,
> outro. Depois indique: (1) qual área deve responder, (2) prazo regulatório
> se aplicável, (3) rascunho de resposta de acuse de recebimento em tom
> formal mas direto.

### Variante: Administrativo

**Caso: skill de consolidação de despesas do cartão**

Prompt base para criar a skill:

> Toda vez que eu usar esta skill, vou colar o extrato do cartão
> corporativo. Produza uma tabela com: data, estabelecimento, valor,
> categoria sugerida (viagem, refeição, material, fornecedor, outro),
> flag se o valor parecer fora do padrão para a categoria.
> Não classifique itens ambíguos por conta própria: liste-os separados
> para revisão manual.
