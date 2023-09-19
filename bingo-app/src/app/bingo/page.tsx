'use client'
import { useState } from 'react';
import style from './bingo.module.css'


export default function Bingo() {

    const numerosDeZeroAteOitenta: number = Math.floor(Math.random() * 80)
    const [numbers, setNumbers] = useState<any[]>([])
    const ultimoNumero = numbers[numbers.length - 1]
    const [showElement, setShowElement] = useState(false)


    async function LuckyNumber() {
        let numberAL: any = Number(numerosDeZeroAteOitenta)
        //const numeroComum = numberAL.some((item:number) => numbers.includes(item))
    
        setNumbers([...numbers, numberAL])
        setShowElement(true)
    }

    async function RestartGame() {
        setNumbers([]);
        setShowElement(false)
    }

    return (
        <main className={style.container_bingo}>
            <h1 className={style.title}><a href="/">BIngo!</a></h1>
            <div className={style.result}>
                <h2>{ultimoNumero}</h2>
            </div>
            <div className={style.button}>
                <button onClick={LuckyNumber}>Sortear Número</button>
            </div>


            <div className={style.section_numbers}>
                <h2>Números Chamados:</h2>
                <ul>
                    {numbers.map((num: number, index: number) => {
                        return (
                            <li key={index} >
                                <h3>{num}</h3>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {showElement ?
                <div className={style.restart}>
                    <button onClick={RestartGame}>Reiniciar</button>
                </div>
                : null}

        </main>
    )
}