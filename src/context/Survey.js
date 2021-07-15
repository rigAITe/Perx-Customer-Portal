import React, { useState, useContext } from "react";
import axios from "axios";
import LoaderContext from "./Loading";

export const SurveyContext = React.createContext();

export function SurveyContextController({ children }) {
  const { toggleLoading } = useContext(LoaderContext);
  let intialState = { data: null };
  const [loading, setLoading] = useState(false);
  const [surveyList, setSurveyList] = useState(intialState);
  const [surveyQuestions, setSurveyQuestions] = useState(intialState);
  const [inputs, setInputs] = useState({});

  const getSurveyList = () => {
    toggleLoading(true);
    axios
      .get(`survey/sigma-prime/list_surveys`)
      .then((res) => {
        toggleLoading(false);
        setSurveyList({
          data: res.data,
        });
      })
      .catch((err) => {
        toggleLoading(false);
        console.log(err);
        setSurveyList({
          data: err.response.data,
        });
      });
  };

  const getSurveyQuestions = (survey_slug) => {
    toggleLoading(true);
    axios
      .get(`survey/sigma-prime/${survey_slug}/questions`)
      .then((res) => {
        toggleLoading(false);
        setSurveyQuestions({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setSurveyQuestions({
          data: err.response.data,
        });
      });
  };

  return (
    <SurveyContext.Provider
      value={{
        getSurveyList,
        getSurveyQuestions,
        surveyQuestions,
        surveyList,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}
