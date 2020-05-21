import React, { Component } from "react";
import api from "../../../services/api"

import "./styles.css";

export default class Product extends Component {
    state = {
        speaker: {}
    };

    componentDidMount() {
        this.loadSpeaker();
    }

    loadSpeaker = async () => {
        const { id } = this.props.match.params;
        const response = await api.get(`/speakers/${id}`);
        this.setState({ speaker: response.data });
    }

    render() {
        const { speaker } = this.state;

        if (speaker.speaker_id === undefined) {
            return (
                <div className="loading_div">
                    <h1 className="loading_header">Loading...</h1>
                </div>
            );
        } else {
            return (
                <div className="speaker-info">
                    <h1>{speaker.last_name}</h1>
                    <h2>{speaker.first_name}</h2>
                    <p>{speaker.title} at {speaker.company}</p>
                    <br />
                    <p>{speaker.speaker_bio}</p>
                </div>
            );
        }
    }
}
