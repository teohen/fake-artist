import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import CreateGame from './pages/create-game.page';
import Game from './pages/game.page';
import CreatePlayer from './pages/create-player.page';
import GameMenu from './pages/game-menu.page';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/create-game" exact={true} component={CreateGame} />
        <Route path="/create-player" exact={true} component={CreatePlayer} />
        <Route path="/game/:code" exact={true} component={Game} />
        <Route path="/menu" exact={true} component={GameMenu} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
