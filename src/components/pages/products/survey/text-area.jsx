import React, { useEffect } from 'react'

export const Textarea = (props) => {

  useEffect(() => {
    if (props.survey.response.length == 0) {
      return ;
    } else {
      console.log('RESPONSE FOR FALSE ', props.questionType)
      props.setQuestionType(false)
    }
    if (!props.questionType) {
      return ;
    } else {
      let response = props.survey.response[0].response_option
      props.setDefeultText(response)
    }
  }, [props.questionType])

  // console.log('TEXT AREA ', props.survey)
  props.setQuestion(props.survey.question_slug)


  return (
    <>
      <textarea
        onChange={props.textarea}
        placeholder="Type here"
        style={{ width: "100%" }}
        value={props.textArea}
        name=""
        id=""
        rows="8"
      ></textarea>
    </>
  )
}

