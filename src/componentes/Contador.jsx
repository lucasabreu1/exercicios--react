import React, { Component } from 'react'


export default class Contador extends Component {

    constructor(props){
        super(props)
        this.state = { numero: this.props.numeroInicial}

    }

    // This passa a respeitar o contexto lexico da funcao(onde foi escrita)
    //ou seja, sempre apontará para uma instância da classe Contador
    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
    }

    menosUm = (e) => {
        this.setState({numero: this.state.numero - 1})
        console.log(this.props.numeroInicial)
    }

    alterarNumero = diferenca => {
        this.setState({
            numero: this.state.numero + diferenca
        })
    }
    
    render(){
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alterarNumero(10)}>Inc 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Inc 10</button>
            </div>
        )
    }
}


// Solucao 01 - Bind
// constructor(props) {
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }


// Solucao 02 - Funcao Arrow (onClick)
// <button onClick={() =>this.maisUm()}>Inc</button>

// Solucao 03 - Funcao Arrow
// This passa a respeitar o contexto lexico da funcao(onde foi escrita)
//ou seja, sempre apontará para uma instância da classe Contador
//    maisUm = () => {
    //this.props.numero++
//    console.log(this)
//}