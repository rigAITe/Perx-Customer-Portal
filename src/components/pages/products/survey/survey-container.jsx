import React from "react";
import Link from "react-router-dom/Link";
import BidWinner from "../../../common/partials/bid-winner";
import moment from "moment";
import survey from "./survey";

const SurveyContainer = (props) => {
  const { surveyDetails } = props;

  console.log(props);
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-3 col-lg-3">
          <img style={{ width: "24rem" }} src={props.uri} alt="" />
        </div>
        <div className="col-12 col-md-9 col-lg-9 sweepstake d-flex flex-column justify-content-center">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div>
              <p className="opacity">{surveyDetails.survey_type}</p>
              <p className="bold black-text">{surveyDetails.survey_title}</p>
            </div>
            <div
              style={{ width: "35rem" }}
              className="d-flex flex-row justify-content-between align-items-center"
            >
              <div>
                <p className="text-right opacity">End date: </p>
                <p className="bold black-text text-right">
                  {`${moment("2021-12-29").format("dddd, MMMM Do YYYY")} `}(
                  {moment().to(moment("2021-12-29"))})
                </p>
              </div>
              <div>
                <p className="text-right opacity">Number of Questions: </p>
                <p className="bold black-text text-right">
                  {surveyDetails.no_questions} questions
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="opacity" style={{ marginTop: "0.5rem" }}>
              {surveyDetails.description}
            </p>
            <div className="mb-1"></div>
            <p className="bold black-text">
              Complete to earn 10,500 <span className="ruby-tag">Rubies</span>
            </p>
            <div className="mb-1"></div>
            {props.survey ? (
              <div className="d-flex flex-row justify-content-between">
                <Link
                  className="btn btn-primary"
                  to={`${process.env.PUBLIC_URL}/pages/view_survey`}
                  href="#"
                >
                  Continue Survey
                </Link>
                <BidWinner
                  text="Number of questions answered: 50"
                  width={"28rem"}
                  height={22}
                />
              </div>
            ) : (
              <Link
                className="btn btn-primary"
                to={`${process.env.PUBLIC_URL}/pages/view_survey?survey_slug=${surveyDetails.survey_slug}`}
                href="#"
              >
                Start Survey
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="mb-3"></div>
    </>
  );
};

export default SurveyContainer;
