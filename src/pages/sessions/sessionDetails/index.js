import React, { Component } from "react";
import api from "../../../services/api"
import { Link } from "react-router-dom";

import "./styles.css";

export default class Product extends Component {
    state = {
        session: { speakers: [] }
    };

    componentDidMount() {
        this.loadSession();
    }

    loadSession = async () => {
        const { id } = this.props.match.params;
        const response = await api.get(`/sessions/${id}`);
        this.setState({ session: response.data });
    }

    render() {
        const { session } = this.state;

        if (session.session_id === undefined) {
            return (
                <div className="loading_div">
                    <h1 className="loading_header">Loading...</h1>
                </div>
            );
        } else {
            return (
                <div className="session-info">
                    <h1>{session.session_name}</h1>
                    <p>{session.session_length} minutes</p>
                    <br />
                    <h2>Speakers:</h2>
                    <ul>
                        {session.speakers.map(speaker => (
                            <li key={speaker.speaker_id}>
                                <Link to={`/speakers/${speaker.speaker_id}`}>
                                    {speaker.last_name}, {speaker.first_name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}
