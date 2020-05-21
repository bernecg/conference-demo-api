import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Main extends Component {
    state = {
        sessions: []
    }

    componentDidMount() {
        this.loadSessions();
    }

    loadSessions = async () => {
        const response = await api.get("/sessions");
        const sessions = response.data;
        this.setState({ sessions });
    };

    render() {
        const { sessions } = this.state;

        if (sessions.length === 0) {
            return (
                <div className="loading_div">
                    <h1 className="loading_header">Loading...</h1>
                </div>
            );
        } else {
            return (
                <div className="sessions-list">
                    {sessions.map(session => (
                        <article key={session.session_id}>
                            <strong>{session.session_name}</strong>
                            <p>{session.session_description}</p>
                            <Link to={`/sessions/${session.session_id}`}>Access</Link>
                            {/* <a target="_blanket" href="">Access</a> */}
                        </article>
                    ))}
                </div>
            )
        }
    }
}
