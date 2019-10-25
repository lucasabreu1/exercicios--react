import React, {useState, useEffect} from 'react'


export default props => {
    //valor inicial do estado, funcao para alterar o estado
    const [contador, setContador] = useState(100)
    const [status, setParOuImpar] = useState('Par')

    //chamada sempre que o componente eh montado ou atualizado!
    // similiar ao setMount e setUpdate
    // Componente é montado, tem as variaveis setadas, e depois renderizado

    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par'):
            setParOuImpar("Impar") 
    })

    return (
        <div>
            <h1>{contador}</h1>
            <h3>{status}</h3>
            <button onClick={() => setContador(contador+1)}>Inc</button>
        </div>
    )
}