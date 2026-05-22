Prompts organizados por tema do curso. Em cada bloco há um exemplo para **análise de investimentos** e variantes por área (operações, jurídico, comercial, administrativo).

---

## Análise de textos e documentos

### Analistas de investimento

**Resumo de ata de reunião**

```
Você é um assistente de analistas de investimento da Oceana.
Leia a ata abaixo e produza: (1) lista de decisões tomadas,
(2) lista de pendências com responsável e prazo, (3) um parágrafo
de resumo executivo em até 5 linhas.

Cole a ata abaixo:
```

### Operações / Backoffice

**Sumário de pendências operacionais do dia**

```
Leia o extrato de movimentações abaixo e identifique: (1) trades que
ainda precisam de confirmação de contraparte, (2) discrepâncias entre
quantidade negociada e quantidade liquidada, (3) itens que exigem ação
antes do fechamento do dia.
Se um item não tiver informação suficiente para classificar, diga
explicitamente em vez de assumir.

Cole o extrato abaixo:
```

### Jurídico / Compliance

**Extração de obrigações de contrato**

```
Leia o contrato abaixo e produza: (1) lista de obrigações da Oceana
com prazo definido, (2) cláusulas que exigem aprovação interna antes
de qualquer ação, (3) pontos que precisam de atenção de compliance
(dados pessoais, sigilo, vedações regulatórias).
Cite o número da cláusula para cada item.
Se uma cláusula for ambígua, sinalize em vez de interpretar.

Cole o contrato abaixo:
```

### Comercial

**Resposta a formulário de investidor**

```
Leia o formulário de due diligence abaixo e rascunhe respostas para
cada pergunta usando as informações que eu vou fornecer logo depois.
Para perguntas que você não tem dados suficientes para responder,
deixe marcado como [PENDENTE: informação necessária].
Não invente nenhum dado sobre a gestora, a carteira ou o time.

Cole o formulário e, em seguida, o material de referência:
```

### Administrativo

**Organização de solicitações de viagem**

```
Leia os e-mails abaixo com solicitações de viagem e produza uma tabela
com as colunas: colaborador, destino, data de ida, data de volta,
finalidade, status (confirmado / pendente / sem informação suficiente).
Para cada linha com informação faltando, liste o que precisa ser confirmado.

Cole os e-mails abaixo:
```

---

## Conectores e leitura de arquivos

### Analistas de investimento

**Leitor de releases de resultados**

```
Leia o release de resultados do 1T25 da empresa X que está no arquivo
que compartilhei. Extraia: receita líquida, EBITDA, lucro líquido,
dívida líquida e guidance para o próximo trimestre.
Apresente em tabela comparando com o trimestre anterior.
Se alguma informação não estiver no documento, diga explicitamente.
```

**Atualização de modelo a partir do release**

Etapa 1: mapeamento dos campos

```
Leia o release do 1T25 da empresa X que está no arquivo.
Abaixo estão os campos que preciso atualizar no meu modelo. Para cada
campo, encontre o número correspondente no release e cite a página ou
seção de origem. Se não encontrar, diga "não localizado".

Campos: receita líquida 1T25, EBITDA ajustado 1T25, capex 1T25,
dívida líquida em 31/03/2025, guidance de receita para 2025.
```

Etapa 2: checagem cruzada

```
Os números que você extraiu batem com os que estão na tabela de
destaques financeiros na página 2 do release? Aponte qualquer
divergência antes de eu usar esses dados.
```

### Operações / Backoffice

**Conciliação de posições a partir de dois extratos**

```
Tenho dois arquivos: o extrato da custodiante e o extrato do sistema
interno. Compare as posições linha a linha e produza: (1) itens que
batem nos dois sistemas, (2) itens que aparecem em um e não no outro,
(3) itens com quantidade ou valor divergente.
Não arredonde diferenças: se houver qualquer divergência, mesmo de
centavos, liste.

Anexe ou cole os dois extratos.
```

### Jurídico / Compliance

**Checagem de due diligence em fornecedor**

```
Leia os documentos do fornecedor que compartilhei (contrato social,
certidões, proposta comercial). Produza: (1) lista de itens de KYP
que estão presentes e conformes, (2) itens ausentes ou vencidos,
(3) pontos de atenção que merecem consulta ao jurídico antes de
assinar. Cite o documento de origem para cada item.
```

### Comercial

**Análise de regulamento de fundo para investidor**

```
Leia o regulamento do fundo que está no arquivo. O investidor quer
saber: (1) qual a política de liquidez e prazo de resgate, (2) quais
são as taxas cobradas, (3) quais os riscos explicitamente declarados.
Responda em linguagem acessível, sem jargão técnico.
Se uma informação não estiver no regulamento, diga explicitamente.
```

---

## Skills e automações

### Analistas de investimento

**Checagem de compliance em e-mail**

```
Você é um revisor de comunicações de uma gestora de recursos.
Leia o e-mail abaixo e identifique: (1) menções a rentabilidade futura
sem disclaimer adequado, (2) linguagem que pode ser interpretada como
promessa de retorno, (3) informações que precisam de aprovação de
compliance antes de enviar.

Cole o e-mail abaixo:
```

### Operações / Backoffice

**Skill: relatório diário de operações**

```
Toda vez que eu usar esta skill, vou colar o boletim de operações do dia.
Produza: (1) resumo em 3 linhas do que foi feito, (2) lista de itens
que precisam de follow-up até amanhã, (3) flag se houver qualquer
operação fora do padrão (volume atípico, ativo incomum, prazo diferente
do usual). Formato: markdown simples, sem tabelas longas.
```

### Jurídico / Compliance

**Skill: revisão de ata de gestão**

```
Toda vez que eu usar esta skill, vou colar o texto de uma ata de
reunião de gestão. Produza: (1) decisões tomadas com o quórum presente,
(2) matérias que exigem registro em órgão regulador, (3) pendências
com prazo. Sinalize se faltar informação de quórum ou data.
```

### Comercial

**Skill: triagem de e-mails de investidores**

```
Toda vez que eu usar esta skill, vou colar um e-mail de investidor.
Classifique o e-mail em uma destas categorias: solicitação de resgate,
aporte, dúvida sobre extrato, dúvida sobre estratégia, reclamação,
outro. Depois indique: (1) qual área deve responder, (2) prazo regulatório
se aplicável, (3) rascunho de resposta de acuse de recebimento em tom
formal mas direto.
```

### Administrativo

**Skill: consolidação de despesas do cartão**

```
Toda vez que eu usar esta skill, vou colar o extrato do cartão
corporativo. Produza uma tabela com: data, estabelecimento, valor,
categoria sugerida (viagem, refeição, material, fornecedor, outro),
flag se o valor parecer fora do padrão para a categoria.
Não classifique itens ambíguos por conta própria: liste-os separados
para revisão manual.
```
