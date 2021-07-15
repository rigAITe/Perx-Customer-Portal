import React, { useState } from 'react' 
import "./travel.css"

export const AllFlightTripType = ( props ) => {

  const [ age, setAge ] = useState({
    above12: 0,
    below12: 0,
    below2: 0,
    economyOrOthers: ''
  })

  const handleChange = (e) => {
    setAge({
      ...age,
      [e.target.name]: e.target.value
    })
  }

  const increaseAbove12 = () => {
    setAge({
      ...age,
      above12: age.above12 + 1
    })
  }

  const increaseBelow12 = () => {
    setAge({
      ...age,
      below12: age.below12 + 1
    })
  }

  const increaseBelow2 = () => {
    setAge({
      ...age,
      below2: age.below2 + 1
    })
  }

  const decreaseAbove12 = () => {
    setAge({
      ...age,
      above12: age.above12 - 1
    })
  }

  const decreaseBelow12 = () => {
    setAge({
      ...age,
      below12: age.below12 - 1
    })
  }

  const decreaseBelow2 = () => {
    setAge({
      ...age,
      below2: age.below2 - 1
    })
  }

  console.log(age)
  

    return(
        <>
          <div className="row">
              <div className="col-6">
                <h5>Trip Type</h5>
                <button
                  id="active-flight-btn"
                  className="mx-1 medium-text btn btn-secondary flight-btn"
                  onClick ={ () => props.tripType('oneWay')}
                >
                  {" "}
                  <i className="fas fa-plane-departure"></i> One Way
                </button>
                <button className="mx-1 medium-text btn btn-secondary flight-btn"
                  onClick ={ () => props.tripType('roundTrip')}
                >
                  {" "}
                  <i className="fas fa-sync-alt"></i> Round Trip
                </button>
                <button className="mx-1 medium-text btn btn-secondary flight-btn"
                  onClick ={ () => props.tripType('multipleDestination')}
                >
                  {" "}
                  <i className="fas fa-globe"></i> Multiple Destinations
                </button>
              </div>
              <div className="col-6">
                <h5>Filter</h5>
                <div className="row p-1">
                  <div className="col-md-3 p-0">
                    <div class="d-flex">
                      <div class="">
                        <input
                          type="number"
                          // id="quantity"
                          name="above12"
                          class="filter-input form-control input-number"
                          value={age.above12}
                          min="1"
                          max="100"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="p-0">
                        <div class="input-group-btn">
  
                          <button
                            type="button"
                            class="filter-btn btn btn-outline-secondary "
                            data-type="minus"
                            data-field=""
                            onClick={decreaseAbove12}
                          >
                            <span class="fas fa-minus" ></span>
                          </button>
                        </div>
                        <div class="input-group-btn">
                          <button
                            type="button"
                            class="filter-btn btn btn-outline-secondary"
                            data-type="plus"
                            data-field=""
                            onClick={increaseAbove12}
                            
                          >
                            <span class="fas fa-plus"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <small>Above 12 years</small>
                  </div>
                  <div className="col-md-3 p-0">
                    <div class="d-flex">
                      <div class="">
                        <input
                          type="number"
                          // id="quantity"
                          name="below12"
                          class="filter-input form-control input-number"
                          value={age.below12}
                          min="1"
                          max="100"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="p-0">
                        <div class="input-group-btn">
                          <button
                            type="button"
                            class="filter-btn btn btn-outline-secondary"
                            data-type="minus"
                            data-field=""
                            onClick={decreaseBelow12}
                          >
                            <span class="fas fa-minus"></span>
                          </button>
                        </div>
                        <div class="input-group-btn">
                          <button
                            type="button"
                            class="filter-btn btn btn-outline-secondary"
                            data-type="plus"
                            data-field=""
                            onClick={increaseBelow12}

                          >
                            <span class="fas fa-plus"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <small>2-12 years</small>
                  </div>
                  <div className="col-md-3 p-0">
                    <div class="d-flex">
                      <div class="">
                        <input
                          type="number"
                          // id="quantity"
                          name="below2"
                          class="filter-input form-control input-number"
                          value={age.below2}
                          min="1"
                          max="100"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="p-0">
                        <div class="input-group-btn">
                          <button
                            type="button"
                            class="filter-btn btn btn-outline-secondary"
                            data-type="minus"
                            data-field=""
                            onClick={decreaseBelow2}
                          >
                            <span class="fas fa-minus"></span>
                          </button>
                        </div>
                        <div class="input-group-btn">
                          <button
                            type="button"
                            class="filter-btn btn btn-outline-secondary"
                            data-type="plus"
                            data-field=""
                            onClick={increaseBelow2}
                            >
                            <span class="fas fa-plus"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <small>Below 2 years</small>
                  </div>
                  <div className="col-md-3 p-0">
                    <div class="d-flex" style={{marginBottom: '12px'}}>
                      <select  style={{ borderColor: '#c9c9c9' , height: 41,  outline: 'none', color: 'grey', padding: '10px', width: '95%'}}>
                        <option >Economy</option>
                        <option >Econ</option>
                        <option >Ec</option>
                      </select>
                      {/* <div class="">
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          class="filter-input form-control input-number"
                          value="Economy"
                          min="1"
                          max="100"
                        />
                      </div> */}
                      {/* <div className="p-0"> */}
                        {/* <div class="input-group-btn">
                          <button
                            type="button"
                            class="filter-btn btn btn-outline-secondary"
                            data-type="minus"
                            data-field=""
                          >
                            <span class="fas fa-minus"></span>
                          </button>
                        </div> */}
                        {/* <div class="input-group-btn">
                          <button
                            type="button"
                            class="filter-btn btn btn-outline-secondary"
                            data-type="plus"
                            data-field=""
                          >
                            <span class="fas fa-plus"></span>
                          </button>
                        </div> */}
                      {/* </div> */}
                    </div>
                    {/* <small>Above 12 years</small> */}
                  </div>
                </div>
              </div>
          </div>
        </>
    )
}