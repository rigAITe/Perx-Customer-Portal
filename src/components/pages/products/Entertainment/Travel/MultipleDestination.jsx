import React, { useState } from 'react'
import AddFlight from './AddFlight';
import "./travel.css";
import { nanoid } from 'nanoid'
import { Link }  from "react-router-dom";




export const MultipleDestinations = () => {

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

  const [ flights, setFlights ] = useState([])

  let idTrack = nanoid()

  const add = () => {
    const flightObject = {
      fromWhere: '',
      toWhere: '',
      leavingOn: '',
      id: idTrack, 
    }

    setFlights(flights.concat(flightObject))
  }

  const handleDeleteFlight = (id) => {
    let newFlights = flights.filter( flight => flight.id !== id )
    setFlights( newFlights )
  }



  console.log('Normal Flight Details', destinationAndReturn)

    return(
        <>
        <div>
          <h5 style={{paddingTop: '2rem'}}>Set Flight</h5>
        </div>
        <div >
          <div className="row">
            <div class="col-6 col-lg-3">
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
            <div className="col-6 col-lg-3">
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
            <div className="col-6 col-lg-3">
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
          </div>
          {/* <div className="row">
            
            
          </div> */}
          <>
            { flights.map( (flight) => 
              <AddFlight
                delete={handleDeleteFlight}
                id={flight.id}
                key={flight.id}
              />
            )}
          </>
          <div className="multiButton">

            <button className=" addButton medium-text btn btn-outline-primary fligt-control-btn" 
              onClick={add}
            >
              {" "}
              <i className="fas fa-plus"></i> Add Flight
            </button>

            <Link to={buttonLink} style={{color: 'white'}} >

            <div className="large-text btn btn-primary fligt-control-btn" 
            >
                {" "}
                <i className="fas fa-search"></i> Search Flight
            </div>
            </Link>


          </div>
        </div>
      </>
    )
}