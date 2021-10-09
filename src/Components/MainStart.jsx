import React from 'react';
import '../Styles/Components/MainStart.css';

const MainStart = () => {
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
        <div className="gameChose__item rock"></div>
        <div className="gameChose__item paper"></div>
        <div className="gameChose__item scissor"></div>
      </section>
      <a href="/" className="main__rules">
        <bottom>Rules</bottom>
      </a>
    </main>
  );
};

export default MainStart;
