Projetos e prompts para construir ferramentas no terminal. Cada bloco traz um exemplo para **análise de investimentos** e variantes por área.

---

## Primeiro projeto: painel ou ferramenta web

### Analistas de investimento

**Painel de releases**

```
Crie um arquivo index.html que funcione como leitor de releases de
resultados financeiros. O usuário cola o texto do release em uma
área de texto, clica em "Analisar" e o painel exibe: receita líquida,
EBITDA, lucro líquido e dívida líquida em cards. Use HTML, CSS e
JavaScript puro. Layout limpo, sem dependências externas.
```

### Operações / Backoffice

**Conciliador de carteiras**

```
Crie um arquivo index.html onde o usuário cola dois extratos de
posição (custodiante e sistema interno) em duas áreas de texto.
Ao clicar em "Conciliar", o painel compara os dois linha a linha
e exibe: itens que batem (verde), itens com divergência de quantidade
ou valor (amarelo), itens que aparecem em só um dos lados (vermelho).
Use HTML, CSS e JavaScript puro.
```

### Jurídico / Compliance

**Checklist de due diligence**

```
Crie um arquivo index.html onde o usuário cola o texto de um contrato
ou documento de fornecedor em uma área de texto e define uma lista de
itens que precisa verificar (ex: "CNPJ", "prazo de vigência", "cláusula
de rescisão", "dados pessoais"). Ao clicar em "Verificar", o painel
indica quais itens foram encontrados e quais estão ausentes.
Use HTML, CSS e JavaScript puro.
```

### Comercial

**Gerador de respostas a formulário de investidor**

```
Crie um arquivo index.html com dois campos: um para colar o formulário
de due diligence do investidor e outro para colar o material de referência
da gestora. Ao clicar em "Preparar respostas", exibe um rascunho de
resposta para cada pergunta, marcando as que ficaram sem dado suficiente
com um badge vermelho "PENDENTE". Use HTML, CSS e JavaScript puro.
```

---

## Evoluir e publicar o projeto

### Analistas de investimento

```
Adicione ao painel a capacidade de salvar os dados de um trimestre
e comparar com o próximo. Mostre a variação percentual em cada
indicador. Use localStorage para persistir os dados entre sessões.
```

### Operações / Backoffice

```
Adicione ao conciliador a capacidade de salvar o resultado de cada
conciliação com data e hora. Mostre um painel de histórico com os
últimos 30 dias e destaque se um mesmo item aparece com divergência
repetida. Use localStorage para persistir os dados.
```

### Jurídico / Compliance

```
Adicione ao checklist a capacidade de registrar uma data de validade
para cada item verificado. Mostre um painel de alertas com os
documentos que vencem nos próximos 30 dias. Use localStorage para persistir os dados.
```

### Comercial

```
Prepare o projeto para deploy: crie um README com instruções de uso,
adicione um campo para o usuário configurar o tom da resposta (formal,
semiformal) e publique na Vercel com URL pública para o time comercial
acessar sem precisar abrir o código.
```
