# Exemplos para a Oceana: Claude Code Avançado

Referências de projeto, slash commands e prompts com MCP para o terminal. Use dados fictícios em pastas de teste até validar com compliance.

---

## Versionamento com Git

### Analistas de investimento

Versione uma pasta com scripts de análise de releases. Cada melhoria no script vira um commit com mensagem clara do que mudou.

### Operações / Backoffice

Versione scripts Python que processam extratos da custodiante. O histórico de Git documenta quando cada tipo de divergência passou a ser detectado.

### Jurídico / Compliance

Versione templates e checklists de due diligence. O histórico serve como trilha de quando cada template foi criado ou atualizado.

---

## Slash commands

### Analistas de investimento

Arquivo `.claude/commands/analisar-release.md`:

```
Leia o arquivo $ARGUMENTS ou, se não informado, pergunte qual release
analisar. Extraia os 5 principais indicadores financeiros e compare
com o trimestre anterior se houver histórico na pasta dados/.
Entregue em tabela markdown. Não invente números: se faltar dado, diga.
```

Trecho sugerido para `CLAUDE.md`:

```
Este projeto processa releases de resultados da carteira da Oceana.
Arquivos em dados/releases/ são documentos financeiros sensíveis:
nunca compartilhe conteúdo desses arquivos fora do projeto.
Sempre cite o documento de origem ao apresentar números.
```

### Operações / Backoffice

Arquivo `.claude/commands/conciliar.md`:

```
Leia os arquivos $ARGUMENTS (esperado: dois CSVs, custodiante e interno).
Compare posição a posição e produza um relatório markdown com:
itens que batem, divergências de quantidade, divergências de valor,
itens exclusivos de cada fonte.
Não arredonde diferenças. Se um arquivo não for encontrado, avise.
```

### Jurídico / Compliance

Arquivo `.claude/commands/revisar-ata.md`:

```
Leia o arquivo $ARGUMENTS (ata de reunião de gestão).
Produza: decisões tomadas com quórum registrado, matérias que exigem
registro regulatório, pendências com prazo.
Sinalize se faltar quórum ou data no documento.
```

---

## MCP e leitura de dados

### Analistas de investimento

Pasta de teste: `dados/releases-demo/` com releases fictícios (ex.: `VALE3_4T24_FICTICIO.txt`, `PETR4_1T25_FICTICIO.txt`).

```
Use a ferramenta MCP para listar os arquivos em dados/releases-demo/.
Leia o release mais recente e extraia os indicadores financeiros.
Compare com o release anterior da mesma empresa se existir.
Mostre as variações percentuais.
```

### Operações / Backoffice

Pasta de teste: `dados/conciliacao-demo/` com CSVs fictícios de posição.

```
Use a ferramenta MCP para ler os dois arquivos em dados/conciliacao-demo/.
Compare as posições e produza um relatório de divergências.
Para cada divergência, calcule o impacto financeiro estimado
(diferença de quantidade vezes o preço unitário informado no arquivo).
```

### Jurídico / Compliance

Pasta de teste: `dados/contratos-demo/` com documentos fictícios de fornecedor.

```
Use a ferramenta MCP para ler os arquivos em dados/contratos-demo/.
Produza um relatório de due diligence: itens presentes e conformes,
itens ausentes, pontos de atenção para o jurídico.
Cite o documento e a seção de origem para cada item.
```
