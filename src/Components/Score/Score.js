import React from "react";
import scoreData from "./ScoreData"
import "./Score.css";

export default function Score(props) {

    const getRank = (score) => {
        if (score >= 9)
            return "critical";
        else if (score >= 7)
            return "high";
        else if (score >= 5)
            return "moderate"
        else
            return "low";
    };

    return (
        <div className="score--container">
            <div className={`score--text--${getRank(props.score)}`}>
                <div className="score--number">{props.score}</div>
                <div className="score--header">{scoreData[getRank(props.score)].header}</div>
            </div>
            <div className="score--description">{scoreData[getRank(props.score)].description}</div>
        </div>
    );
}
