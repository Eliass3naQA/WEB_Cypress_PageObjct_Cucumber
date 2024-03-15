#Author: Elias Sena Silva

Feature: Cadastro
Cadastrar entradas e saidas no sistema

Scenario: Cadastro de entrada
    Given eu acesse a pagina de cadastro
    When eu inserir os valores obrigatorios
    And clicar no botao salvar
    Then valido a lista com a quantidade esperada

Scenario: Cadastrar e excluir
    Given eu acesse a pagina de cadastro
    And eu cadastrar uma entrada
    When eu excluir a entrada cadastrada
    Then valido a lista apos excluir