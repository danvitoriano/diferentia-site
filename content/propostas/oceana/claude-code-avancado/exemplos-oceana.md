## TI / Desenvolvimento

**Entregas**

- Projeto no GitHub com histórico de commits e padrão de mensagem do time
- Biblioteca de slash commands em `.claude/commands` (revisão, deploy, análise de diff)
- `CLAUDE.md` com políticas de segurança, escopo de dados e padrões de código
- Hooks para etapas automáticas (ex.: checagem antes de commit ou após geração de código)
- MCP configurado para ambiente de dev/teste (pastas ou APIs aprovadas pela TI)
- Documentação de como outro desenvolvedor clona, roda e estende o projeto

**Processos priorizados**

- Versionamento de ferramentas internas, integrações, pipelines de suporte a dados, governança de secrets e compliance

---

## Analistas de investimento

**Entregas**

- Repositório Git com scripts de análise de releases versionados
- Slash command para extrair e comparar indicadores de release
- MCP para pasta de releases de teste (com regras no `CLAUDE.md`)
- Fluxo documentado para o time de análise usar sem depender da TI para cada ajuste

**Processos priorizados**

- Automação de rotinas repetitivas de análise e extração de dados

---

## Operações / Backoffice

**Entregas**

- Repositório com scripts de conciliação versionados
- Slash command para comparar extratos e gerar relatório de divergências
- MCP para pasta de dados operacionais de teste
- Registro de data/hora e responsável em cada execução do fluxo

**Processos priorizados**

- Conciliação, batimento, relatórios de divergência

---

## Jurídico / Compliance

**Entregas**

- Repositório de templates e checklists de due diligence com histórico Git
- Slash command para revisão de ata de gestão
- MCP para pasta de contratos de teste (somente dados fictícios ou aprovados)
- Trilha de auditoria de quando cada template foi atualizado

**Processos priorizados**

- Due diligence, revisão de atas, triagem documental

---

## Comercial

**Entregas**

- Slash command para rascunho de resposta a formulário (com argumentos para o caso)
- `CLAUDE.md` com regras de tom e compliance para comunicação com investidores
- Fluxo integrado ao material institucional aprovado da Oceana

**Processos priorizados**

- Formulários de investidores, triagem de comunicações

---

## Módulo opcional (API / Agent SDK)

- Visão de como o time de TI leva fluxos validados para pipelines, CI e integrações com engenharia (conceitual, sem expor credenciais em aula)
