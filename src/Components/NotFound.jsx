import React from 'react';
import '../Styles/Components/NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="container__main-NotFoun">
      <section className="section__notfoun">
        <figure>
          <div className="sad-mac"></div>
          <figcaption>
            <span className="sr-text">Error 404: Not Found</span>
            <span className="e"></span>
            <span className="r"></span>
            <span className="r"></span>
            <span className="o"></span>
            <span className="r"></span>
            <span className="_4"></span>
            <span className="_0"></span>
            <span className="_4"></span>
            <span className="n"></span>
            <span className="o"></span>
            <span className="t"></span>
            <span className="f"></span>
            <span className="o"></span>
            <span className="u"></span>
            <span className="n"></span>
            <span className="d"></span>
          </figcaption>
        </figure>
      </section>
      <section className="section__main-NotFoun">
        <Link to="/" className="main-NotFoun__comeBack" title="Come back">
          <p>Come back</p>
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
