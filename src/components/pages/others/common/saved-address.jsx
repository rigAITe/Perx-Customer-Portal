import React, { useContext, useEffect, useState } from "react";
import "./saved-address.css";
import Link from "react-router-dom/Link";
import { LoginContext } from "../../../../context/Auth";
import { isStateHandled } from "../../../../../src/utils/index.js";
import swal from "sweetalert";

const SavedAddress = (props) => {
  const {
    removeUserAddress,
    addressRemovalState,
    getUserAddresses,
  } = useContext(LoginContext);

  useEffect(() => {
    if (
      isStateHandled(addressRemovalState) &&
      !isStateHandled(addressRemovalState).status
    ) {
      swal({
        title: "Oops!",
        text: isStateHandled(addressRemovalState).message,
        icon: "error",
        button: "Ok",
      });
      return;
    }

    if (
      isStateHandled(addressRemovalState) &&
      isStateHandled(addressRemovalState).status
    ) {
      swal({
        title: "Success!",
        text: isStateHandled(addressRemovalState).message,
        icon: "success",
        button: "Ok",
      });
      getUserAddresses();
      return;
    }
  }, [addressRemovalState.data]);
  
  const { name, address } = props;

  const removeAddress = () => {
    swal({
      title: "Are you sure you want to remove address?",
      text: "You won't be able to revert this!",
      icon: "warning",
      buttons: ["Cancel", "Proceed!"],
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result === true) {
        removeUserAddress(address.address_id);
      }
    });
  };
  return (
    <>
      {props.active ? (
        <div className="d-flex flex-row justify-content-between align-items-center saved-address">
          <input checked type="radio" name="address-bar" value="address1" />
          <div>
            <p className="font-weight-bold text-center">{`${address.first_name} ${address.last_name}`}</p>
            <p>{address.address}</p>
          </div>
          <div>
            <Link
              onClick={props.onClick}
              to="#"
              title="Edit"
              className="step-title-edit"
            >
              <span className="sr-only">Edit</span>
              <i className="icon-pencil mr-5"></i>
            </Link>
            <Link
              onClick={() => removeAddress(address.address_id)}
              to="#"
              title="Edit"
              className="step-title-edit"
            >
              <span className="sr-only">Delete</span>
              <i className="fa fa-trash"></i>
            </Link>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-row justify-content-between align-items-center saved-address2">
          <input active type="radio" name="address-bar" value="address1" />
          <div>
            <p>{address.first_name}</p>
            <p>{address.address}</p>
          </div>
          <div style={{ visibility: "hidden" }}>
            <Link to="#" title="Edit" className="step-title-edit">
              <span className="sr-only">Edit</span>
              <i className="icon-pencil mr-5"></i>
            </Link>
            <Link to="#" title="Edit" className="step-title-edit">
              <span className="sr-only">Delete</span>
              <i className="fa fa-trash"></i>
            </Link>
          </div>
        </div>
      )}
      <div className="mb-2"></div>
    </>
  );
};

export default SavedAddress;
