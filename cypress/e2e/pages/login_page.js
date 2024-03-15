/// <reference types="Cypress" />
import NovaTransacaoElements from "../elements/novaTransacao_elements"
import ValidacaoElements from "../elements/validacao_elements"

const novaTransacaoElements = new NovaTransacaoElements
const validacaoElements = new ValidacaoElements

const url = Cypress.config('baseUrl')

class LoginPage{

        NovaTransacao(){
            cy.visit(url)
            cy.wait(1000)
            cy.get('#data-table tbody tr').should('have.length', 0)
            cy.get(novaTransacaoElements.btnNovaTransacao()).click()
        }

        CampoDescricao(entrada){
            cy.get(novaTransacaoElements.campoDescricao()).type(entrada)
        }

        CampoValor(valor){
            cy.get(novaTransacaoElements.campoValor()).type(valor)
        }

        CampoData(data) {
            cy.get(novaTransacaoElements.campoData()).type(data)
        }

        BotaoSalvar (){
            cy.get(novaTransacaoElements.btnSalvar()).click()
        }

        ValidarLista (valor){
            cy.get(validacaoElements.ValidarList()).should('have.length', valor)
        }

        Esperar (tempo){
            cy.wait(tempo)
        }

        Excluir () {

            cy.get(novaTransacaoElements.btnExcluir()).click()
        }


        ClearCokies(){
            cy.clearCookies()
        }

        Screenshot(name){
            cy.screenshot(name)
        }


}export default LoginPage