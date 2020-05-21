import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

class Main extends Component {
    render() {
        return (
            <div id="main">
                <Link to={`/speakers/`}>
                    <button className="mainButton">Speakers</button>
                </Link>
                <Link to={`/sessions/`}>
                    <button className="mainButton">Sessions</button>
                </Link>
            </div>
        )
    }
}

export default Main;
