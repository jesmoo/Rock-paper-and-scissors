import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ComputerGame from './ComputerGame';
import useInitialState from '../Hooks/useInitialState';
import '../Styles/Components/game.css';
import '../Styles/breakpoints/queriesGame.css';

const Game = (props) => {
  const initialState = useInitialState();
  const idGame = parseInt(props.match.params.id);
  const idComputerBackground = parseInt(props.match.params.idComputer);
  const backGround = useRef();
  const textWinLose = useRef();

  const setWinLose = (item) => {
    if (item.win === idComputerBackground) {
      backGround.current.classList.add('win');
      textWinLose.current.innerHTML = 'You win';
    }
    if (item.lose === idComputerBackground) {
      backGround.current.classList.add('lose');
      textWinLose.current.innerHTML = 'You lose';
    }
    if (item.id === idComputerBackground) {
      backGround.current.classList.add('tie');
      textWinLose.current.innerHTML = 'You tie';
    }
  };
  setTimeout(() => {
    if (initialState && initialState[idGame - 1]) {
      setWinLose(initialState[idGame - 1]);
    }
  }, 300);

  return (
    <main className="container__main">
      <section className="main__scoreContainer">
        <div className="scoreContainer__game">
          <p>Rock</p>
          <p>Paper</p>
          <p>Scissors</p>
        </div>
        <div className="scoreContainer__score">
          <p>Score</p>
          <h3>0</h3>
        </div>
      </section>
      <section className="main__gameChose">
        <div className="backGround-noDisplay" ref={backGround}></div>
        {initialState &&
          initialState.map((item) =>
            item.id === idGame ? (
              <div
                className={`gameChose__item border-${item.classAlt} `}
                key={item.id}
              >
                <img
                  src={item.url}
                  alt={item.classAlt}
                  className={`gameChose__item-Icon`}
                />
              </div>
            ) : null
          )}
        {<ComputerGame idComputer={idComputerBackground} />}
      </section>
      <section className="main__textWinLose">
        <h2 ref={textWinLose}>You ...</h2>
        <Link to="/" className="textWinLose__comeBack" title="Play again">
          <p>Play again</p>
        </Link>
      </section>
    </main>
  );
};

export default Game;
