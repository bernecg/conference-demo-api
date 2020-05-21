import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Speakers from "./pages/speakers";
import SpeakerDetail from "./pages/speakers/speakerDetails";
import Sessions from "./pages/sessions";
import SessionDetail from "./pages/sessions/sessionDetails";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/speakers/" component={Speakers} />
            <Route path="/speakers/:id" component={SpeakerDetail} />
            <Route exact path="/sessions/" component={Sessions} />
            <Route path="/sessions/:id" component={SessionDetail} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
