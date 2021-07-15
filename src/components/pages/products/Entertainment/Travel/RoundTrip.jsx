import React, { useState } from 'react'
import { Link }  from "react-router-dom";

export const RoundTrip = () => {

  const buttonLink = "/pages/travel/all-flights";


  const [ destinationAndReturn , setDestinationAndReturn ] = useState({
    fromWhere: '',
    toWhere: '',
    leavingOn: '',
    returningOn: ''
  })

  const handleChange = (e) => {
    setDestinationAndReturn({
      ...destinationAndReturn,
      [e.target.name]: e.target.value
    })
  }

  console.log(destinationAndReturn)

    return(
        <>
          {/* <div> */}
              <div >
                <h5 style={{paddingTop: '2rem'}}>Set Flight</h5>
                {/* {tripType === "oneway" ? ( */}
                <div className="row">
                  <div class="col-6 col-lg-3">
                    <p className="text-dark medium-text">From where</p>
                    <input
                      type="text"
                      // id="quantity"
                      name="fromWhere"
                      class="form-control input-number"
                      onChange={handleChange}
                      placeholder="Murtala Muhammed Internationa"
                      min="1"
                      max="100"
                    />
                  </div>
                  <div class="col-6 col-lg-3">
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
                  <div class="col-6 col-lg-3">
                    <p className="text-dark medium-text">Leaving On</p>
                    <input
                      type="date"
                      id="date"
                      name="leavingOn"
                      onChange={handleChange}
                      class="form-control input-number"
                      min="1"
                      max="100"
                    />
                  </div>
                  <div class="col-6 col-lg-3">
                    <p className="text-dark medium-text">Returning On</p>
                    <input
                      type="date"
                      // id="quantity"
                      name="returningOn"
                      onChange={handleChange}
                      class="form-control input-number"
                      // value="Murtala Muhammed Internationa"
                      min="1"
                      max="100"
                    />
                  </div>
                  <Link to={buttonLink} className="addFlight">
              
                  <div className=" float-right  large-text btn btn-primary fligt-control-btn" 
                  >
                    {" "}
                    <i className="fas fa-search"></i> Search Flight
                  </div>
              </Link>
                    

                </div>
              </div>
          {/* </div> */}
        </>
    )
}