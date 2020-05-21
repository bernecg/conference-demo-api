import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Main extends Component {
    state = {
        speakers: []
    }

    componentDidMount() {
        this.loadSpeakers();
    }

    loadSpeakers = async () => {
        const response = await api.get("/speakers");
        const speakers = response.data;
        this.setState({ speakers });
    };

    render() {
        const { speakers } = this.state;

        if (speakers.length === 0) {
            return (
                <div className="loading_div">
                    <h1 className="loading_header">Loading...</h1>
                </div>
            );
        } else {
            return (
                <div className="speakers-list">
                    {speakers.map(speaker => (
                        <article key={speaker.speaker_id}>
                            <strong>{speaker.last_name}, {speaker.first_name}</strong>
                            <p>{speaker.title}</p>
                            <Link to={`/speakers/${speaker.speaker_id}`}>Access</Link>
                            {/* <a target="_blanket" href="">Access</a> */}
                        </article>
                    ))}
                </div>
            )
        }
    }
}
