import React, { useEffect, useState } from 'react'
import SingleTimeArray from './single-time-array'

const SingleDetailTime = (props) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState([])

  useEffect(() => {
    setDate(props.data.date)
    setTime(props.data.times)
  }, [])

  // console.log('Movie Data ', props.data)

  return (
    <div>
      <div className='my-3'>
        <div className='mb-2'>
          <p className='text-dark small-text'>{date}:</p>
          {time.map((res) => (
            <SingleTimeArray data={res} pricing={props.pricing}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SingleDetailTime
