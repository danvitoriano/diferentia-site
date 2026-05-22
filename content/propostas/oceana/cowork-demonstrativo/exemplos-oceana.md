Prompts e fluxos para o app desktop do Claude com a pasta de trabalho conectada. Exemplos em utilities e energia (podem usar dados fictícios para teste).

---

## Organize sua pasta de trabalho

Exemplo de estrutura útil:

```
/pasta-oceana/
  release-cpfl-1t25.pdf
  release-cpfl-4t24.pdf
  relatorio-gestao-abr25.docx
  acompanhamento-carteira.xlsx
```

---

## Trabalhar com arquivos locais

**Busca e mapeamento**

```
Quais arquivos desta pasta têm relação com resultados financeiros do primeiro trimestre?
Liste os nomes, as datas de modificação e um resumo de uma linha do que cada um contém.
```

**Leitura e síntese**

```
Abra o arquivo release-cpfl-1t25.pdf e faça um resumo executivo das principais métricas
financeiras do trimestre. Use o formato de nota interna da Oceana: três pontos positivos,
dois pontos de atenção, uma linha de conclusão.
```

**Comparação de trimestres**

```
Compare os dois releases desta pasta. Me diga o que melhorou, o que piorou e o que ficou
estável entre os dois trimestres. Use uma tabela de comparação com as linhas: receita
líquida, EBITDA, margem EBITDA, lucro líquido, dívida líquida.
```

---

## Criar documentos a partir dos seus arquivos

**Nota de análise em Word**

```
Com base no resumo que você fez do release agora há pouco, crie um documento Word chamado
"Nota de Análise Q1 2025". Use formatação profissional: título, data, seção de métricas
principais em tabela, seção de pontos de atenção e uma conclusão de dois parágrafos.
Salve na pasta de trabalho.
```

**Comparativo em Excel**

```
Crie uma planilha Excel com os dados financeiros dos dois trimestres que você comparou.
Coluna por trimestre, linhas com as métricas principais: receita, EBITDA, lucro líquido,
margem, dívida líquida. Inclua uma linha de variação percentual entre os dois períodos.
Salve como "Comparativo Q1 vs Q4" na pasta de trabalho.
```

**Apresentação PowerPoint**

```
Com base na planilha que você criou, gere uma apresentação de 4 slides: capa com o título
"Resultados Q1 2025: Oceana", um slide de métricas em tabela, um slide com os pontos de
atenção em bullets e um slide de conclusão com próximos catalisadores.
Salve como "Apresentação Q1" na pasta.
```

---

## Google Drive e conectores

**Busca no Drive**

```
Busque no meu Google Drive os três documentos mais recentes da pasta "Relatórios de Gestão".
Me diga o nome, a data e um resumo de uma linha de cada um.
```

**Leitura de arquivo no Drive**

```
Abra o arquivo [nome do documento] que está no Drive e me diga os três pontos principais
que precisariam de atenção antes de uma reunião de revisão.
```

---

## Tarefas agendadas

**Briefing matinal**

```
Todo dia útil às 7h30, acesse o Google Drive, leia os arquivos modificados nas últimas 24h
na pasta "Relatórios de Gestão", verifique as tarefas abertas no sistema de gestão e gere
um resumo de "o que mudou e o que está pendente para hoje".
```

**Monitoramento de releases**

```
Toda segunda-feira às 8h, busque na web notícias sobre resultados trimestrais de empresas
de utilities e energia do Brasil publicadas nos últimos 7 dias. Liste por empresa com data,
fonte e uma linha de destaque. Se não houver novidade relevante, responda apenas:
"Nenhum release relevante publicado esta semana."
```

---

## Ideias de automação por área

| Área | O que automatizar | Como começar |
|---|---|---|
| Análise de renda variável | Síntese de release, comparativo de trimestres | Leitura de PDF na pasta + criação de Word/Excel |
| Crédito privado | Extração de indicadores, nota de risco | Leitura de relatórios de emissor na pasta |
| Due diligence | Checklist de pontos de atenção | Leitura de contratos e documentos de DD |
| Compliance | Triagem de e-mails, revisão de linguagem | Conector de e-mail + tarefa agendada |
| Comercial | Ata de reunião, preparação de reunião | Transcrição ou notas na pasta + síntese |
