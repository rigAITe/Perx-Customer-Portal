import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../../context/Auth";
import { isStateHandled } from "../../../../../src/utils/index.js";
import swal from "sweetalert";
import toastr from "toastr";
import { useQuery } from "react-query";

function ShippingForm(props) {
  const { show, editData } = props;
  const [cities, setCities] = useState([]);
  const {
    addUserAddress,
    addAddressState,
    setInputs,
    inputs,
    getStates,
    getCities,
    cityLocationState,
  } = useContext(LoginContext);
  const { data: stateData, status: stateStatus } = useQuery(
    "states",
    getStates
  );

  const states = stateStatus === "success" && stateData.states.data;

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const changeStateId = () => {
    const getStateId = document.getElementById("state").value;
    getCities(getStateId);
    removeCityDisable();
  };

  const removeCityDisable = () => {
    const getCityAttribute = document.getElementsByName("city")[0];
    getCityAttribute.disabled = false;
  };

  useEffect(() => {
    if (
      isStateHandled(cityLocationState) &&
      !isStateHandled(cityLocationState).status
    ) {
      swal({
        title: "Oops!",
        text: isStateHandled(cityLocationState).message,
        icon: "error",
        button: "Ok",
      });
      return;
    }

    if (
      isStateHandled(cityLocationState) &&
      isStateHandled(cityLocationState).status
    ) {
      setCities(cityLocationState.data.data);
    }
  }, [cityLocationState.data]);

  useEffect(() => {
    if (addAddressState.data !== null) {
      if (addAddressState.data.status === 0 && addAddressState.data.message) {
        const errorMessages = addAddressState.data.message;

        for (const error in errorMessages) {
          toastr.error(errorMessages[error], "Validation Error!", {
            iconClass: "toast-error",
          });
        }
        return;
      }
    }

    if (
      isStateHandled(addAddressState) &&
      !isStateHandled(addAddressState).status
    ) {
      swal({
        title: "Oops!",
        text: isStateHandled(addAddressState).message,
        icon: "error",
        button: "Ok",
      });
      return;
    }

    if (
      isStateHandled(addAddressState) &&
      isStateHandled(addAddressState).status
    ) {
      swal({
        title: "Success!",
        text: isStateHandled(addAddressState).message,
        icon: "success",
        button: "Ok",
      });
    }
  }, [addAddressState.data]);

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6">
          <div className="form-group required-field">
            <label>First Name </label>
            <input
              type="text"
              className="form-control"
              required
              name="first_name"
              onChange={handleInputChange}
              value={show ? editData.address : inputs.first_name}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <div className="form-group required-field">
            <label>Last Name </label>
            <input
              type="text"
              className="form-control"
              required
              name="last_name"
              onChange={handleInputChange}
              value={show ? editData.address : inputs.last_name}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <div className="form-group required-field">
            <label>Email </label>
            <input
              type="email"
              className="form-control"
              required
              name="email"
              onChange={handleInputChange}
              value={show ? editData.email : inputs.email}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <div className="form-group required-field">
            <label>Phone number </label>
            <input
              type="number"
              className="form-control"
              required
              name="phone_no"
              onChange={handleInputChange}
              value={show ? editData.phone_no : inputs.phone_no}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <div className="form-group">
            <label>State</label>
            <div className="select-custom">
              <select
                name="state_id"
                id="state"
                onChange={(handleInputChange, () => changeStateId())}
                value={show ? editData.state_id : inputs.state_id}
                className="form-control"
              >
                <option value="" selected>
                  Select State
                </option>
                {stateStatus === "success" &&
                  states.map((state) => (
                    <option value={state.id}>{state.state_name}</option>
                  ))}
              </select>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <div className="form-group">
            <label>City</label>
            <div className="select-custom">
              <select
                name="city"
                onChange={handleInputChange}
                value={show ? editData.city_id : inputs.city_id}
                className="form-control"
                disabled
              >
                <option value="" selected>
                  Select City
                </option>
                {cities &&
                  cities.map((city) => (
                    <option value={city.id}>{city.City_name}</option>
                  ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="col-12 col-md-12 col-lg-12">
          <div className="form-group required-field">
            <label>Address </label>
            <input
              type="text"
              className="form-control"
              required
              name="address"
              onChange={handleInputChange}
              value={show ? editData.address : inputs.address}
            />
          </div>
        </div>
        {show ? null : (
          <div className="col-12 col-md-6 col-lg-6">
            <button
              onClick={() => addUserAddress()}
              className="btn btn-primary black-btn"
            >
              Add Address
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default React.memo(ShippingForm);
