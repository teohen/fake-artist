import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateGame from "./pages/create-game.page";
import CreatePlayer from "./pages/create-player.page";
import GameMenu from "./pages/game-menu.page";
import Game from "./pages/game.page";



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={CreatePlayer} />
                <Route path="/create-game" exact={true} component={CreateGame} />
                <Route path="/create-player" exact={true} component={CreatePlayer} />
                <Route path="/game/:code" exact={true} component={Game} />
                <Route path="/menu/game" exact={true} component={GameMenu} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;