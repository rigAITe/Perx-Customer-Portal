import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { isStateHandled } from "../../../../../src/utils/index.js";

import { LoginContext } from "../../../../context/Auth";
import LoaderContext from "../../../../context/Loading";
import Loading from "../../../features/Loader/Loading";

import swal from "sweetalert";

function ShippingForm(props) {
  const { editData } = props;
  const { setEditInputs, editInputs, getCities, getStates, cityLocationState } = useContext(
    LoginContext
  );
  const { loading } = useContext(LoaderContext);
  const [cities, setCities] = useState([]);

  const { data: stateData, status: stateStatus } = useQuery(
    "states",
    getStates
  );

  const states = stateStatus === "success" && stateData.states.data;

  const handleInputChange = (event) => {
    event.persist();
    setEditInputs((inputs) => ({
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

  return (
    <>
      {loading ? <Loading /> : ""}
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
              value={editData.first_name}
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
              value={editData.last_name}
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
              value={editData.email}
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
              value={editData.phone_no}
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
                value={editData.state_id}
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
                value={editData.city_id}
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
              value={editData.address}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(ShippingForm);
