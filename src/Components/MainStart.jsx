import React from 'react';
import { Link } from 'react-router-dom';
import useInitialState from '../Hooks/useInitialState';
import '../Styles/Components/MainStart.css';
import '../Styles/breakpoints/queriesMainStart.css';

const MainStart = () => {
  const initialState = useInitialState();
  console.log(initialState);
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
        {/* <div className="gameChose__item rock"></div>
        <div className="gameChose__item paper"></div>
        <div className="gameChose__item scissor"></div> */}
      </section>
      <a href="/" className="main__rules">
        <bottom>Rules</bottom>
      </a>
    </main>
  );
};

export default MainStart;
