# 🧪 Automação de Testes E2E - Desafio Sea Tecnologia

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Faker](https://img.shields.io/badge/Faker.js-Data_Generation-blue?style=for-the-badge)

Projeto de automação de testes End-to-End (E2E) desenvolvido como parte do desafio técnico para QA. O projeto valida o fluxo crítico de gestão de funcionários, cobrindo cenários de sucesso, validação de campos e regras de negócio

##

## 🚀 Destaques Técnicos (O Diferencial)
Para garantir a qualidade e a manutenção dos testes, o projeto adota estruturas de código limpo e padrões de mercado:
* **Massa de Dados Dinâmica:** Utilização da biblioteca `@faker-js/faker` para gerar nomes, CPFs e dados aleatórios, garantindo testes sempre novos

* **Estratégia "Wait":** Uso de `cy.intercept` e aliases (`@postCadastro`) para aguardar o retorno real da API, eliminando "flaky tests" causados por `cy.wait()` fixos

* **Validação Nativa HTML5:** Verificação da propriedade `validity` dos inputs para garantir que o navegador está bloqueando o envio de campos obrigatórios

* **Interações Complexas:** Automação de componentes como `Switch`, `Select` (Ant Design) e **Upload de Arquivos** (`.selectFile`)

##

## ⚙️ Funcionalidades Cobertas
Os testes estão organizados em suítes na pasta `cypress/e2e/`:

| Arquivo | Cenários Cobertos |
| :--- | :--- |
| `cadastro-funcionario.cy.js` | • Cadastro Ativo/Inativo (Com e Sem EPI)<br>• Upload de Atestado<br>• Validação de Campos Obrigatórios |
| `filtro.cy.js` | • Filtragem por status "Ativo"<br>• Limpeza de filtros |
| `navegação.cy.js` | • Navegação entre telas (Botão Voltar) |

##

## 📚 Documentação Detalhada (Entregáveis)
Acesse os artefatos completos de QA gerados durante o desafio clicando nos links abaixo:

| Documento | Descrição |
| :--- | :--- |
| 📄 **[Plano de Testes Mestre](https://www.notion.so/Plano-de-Testes-Gest-o-de-Funcion-rios-SEA-Tecnologia-302a31df9d3380439fc9c0105daf4940)** | Estratégia de testes, escopo, ferramentas, riscos e cronograma |
| 📋 **[Regras de Negócio e Critérios de Aceite](https://www.notion.so/Documenta-o-Funcional-e-BDD-2fda31df9d33803d90cad8a39dfd5bcf)** | Detalhamento das User Stories, Regras de Negócio (RN) e Cenários BDD (Gherkin) |
| 🐞 **[Casos de Teste e Bugs Reportados](https://www.notion.so/Relat-rio-de-Testes-e-Bugs-2fba31df9d33807d83dcfc31c5fe0296)** | Matriz de execução, evidências de testes e relatório de defeitos encontrados |
| 💡 **[Análise de Qualidade e Melhorias](https://www.notion.so/An-lise-de-Qualidade-e-Sugest-es-de-Melhoria-302a31df9d3380a7a6e2c3ca56ba7cb6)** | Relatório de UX, Acessibilidade e sugestões técnicas para o produto |

> *Para visualizar a automação em código, acesse a pasta [`cypress/e2e`](./cypress/e2e)*

##

## 💻 Como Rodar o Projeto

### Pré-requisitos
* Node.js instalado.

### Passo a Passo
1.  Clone o repositório:
    ```bash
    git clone https://github.com/rodneygoisbsb/desafioqa-sea-tecnologia.git
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Execute os testes (Interface Visual):
    ```bash
    npx cypress open
    ```
4.  Execute em modo Headless (Terminal):
    ```bash
    npx cypress run
    ```

---
**Desenvolvido por Rodney Gois** 🚀