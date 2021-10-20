import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ComputerGame from './ComputerGame';
import useInitialState from '../Hooks/useInitialState';
import scoreClass from '../utils/ScoreGame';
import '../Styles/Components/game.css';
import '../Styles/breakpoints/queriesGame.css';

const Game = (props) => {
  const gameScore = scoreClass;
  const initialState = useInitialState();
  useEffect(() => {
    gameScore.numRandom();
  }, []);

  const idGame = parseInt(props.match.params.id);
  const backGround = useRef();
  const textWinLose = useRef();

  const setWinLose = (item) => {
    if (item.win === gameScore.idComp) {
      backGround.current.classList.add('win');
      textWinLose.current.innerHTML = 'You win';
      gameScore.sumScore();
    }
    if (item.lose === gameScore.idComp) {
      gameScore.loseScore();
      backGround.current.classList.add('lose');
      textWinLose.current.innerHTML = 'You lose';
    }
    if (item.id === gameScore.idComp) {
      backGround.current.classList.add('tie');
      textWinLose.current.innerHTML = 'You tie';
    }
  };

  if (initialState && initialState[idGame - 1]) {
    let count = 0;
    if (count === 0) {
      setWinLose(initialState[idGame - 1]);
    }
    count++;
  }
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
          <h3>{gameScore.ScoreNum}</h3>
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
        {<ComputerGame idComputer={gameScore.idComp} />}
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
