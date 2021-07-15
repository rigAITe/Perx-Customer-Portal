import React, { useState } from 'react'
import { Link }  from "react-router-dom";


export const OneWayTrip = () => {
const buttonLink = "/pages/travel/all-flights";


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

  console.log(destinationAndReturn)

    return(
        <>
        <div className="row">
            <div className="col-md-6 col-sm-12">
              <h5 style={{paddingTop: '2rem'}}>Set Flight</h5>
              {/* {tripType === "oneway" ? ( */}
                <div className="row">
                  <div class="col-6">
                    <p className="text-dark medium-text">From where</p>
                    <input
                      type="text"
                      // id="quantity"
                      name="fromWhere"
                      class="form-control input-number"
                      placeholder="Murtala Muhammed Internationa"
                      onChange={handleChange}
                      min="1"
                      max="100"
                    />
                  </div>
                  <div class="col-6">
                    <p className="text-dark medium-text">To where</p>
                    <input
                      type="text"
                      // id="quantity"
                      name="toWhere"
                      class="form-control input-number"
                      placeholder="Dubai International Airport (DXB)"
                      onChange={handleChange}
                      min="1"
                      max="100"
                    />
                  </div>
                </div>
              {/* ) : (
                ""
              )} */}
            </div>
            {/* {tripType === "oneway" ? (÷ */}
              <div className="d-flex align-items-end p-0 col-md-6 col-sm-12">
                <div className="col-12 " style={{marginRight: '10px'}}>
                  <p className="text-dark medium-text">Leaving on</p>{" "}
                  <input
                  
                    type="date"
                    // id="quantity"
                    name="leavinOn"
                    class="form-control input-number"
                    // leavingOn="Murtala Muhammed Internationa"
                    onChange={handleChange}
                    min="1"
                    max="100"
                  />
                </div>
              </div>
              <Link to={buttonLink} className="addFlight">
              
              <div className=" float-right  large-text btn btn-primary fligt-control-btn" 
              >
                  {" "}
                  <i className="fas fa-search"></i> Search Flight
              </div>
              </Link>

              
        </div>
      </>
    )
}