import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import A, {CompB  as B} from './componentes/DoisComponentes'
//import Multi from './componentes/MultiElementos'
//import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'
import Hook from './componentes/Hook'


const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Hook></Hook>
        {/* <Contador numeroInicial={0}/> */}
        {/* <ComponenteClasse valor=""/> */}
        {/* <Pai /> */}
         {/* <ComponenteComFuncao/> */}
         {/* <Familia sobrenome="Pereira" numero={123}>
          <Membro nome="Andre"/>
          <Membro nome="Mariana"/>
         </Familia> */}
         {/* <FamiliaSilva/> */}
         {/*<Multi/>*/}
          {/* <A valor="Olá eu sou A!" />
          <B valor="B na área!" /> */}
         {/*<PrimeiroComponente valor="Bom dia!"/>*/}
    </div>
, elemento)





 