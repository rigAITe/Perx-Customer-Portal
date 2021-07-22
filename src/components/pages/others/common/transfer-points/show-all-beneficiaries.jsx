import React, { useState, useContext, useEffect, useRef } from "react";
import "./css/transfer-points.css";
import { TransferPointsContext } from "../../../../../context/TransferPoints";
import Loading from "../../../../features/Loader/Loading";
import swal from "sweetalert";
import { LoaderContext } from "../../../../../context/Loading";
import toastr from "toastr";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


function ShowAllBeneficiariesPage() {

  const [ data, setData ] = useState([])
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

  // useEffect(() => {
  //   if (state.data !== null) {
  //     if (state.data.status === 1 && state.data.success === true) {
  //       swal({
  //         title: "Successful!",
  //         text: state.data.message,
  //         icon: "success",
  //         button: "Ok",
  //       });
  //       getBeneficiaryList();
  //     }

  //     if (state.data.status === 0 && state.data.success === false) {
  //       swal({
  //         title: "Oops!",
  //         text: state.data.message,
  //         icon: "error",
  //         button: "Ok",
  //       });
  //     }
  //   }
  // }, [state]);

  // useEffect(() => {
  //   getBeneficiaryList();
  // }, []);

  // const allBeneficiaries = useRef([]);

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
        console.log('ID OF RECEIVER ', id)
        const newBeneficiary = data.filter(add => add.id !== id)
        setData(newBeneficiary)
        toastr.success("Beneficiary Removed !", "Success", {
          iconClass: "toast-success",
        });
      }
    });
  };

  // useEffect(() => {
  //   if (beneficiaries.data !== null) {
  //     if (
  //       beneficiaries.data.status === 0 &&
  //       beneficiaries.data.success === false
  //     ) {
  //       toastr.error("Failed to fetch user beneficiaries!", "error", {
  //         iconClass: "toast-error",
  //       });
  //     }

  //     if (
  //       beneficiaries.data.status === 1 &&
  //       beneficiaries.data.success === true
  //     ) {
  //       console.log('BENEFICIARY DATA ', beneficiaries.data);
  //       beneficiaries.data.data.forEach((beneficiary) => {
  //         allBeneficiaries.current.push({
  //           value: beneficiary.membership_number,
  //           label: `${beneficiary.first_name} ${ beneficiary.last_name == null ? '' : beneficiary.last_name}`,
  //           id: `${beneficiary.id}`,
  //         });
  //       });
  //     }
  //   }
  // }, [allBeneficiaries]);

  const fetchData = () => {
    axios.get(`user/beneficiaries`)
    .then( res => setData(res.data.data ))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {/* {loading ? <Loading /> : ""} */}
      { data.length === 0 ? 
      (
        <div style={{textAlign: 'center'}}>No beneficiaries found</div>
      ) 
        : 
      (
        <div className="col-sm-12">
          {data.map((item) => {
            console.log('Beneficiary Data ', data)
            return (
              <p className="mb-1 p-4 beneficiary-list">
                {item.first_name} {item.last_name} - {item.membership_number}
                <i
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(item.id)}
                  class="float-right fas fa-trash"
                ></i>{" "}
              </p>
            );
          })}
        </div>
      )}
    </div>
    
  );
}

export default (ShowAllBeneficiariesPage);
