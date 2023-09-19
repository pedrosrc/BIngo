'use client'
import style from './app.module.css'

export default function Home() {

  return (
    <main className={style.container_app}>
      <h1 className={style.title}>BIngo!</h1>
      <h3 className={style.pre_title}>Preencha sua cartela com os números sorteados</h3>
      <div className={style.rules}>
        <h2>Regras do Jogo</h2>
        <ul>
          <li>
            O jogo consite em uma tabela contendo números de 0 a 80, onde serão sorteados aleatoriamente.
          </li>
          <li>
            Ao iniciar todos os jogadores
            devem marcar o símbolo no meio
            da tabela.
          </li>
          <li>
            O jogador que completar uma
            linha, coluna ou diagonal precisa
            alertar seu Bingo.
          </li>
        </ul>
        <p>Se Divirtam!</p>
      </div>
      <div className={style.button}>
        <a href="/bingo" target='_self'>Iniciar</a>
      </div>
    </main>
  )
}
