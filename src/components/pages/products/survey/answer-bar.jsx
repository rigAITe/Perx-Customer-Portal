import React, { useState, useContext } from "react";
import "./answer-bar.css";

const AnswerBar = (props) => {
  const { logo } = props;

  // const [check, setCheckbox] = useState('')

  // console.log(check)

  // const setOption = (e) => {
  //   setCheckbox(e.target.value)
  //   // console.log(e.target.value)
  // }


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
            <label className="my-auto card " style={{width: "100%",   display: 'block', padding: 15}}>
              <input style={{marginRight: 10}} type="radio" name = "choice" value={props.slug} onChange={() => props.setOption(props.slug)} />
              {props.text}
            </label>
          </div>{" "}
        </div>
      )}
    </>
  );
};

export default AnswerBar;
