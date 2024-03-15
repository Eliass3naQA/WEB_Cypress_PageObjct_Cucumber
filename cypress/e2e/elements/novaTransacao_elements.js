class NovaTransacaoElements {
    
    btnNovaTransacao = () => {return '#transaction .button'}
    campoDescricao = () => {return '#description'}
    campoValor = () => {return '[name=amount]'}
    campoData = () => {return '[type=date]'}
    btnSalvar = () => {return 'Salvar', 'button'}
    btnExcluir = () => {return 'img', '[onclick*=remove]'}

} export default NovaTransacaoElements