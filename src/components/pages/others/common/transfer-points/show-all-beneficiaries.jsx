import React, { useState, useContext, useEffect, useRef } from "react";
import "./css/transfer-points.css";
import { TransferPointsContext } from "../../../../../context/TransferPoints";
import Loading from "../../../../features/Loader/Loading";
import swal from "sweetalert";
import { LoaderContext } from "../../../../../context/Loading";
import toastr from "toastr";

function ShowAllBeneficiariesPage() {
  const {
    getBeneficiaryList,
    beneficiaries,
    removeBeneficiary,
    state,
  } = useContext(TransferPointsContext);
  const { loading } = useContext(LoaderContext);

  toastr.options.progressBar = true;
  toastr.options = {
    toastClass: "alert",
    iconClasses: {
      error: "alert-error",
      info: "alert-info",
      success: "alert-success",
      warning: "alert-warning",
    },
  };

  useEffect(() => {
    if (state.data !== null) {
      if (state.data.status === 1 && state.data.success === true) {
        swal({
          title: "Successful!",
          text: state.data.message,
          icon: "success",
          button: "Ok",
        });
        getBeneficiaryList();
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

  useEffect(() => {
    getBeneficiaryList();
  }, []);

  const allBeneficiaries = useRef([]);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure you want to remove beneficiary?",
      text: "You won't be able to revert this!",
      icon: "warning",
      buttons: ["Cancel", "Proceed!"],
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result === true) {
        removeBeneficiary(id);
      }
    });
  };

  useEffect(() => {
    if (beneficiaries.data !== null) {
      if (
        beneficiaries.data.status === 0 &&
        beneficiaries.data.success === false
      ) {
        toastr.error("Failed to fetch user beneficiaries!", "error", {
          iconClass: "toast-error",
        });
      }

      if (
        beneficiaries.data.status === 1 &&
        beneficiaries.data.success === true
      ) {
        console.log('BENEFICIARY DATA ', beneficiaries.data);
        beneficiaries.data.data.forEach((beneficiary) => {
          allBeneficiaries.current.push({
            value: beneficiary.membership_number,
            label: `${beneficiary.first_name} ${ beneficiary.last_name == null ? '' : beneficiary.last_name}`,
            id: `${beneficiary.id}`,
          });
        });
      }
    }
  }, []);

  return (
    <div>
      {loading ? <Loading /> : ""}
      <div className="col-sm-12">
        {allBeneficiaries.current.map((data) => {
          return (
            <p className="mb-1 p-4 beneficiary-list">
              {data.label} - {data.value}
              <i
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(data.id)}
                class="float-right fas fa-trash"
              ></i>{" "}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(ShowAllBeneficiariesPage);
