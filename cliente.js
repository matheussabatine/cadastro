class Cliente {
    constructor() {
        this.clientes = localStorage.getItem('chave') === null
        ? []
        :JSON.parse(localStorage.getItem('chave'))
    }
    salva(cliente){
        if(document.getElementById('código').getAttribute('disabled') === 'disabled'){
            this.apaga(cliente.código)
        }
        this.clientes.push(cliente)
        localStorage.setItem('chave', JSON.stringify(this.clientes))
        alert('salvo com sucesso')
    }

    apaga(código){
        let index = this.clientes.findIndex(cliente => cliente.código == código)
        this.clientes.splice(index, 1) //index é o elemento do array
        //salvamos a alteração
        localStorage.setItem('chave',JSON.stringify(this.clientes))
        cliente.atualiza()
    }

    edita(cliente){
        document.getElementById('código').setAttribute('disabled','disabled')
        document.getElementById('código').value = cliente.código
        document.getElementById('nome').value = cliente.nome
        document.getElementById('cep').value = cliente.cep
        document.getElementById('endereço').value = cliente.endereço
        document.getElementById('bairro').value = cliente.bairro
        document.getElementById('cidade').value = cliente.cidade
        document.getElementById('observações').value = cliente.observações
    }
    lista(){
        const listagem = this.clientes.map((cliente) =>(
            `<tr>
                <td>${cliente.código}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.cep}</td>
                <td>${cliente.endereço}</td>
                <td>${cliente.bairro}</td>
                <td>${cliente.cidade}</td>
                <td>${cliente.observações}</td>
                <td>
                <button id='apagar' onClick='cliente.apaga(${cliente.código})'>
                🗑️Apagar</button>
                <button id='editar' onClick='cliente.edita(${JSON.stringify(cliente)})'>
                ✏️Editar</button>
            </td>
            </tr>`
        ))
        return (`<table border='1' class='paleBlueRows'>
        <caption>Relação dos Clientes</caption>
        <thead>
            <th>Código</th>  <th>Nome</th> <th>CEP</th> <th>Endereço</th> 
            <th>Bairro</th>  <th>Cidade</th> <th>Observações</th><th>Opções</th>
        </thead>
        <tbody>${listagem}</tbody>      
        </table>
        `)
    }
    atualiza(){
        document.getElementById('listagem').innerHTML = cliente.lista()
    }
}


const cliente = new Cliente()
document.getElementById('salvar').onclick = function (){
    alert('ok')
    const registro = {
        código: document.getElementById('código').value,
        nome: document.getElementById('nome').value,
        cep: document.getElementById('cep').value,
        endereço: document.getElementById('endereço').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        observações: document.getElementById('observações').value

    }
    cliente.salva(registro)
}
window.onload = function() {
    cliente.atualiza()
}