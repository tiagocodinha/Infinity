document.addEventListener('DOMContentLoaded', function() {
    const selecaoBaile = document.getElementById('selecao-baile');

    selecaoBaile.addEventListener('change', function() {
        const baileSelecionado = this.value;

        if (baileSelecionado) {
            // Redirecionar para a página de detalhes do baile
            // Você pode adicionar lógica para redirecionar para diferentes páginas
            // com base no baile selecionado.
            window.location.href = 'baile.html';
        }
    });

    const formContacto = document.getElementById('form-contacto');
    formContacto.addEventListener('submit', function(event) {
        event.preventDefault(); // Impedir o envio padrão do formulário
        alert('Formulário de contacto enviado! (Funcionalidade não implementada no backend)');
    });

    const formPagamento = document.getElementById('form-pagamento');
        if (formPagamento) { // Verificar se o formulário existe na página
            formPagamento.addEventListener('submit', function(event) {
                event.preventDefault(); // Impedir o envio padrão do formulário
                alert('Pagamento submetido! (Integração com EuPago precisa ser implementada).');
            });
    }

});