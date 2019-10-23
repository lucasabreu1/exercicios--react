import React from 'react'

export default props => [
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>,
    <h2>Parte 3</h2>
]

//Solucao 2
// export default props =>
//         <React.Fragment>
//             <h1>Parte 1</h1>
//             <h2>Parte 2</h2>
//         </React.Fragment>


//Solucao 1 mais usada
// export default props =>
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </div>