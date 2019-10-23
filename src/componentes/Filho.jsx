import React from 'react'

//Pai passando uma funcao para o filho
//quando um determinado evento no filho ocorrer
//essa funcao eh executada e notifica o componente pai


export default props =>
    <div>
        <button 
            onClick={() => props.notificarSaida('Praia')}>
            Vou sair
        </button>
    </div>