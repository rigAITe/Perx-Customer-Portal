import React from "react";
import "./answer-bar.css";

const AnswerBar = (props) => {
  const { logo } = props;
  return (
    <>
      {props.active ? (
        <div
          style={{ height: props.height }}
          className="card d-flex flex-row align-items-center answer-card active-card"
        >
          <p className="no-margin d-flex">
            <img className="answer-bar-emoji" src={logo} alt="" />
            <div className="my-auto">{props.text}</div>
          </p>
        </div>
      ) : (
        <div
          style={{ height: props.height }}
          className="card d-flex flex-row align-items-center answer-card"
        >
          <p className="no-margin d-flex">
            <img className="answer-bar-emoji" src={logo} alt="" />
            <div className="my-auto">{props.text}</div>
          </p>{" "}
        </div>
      )}
    </>
  );
};

export default AnswerBar;
