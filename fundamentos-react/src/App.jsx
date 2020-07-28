import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

// Arrow function anonima
export default () => (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Aleatorio max={10} min={2} />

            <Fragmento />

            <ComParametro 
                titulo="Terceiro Componente" 
                aluno="Maria" nota={5.5} />
            <ComParametro 
                titulo="Segundo Componente" 
                aluno="Dykson" nota={9.5} />

            <Primeiro />
        </div>
)