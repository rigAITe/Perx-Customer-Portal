import React, { useEffect, useState } from "react";
import "./answer-bar.css";

const AnswerBar = (props) => {
  const { logo } = props;

  useEffect(() => {
    if (props.survey.response.length == 0) {
      return;
    } else {
      console.log('RESPONSE FOR TRUE ', props.questionType)
      props.setQuestionType(true)
    }
    if (props.questionType) {
      let response = props.survey.response[0].response_option
      props.setDefault(response)
    } else {
      return;
    }
  }, [props.questionType])

  props.setQuestion(props.survey.question_slug)

  return (
    <>
      {props.active ? (
        <div
          style={{ height: props.height }}
          className=" align-items-center answer-card active-card"
        >
          <div className="no-margin d-flex">
            <img className="answer-bar-emoji" src={logo} alt="" />
            <div className="my-auto">{props.text}</div>
          </div>
        </div>
      ) : (
        <div
          style={{ height: props.height }}
          className=" align-items-center answer-card"
        >
          <div className="no-margin d-flex ">
            {/* <img className="answer-bar-emoji" src={logo} alt="" /> */}
            <label className="my-auto card " style={{ width: "100%", display: 'block', padding: 15 }}>
              <input style={{ marginRight: 10 }} type="radio" name="choice" value={props.slug} onChange={props.setOption} checked={props.value === props.slug} />
              {props.text}
            </label>
          </div>{" "}
        </div>
      )}
    </>
  );
};

export default AnswerBar;
