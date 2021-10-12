import React, { useEffect, useRef } from 'react';
import ComputerGame from './ComputerGame';
import useInitialState from '../Hooks/useInitialState';
import '../Styles/Components/game.css';
import '../Styles/breakpoints/queriesGame.css';

const Game = (props) => {
  const backGround = useRef();
  const initialState = useInitialState();
  const idGame = parseInt(props.match.params.id);

  const idComp = () => {
    let computer = Math.floor(Math.random() * 3 + 1);
    if (computer === idGame) {
      computer = Math.floor(Math.random() * 3 + 1);
    }
    return computer;
  };
  const setWinLose = () => {
    console.log(backGround.current.classList.add('green'));
  };
  useEffect(() => {
    setTimeout(() => {
      setWinLose();
    }, 300);
  }, []);
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
        {<ComputerGame idComputer={idComp()} />}
      </section>
    </main>
  );
};

export default Game;
