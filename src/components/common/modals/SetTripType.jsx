// Hooks and contexts
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { TransferPointsContext } from "../../../context/TransferPoints";
import LoaderContext from "../../../context/Loading";
import { LoginContext } from "../../../context/Auth";

// Components
import Loading from "../../features/Loader/Loading";
import Modal from "react-modal";
import SuccessModal from "./SuccessModal";
import swal from "sweetalert";
import { TripType } from "../../pages/products/Entertainment/Travel/TripType";
import { OneWayTrip } from "../../pages/products/Entertainment/Travel/OneWayTrip";
import { RoundTrip } from "../../pages/products/Entertainment/Travel/RoundTrip";
import { MultipleDestinations } from "../../pages/products/Entertainment/Travel/MultipleDestination";

Modal.setAppElement("#root");

function SetTripType(props) {
  const { addClass = "header-icon" } = props;
  const [open, setOpen] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const { getUserBalance } = useContext(LoginContext);

  const { makeTransfer, state, setInputs, inputs } = useContext(
    TransferPointsContext
  );
  const { loading } = useContext(LoaderContext);
  const buttonLink = "/pages/travel/all-flights";
  const tripOptions = ["oneway", "roundTrip", "multiDestinations"];

  

  const customStyles = {
    content: {
      width: "100vw",
      top: "60%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  useEffect(() => {
    if (state.data !== null) {
      console.log(state.data);
      if (state.data.status === 1 && state.data.success === true) {
        setShowSuccess(true);
        getUserBalance();
      }

      if (state.data.status === 0 && state.data.success === false) {
        swal({
          title: "Oops!",
          text: state.data.message,
          icon: "error",
          button: "Ok",
        });
      }
    }
  }, [state]);

  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const transfer = () => {
    const data = {
      receiver_member_number: props.data.membership_id,
      point: props.data.amount,
      save: props.data.save_beneficiary,
      pin: inputs.pin,
    };

    makeTransfer(data);
    closeModal();
  };

  const closeModal = () => {
    props.closeModal();
    setOpen(false);
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
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




  // if( tripType === 'oneWay' ){
    return (
      <>
        <Link
          to="#"
          className={`login-link ${addClass}`}
          onClick={openModal}
          title="Login"
        >
          <i className="icon-user-2"></i>
        </Link>
        <Modal
          isOpen={open}
          contentLabel="addCartModal"
          className="add-cart-modal modal"
          id="addCartModal"
          shouldFocusAfterRender={false}
          portalClassName="ReactModalPortal add-to-cart-portal"
          overlayClassName="cart-modal-overlay"
          style={customStyles}
        >
          {loading ? <Loading /> : ""}

          <div className="trip-content">
            <div className="trip-type-content">
              <button
                title="Close (Esc)"
                type="button"
                className="p-3 mfp-close"
                onClick={closeModal}
              >
                ×
              </button>
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


          {/* <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <button
                  title="Close (Esc)"
                  type="button"
                  className="p-3 mfp-close"
                  onClick={closeModal}
                >
                  ×
                </button>
              <div className="modal-body p-0">
                <div class="p-0">
                  <div class="flight-card">
  
  
                    
                    <TripType tripType = {trip} />


                    <OneWayTrip/>
                    
                    
                
  
                    <div className="col-md-12 px-0 mt-3">
                      <Link
                        to={buttonLink}
                        className="btn btn-primary float-right"
                      >
                        {" "}
                        <i className="fas fa-search"></i> Searchggg
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </Modal>
        {showSuccess === true ? (
          <SuccessModal
            messageTitle={`Transfer Successful`}
            messageBody={`Your order has been submited successfully`}
          />
        ) : (
          ""
        )}
      </>
    );
  }
// }

export default SetTripType;
