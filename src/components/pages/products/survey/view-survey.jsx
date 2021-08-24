import React, { useRef, useEffect, useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AnswerBar from "./answer-bar";
import SuccessModal from "../../../../../src/components/common/modals/SuccessModal.jsx";

import angry from "./images/angry.png";
import { SurveyContext } from "../../../../context/Survey";
import swal from "sweetalert";
import { Textarea } from "./text-area";
import axios from 'axios'
import { LoaderContext } from "../../../../context/Loading";

const ViewSurvey = (props) => {
  
  const { toggleLoading } = useContext(LoaderContext);

  const [questionNo, setQuestionNo] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [finishedSurvey, setFinishedSurvey] = useState(false);
  const { getSurveyQuestions, surveyQuestions } = useContext(SurveyContext);
  const [questions, setQuestions] = useState([]);
  const [slug, setSlug] = useState('')
  const [question, setQuestion] = useState('')
  const totalQuestions = useRef(0);
  const [textArea, setTextArea] = useState([])
  const [check, setCheckbox] = useState([])
  const [responses, setResponses] = useState([])
  const [questionType, setQuestionType] = useState()
  const [endDate, setEndDate] = useState()
  const [numberOfQuestions, setNumberOfQuestions] = useState()
  const [surveyDescription, setSurveyDescription] = useState()
  const [allQuestion, setAllQuestion] = useState([])
  const [allAnswer, setAllAnswer] = useState([])
  const [questAns, setQuestAns] = useState([])

  console.log('Get survey ', surveyQuestions)


  const setOption = (e) => {
    setCheckbox(e.target.value)
  }

  const setDefault = (x) => {
    setCheckbox(x)
  }

  const setDefeultText = (x) => {
    setTextArea(x)
  }

  const textarea = (e) => {
    setTextArea(e.target.value)
  }

  // console.log('question ', question)

  useEffect(() => {
    const survey_slug = getURLParameter("survey_slug");
    getSurveyQuestions(survey_slug);
    setSlug(survey_slug)
  }, []);

  useEffect(() => {
    if (surveyQuestions.data !== null) {
      if (
        surveyQuestions.data.status === 1 &&
        surveyQuestions.data.success === true
      ) {
        totalQuestions.current = surveyQuestions.data.data.questions.length;
        setQuestions(surveyQuestions.data.data.questions);
        setEndDate(surveyQuestions.data.data.end_date)
        setNumberOfQuestions(surveyQuestions.data.data.questions.length);
        setSurveyDescription(surveyQuestions.data.data.description)
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

  // console.log('SURVEY ', question)

  // console.log(surveyQuestions);

  const getURLParameter = (param) => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const getParameterValue = params.get(param);

    return getParameterValue;
  };

  const next = () => {
    save()
    if (questionNo !== totalQuestions.current) {
      setQuestionNo(questionNo + 1);
      return;
    }
    setFinishedSurvey(true);
  };

  const previous = () => {
    // getSurveyQuestions(slug)
    responses.pop()
    if (questionNo == 1) return;
    setQuestionNo(questionNo - 1);
    console.log('PREVIOUS ', check)
  };

  const submitAllResponses = {
    survey_slug: slug,
    survey_response: responses
  }

  const submitSurvey = () => {
    toggleLoading(true)
    axios.post(`survey/all/response`, submitAllResponses)
      .then(res => {
        console.log('RESPONSE ALL DATA', res)
        toggleLoading(false)
        setShowSuccess(!showSuccess);
        console.log(res)
      })
      .catch(err => console.log(err))
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

  const dataObj = {
    survey_slug: slug,
    question_slug: question,
    response: questionType == true ? new Array(check) : new Array(textArea)
  }
  console.log('RESPONSE ', responses)



  const save = () => {
    axios.post(`survey/single/response`, dataObj)
      .then(res => {
        responses.push(dataObj)
        console.log(res)
      })
      .catch(err => console.log(err))
  }


  const returnData = () => {

    return (
      questions &&
      questions.map((survey, index) => {

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
                      survey={survey}
                      setQuestion={setQuestion}
                      value={check}
                      setDefault={setDefault}
                      setQuestionType={setQuestionType}
                      questionType={questionType}
                    />
                  );
                })
                : ""}

              {survey.response_type_id === 3 ? (
                <Textarea
                  textarea={textarea}
                  survey={survey}
                  setQuestion={setQuestion}
                  setDefeultText={setDefeultText}
                  textArea={textArea}
                  setQuestionType={setQuestionType}
                  questionType={questionType}
                // setAllQuestion={setAllQuestion}
                // allQuestion={allQuestion}
                />
              ) : (
                ""
              )}
              <div className="mb-2"></div>
            </div>
          );
        }
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
                <h5>{surveyDescription}</h5>
                <label className="opacity no-margin" htmlFor="">
                  End date:
                </label>
                <p>{endDate}</p>
                <label className="opacity no-margin" htmlFor="">
                  No of Questions:
                </label>
                <p>{numberOfQuestions} questions</p>
                <h6 className="bold">
                  {/* Complete to earn 10,500{" "}
                  <span className="ruby-tag">Rubies</span> */}
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
