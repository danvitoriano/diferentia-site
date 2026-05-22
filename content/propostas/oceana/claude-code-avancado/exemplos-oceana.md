# Exemplos específicos Oceana: Claude Code Avançado

Use estes exemplos nos módulos indicados para substituir os exemplos genéricos.
Os arquivos de demonstração ficam em `dados/releases-demo/` (números fictícios).
Cada módulo traz o exemplo padrão (analistas) seguido de variantes por área.

---

## Módulo 1: substituir o projeto Git genérico

### Analistas de investimento

**Caso: repositório de scripts de análise**

O participante versiona com Git uma pasta que contém scripts de análise
de releases. Cada commit representa uma melhoria no script.

### Variante: Operações / Backoffice

**Caso: repositório de scripts de conciliação**

O participante versiona uma pasta com scripts Python que processam
extratos da custodiante. Cada commit representa um tipo de divergência
que o script passou a identificar automaticamente.

### Variante: Jurídico / Compliance

**Caso: repositório de templates de due diligence**

O participante versiona uma pasta com prompts e checklists de due
diligence. O histórico de Git serve como trilha de auditoria de
quando cada template foi criado ou atualizado.

---

## Módulo 2: substituir os slash commands genéricos

### Analistas de investimento

**Slash command sugerido para o exercício**

Arquivo `.claude/commands/analisar-release.md`:

> Leia o arquivo $ARGUMENTS ou, se não informado, pergunte qual release
> analisar. Extraia os 5 principais indicadores financeiros e compare
> com o trimestre anterior se houver histórico na pasta dados/.
> Entregue em tabela markdown. Não invente números: se faltar dado, diga.

**CLAUDE.md sugerido para o exercício:**

> Este projeto processa releases de resultados da carteira da Oceana.
> Arquivos em dados/releases/ são documentos financeiros reais: > nunca compartilhe conteúdo desses arquivos fora do projeto.
> Sempre cite o documento de origem ao apresentar números.

### Variante: Operações / Backoffice

**Slash command sugerido para o exercício**

Arquivo `.claude/commands/conciliar.md`:

> Leia os arquivos $ARGUMENTS (esperado: dois CSVs, custodiante e interno).
> Compare posição a posição e produza um relatório markdown com:
> itens que batem, divergências de quantidade, divergências de valor,
> itens exclusivos de cada fonte.
> Não arredonde diferenças. Se um arquivo não for encontrado, avise.

**CLAUDE.md sugerido para o exercício:**

> Este projeto processa extratos de posição da Oceana.
> Os arquivos em dados/ contêm posições reais: nunca exporte
> ou compartilhe fora do ambiente seguro.
> Sempre registre a data e hora da conciliação no relatório.

### Variante: Jurídico / Compliance

**Slash command sugerido para o exercício**

Arquivo `.claude/commands/revisar-ata.md`:

> Leia o arquivo $ARGUMENTS (ata de reunião de gestão).
> Produza: decisões tomadas com quórum registrado, matérias que exigem
> registro regulatório, pendências com prazo.
> Sinalize se faltar quórum ou data no documento.

---

## Módulo 3: substituir o CSV genérico

### Analistas de investimento

**Pasta `dados/releases-demo/`**

Releases fictícios de empresas públicas (números inventados; uso apenas em treinamento):

- `VALE3_4T24_FICTICIO.txt`
- `VALE3_1T25_FICTICIO.txt`
- `PETR4_1T25_FICTICIO.txt`

Prompt para o exercício com MCP:

> Use a ferramenta MCP para listar os arquivos em dados/releases-demo/.
> Leia o release mais recente e extraia os indicadores financeiros.
> Compare com o release anterior da mesma empresa se existir.
> Mostre as variações percentuais.

### Variante: Operações / Backoffice

**Pasta `dados/conciliacao-demo/`**

CSVs fictícios de posição (números inventados; uso apenas em treinamento):

- `custodiante_2025-03-31_FICTICIO.csv`
- `interno_2025-03-31_FICTICIO.csv`

Prompt para o exercício com MCP:

> Use a ferramenta MCP para ler os dois arquivos em dados/conciliacao-demo/.
> Compare as posições e produza um relatório de divergências.
> Para cada divergência, calcule o impacto financeiro estimado
> (diferença de quantidade vezes o preço unitário informado no arquivo).

### Variante: Jurídico / Compliance

**Pasta `dados/contratos-demo/`**

Documentos fictícios de due diligence (conteúdo inventado; uso apenas em treinamento):

- `fornecedor_A_contrato_FICTICIO.txt`
- `fornecedor_A_certidoes_FICTICIO.txt`

Prompt para o exercício com MCP:

> Use a ferramenta MCP para ler os arquivos em dados/contratos-demo/.
> Produza um relatório de due diligence: itens presentes e conformes,
> itens ausentes, pontos de atenção para o jurídico.
> Cite o documento e a seção de origem para cada item.
