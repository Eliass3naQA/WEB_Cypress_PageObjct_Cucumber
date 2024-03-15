/// <reference types="Cypress" />

import LoginPage from "../pages/login_page";
const loginPage = new LoginPage

beforeEach(() => {
    loginPage.ClearCokies()
    
  
  });

Given(/^eu acesse a pagina de cadastro$/, () => {
	
    loginPage.NovaTransacao()
    loginPage.Screenshot('imagem 1')
});
When(/^eu inserir os valores obrigatorios$/, () => {

    loginPage.CampoDescricao('entrada')
    loginPage.CampoValor(300)
    loginPage.CampoData('2024-02-15')
    loginPage.Screenshot('informacoes preenchidas') 
});
When(/^clicar no botao salvar$/, () => {
    
    loginPage.BotaoSalvar()
    loginPage.Screenshot('informacoes salvas')
});
Then(/^valido a lista com a quantidade esperada$/, () => {
	
    loginPage.ValidarLista(1)
});

