import React from 'react';
import { Link } from 'react-router-dom';
import useInitialState from '../Hooks/useInitialState';
import scoreClass from '../utils/ScoreGame';
import Swal from 'sweetalert2';
import rulesImg from '../assets/img/mobile-rules-modal.jpg';
import '../Styles/Components/MainStart.css';
import '../Styles/breakpoints/queriesMainStart.css';

const MainStart = () => {
  const initialState = useInitialState();
  const gameScore = scoreClass;

  const handleClick = () => {
    Swal.fire({
      imageUrl: rulesImg,
      imageHeight: 500,
      imageAlt: 'Rules',
    });
  };

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
        {initialState &&
          initialState.map((item) => (
            <Link
              className={`gameChose__item border-${item.classAlt} ${item.classAlt}`}
              to={`/game/${item.id}`}
              key={item.id}
            >
              <img
                src={item.url}
                alt={item.classAlt}
                className={`gameChose__item-Icon`}
              />
            </Link>
          ))}
      </section>
      <div id="idBtn" className="main__rules" onClick={handleClick}>
        <p>Rules</p>
      </div>
    </main>
  );
};

export default MainStart;
