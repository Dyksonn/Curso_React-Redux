import React from 'react'

export default ({ max, min }) => (
    <div>
        <h2>Valor Aleatório</h2>
        <p>
            <strong>Valor Mínimo: <strong>{min}</strong></strong>
        </p>

        <p>
            <strong>Valor Máximo: <strong>{max}</strong></strong>
        </p>

        <p>
            <strong>Valor Escolhido: 
                <strong>
                    {parseInt(Math.random() * (max - min)) + min}
                </strong>
            </strong>
        </p>
    </div>
)