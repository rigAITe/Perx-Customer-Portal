import React, { useState } from 'react'
import "./travel.css";


const AddFlight = (props) => {

  const [ destinationAndReturn , setDestinationAndReturn ] = useState({
    fromWhere: '',
    toWhere: '',
    leavingOn: '',
  })

  const handleChange = (e) => {
    setDestinationAndReturn({
      ...destinationAndReturn,
      [e.target.name]: e.target.value
    })
  }

  console.log( 'Added FLight Details', destinationAndReturn )

  return (
    <>
      <div className="addBorder">
          <div class="">
            <div className="row">
              <div class="col-md-6 col-6">
                <p className="text-dark medium-text">
                  From where
                </p>
                <input
                  type="text"
                  // id="quantity"
                  name="fromWhere"
                  onChange={handleChange}
                  class="form-control input-number"
                  placeholder="Murtala Muhammed Internationa"
                  min="1"
                  max="100"
                />
              </div>
              <div class="col-md-6 col-6">
                <p className="text-dark medium-text">To where</p>
                <input
                  type="text"
                  // id="quantity"
                  name="toWhere"
                  onChange={handleChange}
                  class="form-control input-number"
                  placeholder="Dubai International Airport (DXB)"
                  min="1"
                  max="100"
                />
              </div>
            </div>
          </div>
          <div className="d-flex row">
            <div className="col-md-6 col-6">
              <p className="text-dark medium-text">Leaving on</p>{" "}
              <input
                type="date"
                // id="quant"
                name="leavingOn"
                onChange={handleChange}
                class="form-control input-number"
                // value="May 25, 2021"
                min="1"
                max="100"
              />
            </div>
            <div className="col-6 pt-5">
              
              <button className="medium-text  btn btn-outline-danger fligt-control-negative-btn"
                onClick={ () => props.delete(props.id)}
              >
                {" "}
                <i className="fas fa-times"></i>
              </button>
            </div>
            {/* <div className="col-md-4 p-0">
              <button className="medium-text btn btn-outline-primary fligt-control-btn" >
                {" "}
                <i className="fas fa-plus"></i> Add Flight
              </button>
            </div> */}
          </div>
        </div>
    </>
  )
}

export default AddFlight
