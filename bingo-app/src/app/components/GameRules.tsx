import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const GameRules = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-sm bg-black bg-opacity-80 rounded-lg p-4 text-white shadow-lg">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-normal lg:text-lg font-normal font-chakra">Regras do Jogo</h2>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      
      {isExpanded && (
        <ul className="mt-3 space-y-2 list-disc pl-5 transition-all duration-300 text-sm">
          <li>Defina o número máximo para sua cartela (ex: 75)</li>
          <li>Cada jogador deve ter uma cartela com números aleatórios</li>
          <li>Quando um número for sorteado, marque-o na sua cartela</li>
          <li>Ganha quem completar primeiro uma linha, coluna ou diagonal</li>
          <li>Grite "BINGO!" quando completar o padrão necessário</li>
          <li>Se Divirtam!</li>
        </ul>
      )}
    </div>
  );
};

export default GameRules;