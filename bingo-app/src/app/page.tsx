'use client'
import GameRules from './components/GameRules'
import Image from 'next/image'
import bingoLogo from '../../public/assets/bingo-logo.png'
import { useState } from 'react'
import { useRef } from 'react'

import Bingo from './components/Bingo'

export default function Home() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [maxNumber, setMaxNumber] = useState(0)
  
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleStart() {
    const max = parseInt(inputRef.current?.value || "");
    if (max > 0) {
      setMaxNumber(max);
      setIsGameStarted(true);
    } else {
      alert("Por favor, digite um número válido.");
    }

    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }

  return (
    <main className='min-h-screen flex flex-col justify-center items-center w-full h-full relative'> 
     <Image src={bingoLogo} alt="logo bingo" className='max-w-64 lg:max-w-96 h-full' quality={60} priority/>
      <h3 className='font-chakra text-white text-center text-base px-4 lg:text-lg'>Preencha sua cartela com os números sorteados</h3>
      {!isGameStarted ? (
        <div className="bg-transparent rounded-lg space-y-4 flex flex-col items-center mx-auto w-full max-w-72 lg:max-w-sm">
          <div className='flex flex-col items-center w-full'>
            <div className='bg-blue-600 w-full p-4 rounded-lg my-4 flex flex-col items-center'>
              <label htmlFor="lengthBingo" className='mb-6 font-normal font-chakra text-center text-base lg:text-lg text-white'>Digite o número máximo da sua cartela</label>
              <input min="10" max="100" id="lengthBingo" name='maxLength' type="number" ref={inputRef} className='p-2 rounded-lg w-full font-bold text-lg text-center' />
            </div>
            <GameRules/>
          </div>
          <button className='mx-auto p-2 font-bold w-36 lg:w-40 mt-12 rounded-lg text-normal lg:text-lg text-black text-center bg-yellow-400 hover:opacity-90 shadow-lg' onClick={handleStart}>Iniciar</button>
        </div>
      ) : (
        <Bingo maxLength={maxNumber} changeStarter={() => setIsGameStarted((prev) => !prev)} />
      )  
    }  
    <span className='absolute left-50 right-50 bottom-6 text-base text-white font-chakra'>Feito por <a className='text-white hover:text-yellow-300' href="https://github.com/pedrosrc" target='_blank'>Pedro Leonardo</a></span>
    </main>
  )
}
