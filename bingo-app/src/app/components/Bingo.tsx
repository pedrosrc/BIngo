'use client'
import { useEffect, useState } from 'react';
import { loadGame, getRandomNumber, clearGame } from '../utlis/gameLogic';
import GameRules from '@/app/components/GameRules';

type Props = {
  maxLength: number,
  changeStarter: () => void;
};

export default function Bingo({ maxLength, changeStarter }: Props) {

  const [numbers, setNumbers] = useState<any[]>([])
  const lastNumber = numbers[numbers.length - 1]
 
  useEffect(() => {
    const gameData = loadGame();
    if (gameData) {
      setNumbers(gameData);
    }
  }, []);

  const resetGame = () => {
    clearGame();
    setNumbers([]);
    changeStarter();
  }

  const handleRandomNumber = () => {
    const max = maxLength || 100;
    if (max) {
      const number = getRandomNumber(max);
      if (number !== null) {
        setNumbers([...numbers, number])
      } else {
        alert("Todos os números já foram sorteados!");
      }
    } else {
      alert("Por favor, defina o número máximo da cartela.");
    }
  }

  return (
    <div className='flex flex-col justify-center items-center  w-full max-w-72 lg:max-w-sm mt-4'>
      <div className="bg-blue-600/80 rounded-lg p-4 flex flex-col items-center w-full">
        <p className="text-white mb-2 text-lg">Número atual:</p>
        <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center">
          <span className="text-4xl font-bold" id='lastNumber'>{lastNumber}</span>
        </div>
      </div>

      <div className="bg-blue-600/80 rounded-lg p-4 w-full my-4">
        <p className="text-white mb-2 text-center text-lg">Números sorteados:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {numbers.map((num) => (
            <div key={num} className="number bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <span className="font-bold">{num}</span>
            </div>
          ))}
          {numbers.length === 0 && (
            <p className="text-white text-sm italic">Nenhum número sorteado ainda</p>
          )}
        </div>
      </div>
      <GameRules />
      <div className='space-x-4 w-full mt-4 flex flex-row  justify-center items-center'>
        <button onClick={() => handleRandomNumber()} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-3 lg:px-6 py-2 lg:py-3 text-normal lg:text-lg rounded-lg">Sortear Número</button>
        <button onClick={() => resetGame()} className="bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg px-3 lg:px-6 py-2 lg:py-3 text-normal lg:text-lg">Reiniciar Jogo</button>
      </div>
    </div>
  )
}