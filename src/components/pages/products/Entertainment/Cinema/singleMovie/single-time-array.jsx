import React from 'react'

const SingleTimeArray = (props) => {

  // console.log('Movie Time ', props.data.time)

  return (
      <button
        id='pickup'
        type='button'
        className={`mr-2 btn btn-outline-secondary active-btn`}
        onClick={() => props.pricing(props.data.ticketTypes, props.data.time)}
      >
        {props.data.time}
      </button>
  )
}

export default SingleTimeArray
