import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../Containers/Layout';
import MainGame from '../Components/MainStart';
import Game from '../Components/Game';
import NotFound from '../Components/NotFound';
import '../Styles/App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={MainGame} />
            <Route exact path="/game/:id" component={Game} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
