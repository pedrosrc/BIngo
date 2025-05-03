const saveGame = (game: any) => {
  const gameData = JSON.stringify(game);
  localStorage.setItem("bingo", gameData);
}

const loadGame = () => {
  const gameData = localStorage.getItem("bingo");
  if (gameData) {
    return JSON.parse(gameData);
  }
  return null;
}

const clearGame = () => {
  localStorage.removeItem("bingo");
}

const getRandomNumber = (max: number) => {
  let numbers = loadGame() || [];
  if (numbers.length >= max + 1) {
    return null;
  }
  let number = Math.floor(Math.random() * (max - 0 + 1)) + 0;
  while (numbers.includes(number)) {
    number = Math.floor(Math.random() * (max - 0 + 1)) + 0;
  }
  numbers.push(number);
  saveGame(numbers);
  return number;
}

export { getRandomNumber, saveGame, loadGame, clearGame };