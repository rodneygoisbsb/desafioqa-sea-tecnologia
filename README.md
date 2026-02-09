# 🧪 Automação de Testes E2E - Desafio Sea Tecnologia

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Faker](https://img.shields.io/badge/Faker.js-Data_Generation-blue?style=for-the-badge)

Projeto de automação de testes End-to-End (E2E) desenvolvido como parte do desafio técnico para QA. O projeto valida o fluxo crítico de gestão de funcionários, cobrindo cenários de sucesso, validação de campos e regras de negócio

## 🚀 Destaques Técnicos (O Diferencial)
Para garantir a qualidade e a manutenção dos testes, o projeto adota estruturas de código limpo e padrões de mercado:
* **Massa de Dados Dinâmica:** Utilização da biblioteca `@faker-js/faker` para gerar nomes, CPFs e dados aleatórios, garantindo testes sempre novos

* **Wait Strategies:** Uso de `cy.intercept` e aliases (`@postCadastro`) para aguardar o retorno real da API, eliminando "flaky tests" causados por `cy.wait()` fixos

* **Validação Nativa HTML5:** Verificação da propriedade `validity` dos inputs para garantir que o navegador está bloqueando o envio de campos obrigatórios

* **Interações Complexas:** Automação de componentes como `Switch`, `Select` (Ant Design) e **Upload de Arquivos** (`.selectFile`)

## ⚙️ Funcionalidades Cobertas
Os testes estão organizados em suítes na pasta `cypress/e2e/`:

| Arquivo | Cenários Cobertos |
| :--- | :--- |
| `cadastro-funcionario.cy.js` | • Cadastro Ativo/Inativo (Com e Sem EPI)<br>• Upload de Atestado<br>• Validação de Campos Obrigatórios |
| `filtro.cy.js` | • Filtragem por status "Ativo"<br>• Limpeza de filtros |
| `navegação.cy.js` | • Navegação entre telas (Botão Voltar) |

## 📚 Documentação e Planejamento
Este projeto conta com um plano de testes detalhado, mapeamento de bugs e estratégia de automação

👉 **([CLIQUE AQUI PARA VER O PLANO DE TESTES COMPLETO NO NOTION](https://www.notion.so/Plano-de-Testes-Gest-o-de-Funcion-rios-SEA-Tecnologia-302a31df9d3380439fc9c0105daf4940?source=copy_link))**


## 💻 Como Rodar o Projeto

### Pré-requisitos
* Node.js instalado.

### Passo a Passo
1.  Clone o repositório:
    ```bash
    git clone [https://github.com/SEU-USUARIO/nome-do-repo.git](https://github.com/SEU-USUARIO/nome-do-repo.git)
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