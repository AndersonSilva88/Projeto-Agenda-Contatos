const form = document.getElementById('form-contatos');
const nomeContatos = [];
const numeroContatos = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();

});

function adicionarLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nomeContatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi cadastrado!`);
    } else {
        nomeContatos.push(inputNomeContato.value);
        numeroContatos.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';

}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}