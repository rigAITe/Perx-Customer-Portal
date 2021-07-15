import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Breadcrumb from "../../../../common/breadcrumb";
import "./travel.css";
// import ListProducts from "./ListProducts";

import place1 from "./../assets/places/place1.svg";
import place2 from "./../assets/places/place2.svg";
import place3 from "./../assets/places/place3.svg";
import place4 from "./../assets/places/place4.svg";
// import { TripType } from "./TripType";
// import { TopFlightDestinations } from "./TopFlightDestinations";
import { ListOfTopFlightDestinations } from './ListOfTopFlightDestinations.jsx'
import { AllFlightTripType } from './AllFlightTripType'
import { OneWayTrip } from "./OneWayTrip";
import { RoundTrip } from "./RoundTrip";
import { MultipleDestinations } from "./MultipleDestination";


function Travel(props) {
  const [curPage, setCurPage] = useState(1);
  const [layout, setLayout] = useState("grid");
  const [productCount, setProductCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(12);
  const buttonTitle = "Go";
  const buttonLink = "/pages/travel/all-flights";
  const tripOptions = ["oneway", "roundTrip", "multiDestinations"];
  // to use lazy loading
  // useEffect(() => {
  //   let imgLoad = imagesLoaded(".product-group");

  //   if (document.querySelector(".skeleton-body")) {
  //     document.querySelector(".skeleton-body").classList.remove("loaded");
  //     imgLoad.on("done", function() {
  //       document.querySelector(".skeleton-body") &&
  //         document.querySelector(".skeleton-body").classList.add("loaded");
  //     });
  //   }
  // });
  // useEffect(() => {
  //   if (document.querySelector(".parallax")) {
  //     document.addEventListener("scroll", setParallax);
  //   }

  //   document.querySelector(".menu") &&
  //     document.querySelector(".menu").firstChild.classList.add("active");
  //   document.querySelector(".mobile-menu") &&
  //     document.querySelector(".mobile-menu").firstChild.classList.add("active");
  // });

  const gridType = (layoutParam) => {
    if (layout !== layoutParam) {
      setLayout(layoutParam);
    }
  };

  const onChangeProductCount = (countParam) => {
    if (productCount !== countParam) setProductCount(countParam);
  };

  const onChangeCurPage = (curPageParam) => {
    if (curPage !== curPageParam) {
      setCurPage(curPageParam);
    }
  };

  const onChangeDisplayCount = (countParam) => {
    if (displayCount !== countParam) {
      setDisplayCount(countParam);
    }
  };


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

  const [ showOneWay, setOneWay ] = useState(true)
  const [ showRoundTrip, setRoundTrip ] = useState(false)
  const [ showMultipleDestinations, setMultipleDestinations  ] = useState(false)

  const switchTabs = (id) => {
    switch(id){
      case "oneWay":
        setOneWay(true)
        setRoundTrip(false)
        setMultipleDestinations(false);
        break;

      case "roundTrip":
        setOneWay(false)
        setRoundTrip(true)
        setMultipleDestinations(false);
        break;

        case "multipleDestinations":
          setOneWay(false)
          setRoundTrip(false)
          setMultipleDestinations(true);
          break;

          default:
            break;
    }
  }

  return(
    <div className="travel-page">
      <div className="travel-content">
      <Helmet>
        <title>Customer Portal - Events</title>
      </Helmet>
      
      <div className="travel">
        <div className="travel-inner">

          <Breadcrumb current="Travel" parent="Entertainment" />
          <div>
            <div className="travel-head">
              <h5>Flight ticket</h5>
            </div>
            <div className="text-white mt-0 travel-head">
              <p>Search & Book Your Flights Today</p>
            </div>
          </div>

          {/* Trip Type Content  */}
          <div className="trip-content">
            <div className="trip-type-content">

              <div>
                <h5 style={{marginBottom: 0}}>Trip Type</h5>
                <div className="trip-type">
                  <div>
                    <button
                      id= { showOneWay === true ? "active-flight-btn" : ''}
                      onClick={ () => switchTabs('oneWay')}
                      className="medium-text btn btn-secondary flight-btn"
                    >
                      {" "}
                      <i className="fas fa-plane-departure"></i> One Way
                    </button>
                  </div>
                  <div>
                    <button className=" medium-text btn btn-secondary flight-btn"
                      id={ showRoundTrip === true ? "active-flight-btn" : ""}
                      onClick={ () => switchTabs('roundTrip')}

                    >
                      {" "}
                      <i className="fas fa-sync-alt"></i> Round Trip
                    </button>
                  </div>
                  <div>
                    <button className=" medium-text btn btn-secondary flight-btn"
                      id={ showMultipleDestinations === true ? "active-flight-btn" : ""}
                      onClick={ () => switchTabs('multipleDestinations')}
                    >
                      {" "}
                      <i className="fas fa-globe"></i> Multi-City
                    </button>
                  </div>
                </div>
              </div>

                {/* FILTER  */}

              <div>
                <h5 className="trip-filter-head">Filter</h5>
                <div className="trip-filter">
                  <div >
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
                    <small>Below 2 yrs</small>
                  </div>
                  <div >
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
                    <small>2-12 yrs</small>
                  </div>
                  <div>
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
                    <small>Above 12 yrs</small>
                  </div>
                  <div>
                    <div class="d-flex" style={{marginBottom: '12px'}}>
                      <select  style={{ borderColor: '#c9c9c9' , height: 41,  outline: 'none', color: 'grey', padding: '10px', width: '100%'}}>
                        <option >Economy</option>
                        <option >Econ</option>
                        <option >Ec</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {showOneWay === true ? (
              <OneWayTrip/> 
            ) : (
              ""
            )}

            {showRoundTrip === true ? (
              <RoundTrip/> 
            ) : (
              ""
            )}

            {showMultipleDestinations === true ? (
              <MultipleDestinations/> 
            ) : (
              ""
            )}

          </div>

        </div>
      </div>

      {/* Top Flight Destination       */}
      <div className="flight-list">
        <div className="">
          <h2 className="mt-3 mb-3 section-title heading-border ls-20 border-0">
            Top Flights destination
          </h2>
          <div className={`product-group row mx-0 divide-line up-effect`}>
  
            <ListOfTopFlightDestinations
              buttonTitle={buttonTitle}
              buttonLink={buttonLink}
              image={place1}          
            />
  
            <ListOfTopFlightDestinations
              buttonTitle={buttonTitle}
              buttonLink={buttonLink}
              image={place2}          
            />
  
            <ListOfTopFlightDestinations
              buttonTitle={buttonTitle}
              buttonLink={buttonLink}
              image={place3}          
            />
  
            <ListOfTopFlightDestinations
              buttonTitle={buttonTitle}
              buttonLink={buttonLink}
              image={place4}          
            />
          </div>
        </div>

      </div>

    </div>
    </div>
  )
}

export default Travel;
