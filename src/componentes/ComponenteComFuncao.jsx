import React from 'react'


export default props => {
    const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']

    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    const cabecalhos = ["lucas", "pedro", "eliane", "joao"]
    const gerarH1 = itens => {
        return itens.map(item => <h1>{item}</h1>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
            <div>
                 {gerarH1(cabecalhos)}
            </div>
        </ul>
    )
}