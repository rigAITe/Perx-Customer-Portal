import React, { useRef, useEffect, useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AnswerBar from "./answer-bar";
import SuccessModal from "../../../../../src/components/common/modals/SuccessModal.jsx";

import angry from "./images/angry.png";
import { SurveyContext } from "../../../../context/Survey";
import swal from "sweetalert";
import axios from 'axios'

const ViewSurvey = (props) => {
  const [questionNo, setQuestionNo] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [finishedSurvey, setFinishedSurvey] = useState(false);
  const { getSurveyQuestions, surveyQuestions } = useContext(SurveyContext);
  const [questions, setQuestions] = useState([]);
  const [slug, setSlug] = useState('')
  const [question, setQuestion] = useState('')
  const totalQuestions = useRef(0);

  const [check, setCheckbox] = useState('')

  const setOption = (ex) => {
    setCheckbox(ex)
  }

  console.log(check)
  console.log('SLUG ', slug)
  console.log('question ', question)


  useEffect(() => {
    const survey_slug = getURLParameter("survey_slug");
    getSurveyQuestions(survey_slug);
    setSlug(survey_slug)
    saveQuestion()
  }, []);

  useEffect(() => {
    if (surveyQuestions.data !== null) {
      if (
        surveyQuestions.data.status === 1 &&
        surveyQuestions.data.success === true
      ) {
        totalQuestions.current = surveyQuestions.data.data.questions.length;
        setQuestions(surveyQuestions.data.data.questions);
      }

      if (
        surveyQuestions.data.status === 0 &&
        surveyQuestions.data.success === false
      ) {
        swal({
          title: "Oops!",
          text: surveyQuestions.data.message,
          icon: "error",
          button: "Ok",
        });
      }
    }
  }, [surveyQuestions.data]);

  console.log('SURVEY ', question)


  // console.log(surveyQuestions);

  const getURLParameter = (param) => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const getParameterValue = params.get(param);

    return getParameterValue;
  };

  const next = () => {
    if (questionNo !== totalQuestions.current) {
      setQuestionNo(questionNo + 1);
      // saveQuestion()
      // axios.post('survey/single/response', {
      //   survey_slug: slug,
      //   question_slug: ,
      //   response[0]: 
      // })
      return;
    }
    setFinishedSurvey(true);
  };

  const previous = () => {
    if (questionNo == 1) return;
    setQuestionNo(questionNo - 1);
    // saveQuestion()
  };

  const submitSurvey = () => {
    setShowSuccess(!showSuccess);
  };

  useEffect(() => {
    console.log("ran first")
    if (props.location) {
      console.log(props.location.state);
      getSurveyQuestions();
    } else {
      getSurveyQuestions();
    }
  }, [])

  const saveQuestion = () => {
    questions &&
      questions.map((survey, index) => console.log(survey.question_slug))
  }

  const returnData = () => {

    return (
      questions &&
      questions.map((survey, index) => {
        // setQuestion(survey.question_slug)
        // saveQuestion(survey.question_slug)

        if (questionNo === index + 1 && !finishedSurvey) {

          return (
            <div>
              <div className="d-flex flex-row align-items-center justify-content-between">
                <h5>
                  {index + 1}. {survey.question}
                </h5>
                <p className="bold">
                  Question {index + 1} of {totalQuestions.current}
                </p>
              </div>

              {survey.response_type_id === 1
                ? survey.options.map((option) => {
                  return (
                    <AnswerBar
                      text={option.option}
                      logo={angry}
                      height="40px"
                      slug={option.slug}
                      setOption={setOption}
                    />
                  );
                })
                : ""}

              {survey.response_type_id === 3 ? (
                <textarea
                  placeholder="Type here"
                  style={{ width: "100%" }}
                  name=""
                  id=""
                  rows="8"
                ></textarea>
              ) : (
                ""
              )}
              <div className="mb-2"></div>
            </div>
          );
        }
        // setQuestion(survey.question_slug)
      })
    )
  }



  return (
    <div>
      <Helmet>
        <title>Customer Portal - View Survey</title>
      </Helmet>

      <h1 className="d-none">Customer Portal - View Survey</h1>
      <div className="main container">
        <Link
          className="underline"
          to={`${process.env.PUBLIC_URL}/pages/survey`}
          href="#"
        >
          Back to surveys
        </Link>

        <div>
          <div className="mb-1"></div>
          <h4>Customer experience survey</h4>
        </div>
        <div className="row surveys-container">
          <div className="col-12 col-lg-8">
            <div className="card cap-table">
              <div className="card-body">
                <div>
                  {returnData()}
                  {/* {questions &&
                    questions.map((survey, index) => {
                      // setQuestion(survey.question_slug)
                      // saveQuestion(survey.question_slug)

                      if (questionNo === index + 1 && !finishedSurvey) {

                        return (
                          <div>
                            <div className="d-flex flex-row align-items-center justify-content-between">
                              <h5>
                                {index + 1}. {survey.question}
                              </h5>
                              <p className="bold">
                                Question {index + 1} of {totalQuestions.current}
                              </p>
                            </div>

                            {survey.response_type_id === 1
                              ? survey.options.map((option) => {
                                return (
                                  <AnswerBar
                                    text={option.option}
                                    logo={angry}
                                    height="40px"
                                    slug={option.slug}
                                    setOption={setOption}
                                  />
                                );
                              })
                              : ""}

                            {survey.response_type_id === 3 ? (
                              <textarea
                                placeholder="Type here"
                                style={{ width: "100%" }}
                                name=""
                                id=""
                                rows="8"
                              ></textarea>
                            ) : (
                              ""
                            )}
                            <div className="mb-2"></div>
                          </div>
                        );
                      }
                    })} */}

                  {finishedSurvey ? (
                    <div className="text-center">
                      <h4 className="text-dark">
                        You have successfully answered all the questions in this
                        survey
                      </h4>
                      <button
                        onClick={() => submitSurvey()}
                        className="btn btn-primary"
                      >
                        Submit Survey
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                {questionNo !== totalQuestions.current + 1 &&
                  !finishedSurvey ? (
                  <div
                    id="next-previous-buttons"
                    className="d-flex flex-row align-items-center justify-content-end"
                  >
                    <div
                      style={{ width: "20rem" }}
                      className="d-flex flex-row justify-content-between"
                    >
                      <div className="">
                        <button
                          onClick={() => previous()}
                          className="btn btn-secondary"
                        >
                          Previous
                        </button>
                      </div>
                      <div className="">
                        <button
                          onClick={() => next()}
                          className="btn btn-primary"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card cap-table">
              <div className="card-body">
                <h5>Survey Info</h5>
                <img
                  style={{ height: "20%", width: "20%" }}
                  src={require("./images/image1.png")}
                  alt=""
                />
                <h5>Customer Survey experience</h5>
                <label className="opacity no-margin" htmlFor="">
                  End date:
                </label>
                <p>Apr 1, 2021 (in 22 days)</p>
                <label className="opacity no-margin" htmlFor="">
                  No of Questions:
                </label>
                <p>20 questions</p>
                <h6 className="bold">
                  Complete to earn 10,500{" "}
                  <span className="ruby-tag">Rubies</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSuccess ? (
        <SuccessModal
          messageTitle="Survey Submitted Successfully"
          messageBody="Your survey was submitted successfully"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ViewSurvey;
