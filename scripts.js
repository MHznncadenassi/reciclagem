document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const resposta = document.getElementById('resposta');
    resposta.innerHTML = `<p>Obrigado, ${nome}! Sua mensagem foi recebida.</p>`;

    // Limpa o formulário
    document.getElementById('contato-form').reset();
});
