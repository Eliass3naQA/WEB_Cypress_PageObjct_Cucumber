/// <reference types="Cypress" />

import LoginPage from "../pages/login_page";
const loginPage = new LoginPage

beforeEach(() => {
    loginPage.ClearCokies()
    
  
  });

Given(/^eu acesse a pagina de cadastro$/, () => {
	
    loginPage.NovaTransacao()    
});

Then(/^eu cadastrar uma entrada$/, () => {
	
    loginPage.CampoDescricao('entrada')
    loginPage.CampoValor(300)
    loginPage.CampoData('2024-02-15')
    loginPage.Screenshot('informacoes preenchidas')
    loginPage.BotaoSalvar()
    loginPage.Screenshot('informacoes salvas')
});

When(/^eu excluir a entrada cadastrada$/, () => {

    loginPage.Excluir()
    loginPage.Screenshot('cadastro excluido')
});

Then(/^valido a lista apos excluir$/, () => {

    loginPage.ValidarLista(0)
});