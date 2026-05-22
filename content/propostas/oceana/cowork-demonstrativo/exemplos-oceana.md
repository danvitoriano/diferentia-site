# Exemplos Oceana: Automação com Claude Cowork

Casos de uso e prompts adaptados para a Oceana Investimentos.
Usar como referência para preparação de demo e mapeamento coletivo.

---

## Pasta de trabalho para demo (preparar antes da aula)

Estrutura recomendada da pasta de demo do facilitador:

```
/pasta-oceana-demo/
  release-cpfl-1t25.pdf
  release-cpfl-4t24.pdf
  relatorio-gestao-abr25.docx
  acompanhamento-carteira.xlsx
```

Os arquivos podem ser fictícios mas devem ter dados realistas do setor de utilities e energia (CPFL, Energias do Brasil, Taesa ou similar). Evitar empresas com posição ativa declarada.

---

## Prompts de demo por bloco

### Bloco 2: O Claude que conhece seus arquivos

**Demo 1: busca e mapeamento**
```
Quais arquivos desta pasta têm relação com resultados financeiros do primeiro trimestre?
Liste os nomes, as datas de modificação e um resumo de uma linha do que cada um contém.
```

**Demo 2: leitura e síntese**
```
Abra o arquivo release-cpfl-1t25.pdf e faça um resumo executivo das principais métricas
financeiras do trimestre. Use o formato de nota interna da Oceana: três pontos positivos,
dois pontos de atenção, uma linha de conclusão.
```

**Demo 3: comparação de trimestres**
```
Compare os dois releases desta pasta. Me diga o que melhorou, o que piorou e o que ficou
estável entre os dois trimestres. Use uma tabela de comparação com as linhas: receita
líquida, EBITDA, margem EBITDA, lucro líquido, dívida líquida.
```

---

### Bloco 3: O Claude que cria documentos reais

**Demo 1: nota de análise em Word**
```
Com base no resumo que você fez do release agora há pouco, crie um documento Word chamado
"Nota de Análise Q1 2025". Use formatação profissional: título, data, seção de métricas
principais em tabela, seção de pontos de atenção e uma conclusão de dois parágrafos.
Salve na pasta de trabalho.
```

**Demo 2: comparativo em Excel**
```
Crie uma planilha Excel com os dados financeiros dos dois trimestres que você comparou.
Coluna por trimestre, linhas com as métricas principais: receita, EBITDA, lucro líquido,
margem, dívida líquida. Inclua uma linha de variação percentual entre os dois períodos.
Salve como "Comparativo Q1 vs Q4" na pasta de trabalho.
```

**Demo 3: apresentação PowerPoint**
```
Com base na planilha que você criou, gere uma apresentação de 4 slides: capa com o título
"Resultados Q1 2025: Oceana", um slide de métricas em tabela, um slide com os pontos de
atenção em bullets e um slide de conclusão com próximos catalisadores.
Salve como "Apresentação Q1" na pasta.
```

---

### Bloco 5: O Claude conectado às suas ferramentas

**Demo: Google Drive**
```
Busque no meu Google Drive os três documentos mais recentes da pasta "Relatórios de Gestão".
Me diga o nome, a data e um resumo de uma linha de cada um.
```

**Demo complementar: leitura de arquivo do Drive**
```
Abra o arquivo [nome do documento] que está no Drive e me diga os três pontos principais
que precisariam de atenção antes de uma reunião de revisão.
```

---

### Bloco 6: O Claude que trabalha enquanto você não está

**Tarefa agendada: briefing matinal**
```
Todo dia útil às 7h30, acesse o Google Drive, leia os arquivos modificados nas últimas 24h
na pasta "Relatórios de Gestão", verifique as tarefas abertas no sistema de gestão e gere
um resumo de "o que mudou e o que está pendente para hoje".
```

**Tarefa agendada: monitoramento de releases**
```
Toda segunda-feira às 8h, busque na web notícias sobre resultados trimestrais de empresas
de utilities e energia do Brasil publicadas nos últimos 7 dias. Liste por empresa com data,
fonte e uma linha de destaque. Se não houver novidade relevante, responda apenas:
"Nenhum release relevante publicado esta semana."
```

---

## Casos de uso para mapeamento coletivo (Bloco 7)

Sugestões de casos que costumam surgir no mapeamento e como classificar:

| Caso de uso | Viabilidade | Como configurar |
|---|---|---|
| Resumo diário de releases publicados | Viável hoje | Tarefa agendada com pesquisa na web |
| Nota de análise a partir de release | Viável hoje | Fluxo de leitura + criação de Word |
| Comparativo de trimestres em planilha | Viável hoje | Fluxo de comparação + criação de Excel |
| Triagem de e-mails de investidores | Viável com plugin de e-mail | Conector de e-mail + tarefa agendada |
| Atualização de status do portfólio | Viável com conector do sistema | Plugin customizado ou conector de planilha |
| Resumo de reunião com executivos | Viável hoje (com transcrição) | Leitura de transcrição + criação de ata |
| Alerta de indicador fora do limite | Viável com conector de dados | Plugin customizado + tarefa agendada |

---

## Adaptação por área da Oceana

| Área | Documentos de demo recomendados | Casos de uso prioritários |
|---|---|---|
| Análise de renda variável | Releases, modelos de valuation, relatórios setoriais | Síntese de release, comparativo de trimestres, briefing matinal |
| Crédito privado | Relatórios de emissor, dados de rating, documentos de covenants | Extração de indicadores, nota de risco, monitoramento de rating |
| Due diligence | Documentos de due diligence, contratos, estrutura societária | Leitura e síntese de documento, checklist de pontos de atenção |
| Compliance | E-mails institucionais, regulatórios, formulários | Triagem de e-mails, revisão de linguagem, monitoramento regulatório |
| Comercial | Propostas, relatórios de reunião, histórico de clientes | Ata de reunião, acompanhamento de pipeline, preparação de reunião |
