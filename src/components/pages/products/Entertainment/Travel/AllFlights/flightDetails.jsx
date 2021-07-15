import React, { useState } from 'react'
import Breadcrumb from "../../../../../../../src/components/common/breadcrumb.jsx";
import { Link } from "react-router-dom";

import arik from "./../assets/arik.svg";
import airpeace from "./../assets/airpeace.svg";
import arrow from "./../assets/arrow.svg";

import SetTripType from "../../../../../common/modals/SetTripType.jsx";

import './flightDetails.css'


const FlightDetails = (props) => {

  const [ home, profile ] = useState(false)
  const [showTripTypeModal, setShowTripTypeModal] = useState(false);

  const showModal = (value) => {
    setShowTripTypeModal(value);
  };
  
  const closeTripTypeModal = () => {
    setShowTripTypeModal(false);
  };

  // console.log( 'THIS IS TESTING', () => props.location.testProp(true))

  return (

    <div className="mb-10">
      <div class="jumbotron jumbotron-fluid ">
        <div class="container jumbotron-container">
          <div className="mx-auto">
            <Breadcrumb current="Flight Detail" parent="Flight" />
            <div className="mt-2">
              <p className="medium-text">Search result for</p>

              <div className="d-flex justify-content-between">
                <h5 className="font-weight-bold text-dark p-0 mt-0">
                  Flights from Lagos to Dubai <br></br>
                  21/04/2020 - 24/04/2020 | 1 Adult 0 Child 0 Infant | Economy{" "}
                </h5>
                <div className="change-flight-btn">
                  <button className="btn btn-outline-primary"
                    onClick={() => showModal(true)}
                    >Change</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container"> */}

      <div className="all-flight-scroll">
        
      <div className="all-flight-card mx-auto ">
        <div className="col-md-10 mx-auto ">
          <div className="col-md-12 add-dashed-border d-flex align-items-center col-md-10 ">
            <img className="mr-5 carrier-logo" src={arik} alt="logo" />
            <div>
              <div className="d-flex">
                <span className="d-flex align-items-center">
                  LOS 06:00 hrs
                </span>
                <img className="mx-5 right-arrow" src={arrow} alt="arrow" />
                <span className="d-flex align-items-center">
                  2h 55m hours | 1 stop{" "}
                </span>
                <img className="mx-5 right-arrow" src={arrow} alt="arrow" />
                <span className="d-flex align-items-center">
                  PHC 08:50 hrs
                </span>
              </div>
              <div className="mt-1 mx-auto d-flex justify-content-between">
                <small>Flight arrives Tue, 21 Apr.</small>
                <small className="mr-0 pr-0">Economy</small>
              </div>
            </div>
          </div>

          <div className="col-md-12 d-flex align-items-center col-md-10">
            <img className="mr-5 carrier-logo" src={arik} alt="logo" />
            <div>
              <div className="d-flex">
                <span className="d-flex align-items-center">
                  LOS 06:00 hrs
                </span>
                <img className="mx-5 right-arrow" src={arrow} alt="arrow" />
                <span className="d-flex align-items-center">
                  2h 55m hours | 1 stop{" "}
                </span>
                <img className="mx-5 right-arrow" src={arrow} alt="arrow" />
                <span className="d-flex align-items-center">
                  PHC 08:55 hrs
                </span>
              </div>
              <div className="mt-1 mx-auto d-flex justify-content-between">
                <small>Flight arrives Tue, 21 Apr.</small>
                <small className="mr-0 pr-0">Economy</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>

      
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '86%', margin: 'auto'}}>
        <div className="col-12 col-lg-6 col-md-12 tabs" style={{paddingLeft: 0}}>
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">ITINERY</button>
              <button class="nav-link "  id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">FAIR RULES</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active detail-c" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div className="row justify-content-between itenary mt-1">
                <div className="bold">Departure Flight: Lagos - Dubai</div>
                <div><small>Baggage Info: 2PCS x 23KG</small></div>
              </div>
              <div className="d-flex mt-2">
                <div style={{flex: .7}}> <small>Fri, May 28</small></div>
                <div style={{flex: 1}}><img src={airpeace}/></div>
                <div style={{flex: 3, paddingLeft: '10px'}}>
                  <p><small className="bold">10:50 - 10:40</small></p>
                  <div style={{ width: '80%'}}>
                    <small>Lagos (Murtala Muhammed International Airport) (LOS) - Lome (Lome airport) (LFW)</small>
                  </div>
                  <div className="mt-1">
                    <small>Air peace . 22. Class H</small>
                  </div>
                </div>
                <div style={{flex: 1, textAlign: 'end'}}>
                  <div><small>Economy</small></div>
                  <small className="bold">0h 50m</small>
                </div>
              </div>
              <div className="d-flex">
                <div style={{flex: .7}}></div>
                <div style={{flex: 1}}></div>
                <div className="itenary mt-2 bold row justify-content-between" style={{flex: 4, marginLeft: '15px', color: 'black'}}>
                  <div><small className="bold">Layover: at Lome (Lome airport)</small></div>
                  <div><small className="bold">1h 50m</small></div>
                </div>
              </div>

              {/* <div className="row justify-content-between itenary mt-1">
                <div className="bold">Departure Flight: Lagos - Dubai</div>
                <div><small>Baggage Info: 2PCS x 23KG</small></div>
              </div> */}
              <div className="d-flex mt-2">
                <div style={{flex: .7}}> <small>Fri, May 28</small></div>
                <div style={{flex: 1}}><img src={airpeace}/></div>
                <div style={{flex: 3, paddingLeft: '10px'}}>
                  <p><small className="bold">12:30 - 13:25</small></p>
                  <div style={{ width: '80%'}}>
                    <small>Lagos (Murtala Muhammed International Airport) (LOS) - Lome (Lome airport) (LFW)</small>
                  </div>
                  <div className="mt-1">
                    <small>Air peace . 22. Class H</small>
                  </div>
                </div>
                <div style={{flex: 1, textAlign: 'end'}}>
                  <div><small>Economy</small></div>
                  <small className="bold">0h 50m</small>
                </div>
              </div>
              <div className="d-flex">
                <div style={{flex: .7}}></div>
                <div style={{flex: 1}}></div>
                <div className="itenary mt-2 bold row justify-content-between" style={{flex: 4, marginLeft: '15px', color: 'black'}}>
                  <div><small className="bold">Layover: at Accra (Accra airport)</small></div>
                  <div><small className="bold">1h 50m</small></div>
                </div>
              </div>

              <div className="d-flex mt-2">
                <div style={{flex: .7}}> <small>Fri, May 28</small></div>
                <div style={{flex: 1}}><img src={airpeace}/></div>
                <div style={{flex: 3, paddingLeft: '10px'}}>
                  <p><small className="bold">17:50 - 05:40</small></p>
                  <div style={{ width: '80%'}}>
                    <small>Lome (Lome airport) (LFW) - Accra (Accra airport) (ACC)</small>
                  </div>
                  <div className="mt-1">
                    <small>Air peace . 22. Class H</small>
                  </div>
                </div>
                <div style={{flex: 1, textAlign: 'end'}}>
                  <div><small>Economy</small></div>
                  <small className="bold">0h 50m</small>
                </div>
              </div>

            </div>
            <div class="tab-pane fade detail-c " id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab ">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        
        <div className="row col-12 col-lg-4 col-md-12  fare" style={{paddingLeft: 0}}>
          <div className="mx-auto">
            <div className="card cap-table">
              <div className="card-body">
                <p className= "bold black-text">
                  <small className="bold">Fare Summary</small>
                </p>
                <div className= "table-responsive">
                  <table className= "table">
                    <tbody className= "sweepstake-table">
                        <tr>
                            <td>
                                <img src="" alt=""/>
                            </td>
                            <td>
                                <p className= "bold ">
                                  <small className="bold">Travelers</small>
                                </p>
                                <p><small>Adults (x1)</small></p>
                                <p><small>Children (x1)</small></p>
                                <p><small>Infant (x1)</small></p>
                            </td>
                            <td>
                                <p><small>10,500 <span className="ruby-tag">Rubies</span></small></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="" alt=""/>
                            </td>
                            <td>
                                <p className= "bold ">
                                  <small className="bold">Total</small>
                                </p>
                            </td>
                            <td>
                              <p><small>10,500 <span className="ruby-tag">Rubies</span></small></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="" alt=""/>
                            </td>
                            <td>
                                <p style={{color:'grey'}}> 
                                  <small>*Non refundable</small>
                                </p>
                                <p style={{color:'grey'}}> <small>*Total fare displayed above has been rounded off and may thus show a slightly difference</small></p>
                                <div style={{marginTop: 40}}>
                                  <button type="button" class="btn btn-primary btn-lg">Redeem</button>
                                </div>
                            </td>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{showTripTypeModal ? (
        <SetTripType closeModal={() => closeTripTypeModal()} />
      ) : (
        ""
      )}
    </div>
    
  )
}

export default FlightDetails


