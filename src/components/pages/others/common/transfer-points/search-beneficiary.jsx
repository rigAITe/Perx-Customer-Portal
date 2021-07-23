// Hooks and Contexts
import React, { useState, useContext, useEffect, useRef } from "react";
import { TransferPointsContext } from "../../../../../context/TransferPoints";
import { LoaderContext } from "../../../../../context/Loading";

// Components
import TransferSummary from "../../../../common/modals/TransferSummary";
import Loading from "../../../../features/Loader/Loading";

// UI
import swal from "sweetalert";
import toastr from "toastr";
import Select from "react-select";
import "./css/transfer-points.css";
import { nanoid }from 'nanoid'
import axios from 'axios'

function TransferPoints() {

  const [showTransferSummary, setShowTransferSummary] = useState(false);
  const [transferSummaryData, setTransferSummaryData] = useState(false);
  const [showBeneficiaryDataPage, setShowBeneficiaryDataPage] = useState(false);
  const [checked, setChecked] = useState(false);
  const [ benefit, setBenefit ] = useState([])


  const {
    verifyCardNumber,
    verifyCardState,
    getBeneficiaryList,
    hideBeneficiaryDataPage,
    setInputs,
    inputs,
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
    getBeneficiaryList();
  }, []); 

  useEffect(() => {
    if (hideBeneficiaryDataPage) {
      setShowBeneficiaryDataPage(false);
    }
  }, [hideBeneficiaryDataPage]);

  const beneficiaryData = useRef({});


  useEffect(() => {
    if (verifyCardState.data !== null) {
      if (
        verifyCardState.data.status === 1 &&
        verifyCardState.data.success === true
      ) {
        setShowBeneficiaryDataPage(true);

        beneficiaryData.current = {
          name: `${verifyCardState.data.data.first_name} ${verifyCardState.data.data.last_name == null ? '' : verifyCardState.data.data.last_name}`,
        };

        toastr.success("Membership Id Validated!", "Success", {
          iconClass: "toast-success",
        });
        return;
      }

      if (
        verifyCardState.data.status === 0 &&
        verifyCardState.data.success === false
      ) {
        if (verifyCardState.data.message && !verifyCardState.data.data) {
          toastr.error(verifyCardState.data.message, "Validation failed!", {
            iconClass: "toast-error",
          });

          setShowBeneficiaryDataPage(false);
          return;
        }

        setShowBeneficiaryDataPage(false);
        const errorMessages = verifyCardState.data.data;

        for (const error in errorMessages) {
          toastr.error(errorMessages[error], "Validation Error!", {
            iconClass: "toast-error",
          });
        }
        return;
      }
    }
  }, [verifyCardState]);

  const proceedToTransfer = () => {
    const amount = document.getElementById("amount").value;
    if (amount.trim().length === 0) {
      swal({
        title: "Oops!",
        text: `Amount field cannot be empty`,
        icon: "error",
        button: "Ok",
      });
      return;
    }

    setShowTransferSummary(!showTransferSummary);
    setTransferSummaryData({
      amount,
      name: beneficiaryData.current.name,
      membership_id: inputs.card_number,
      save_beneficiary: (beneficiaryData.current.save_beneficiary == 1) ? 1 : 0,
    });
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChange = (event) => {
    event.persist();
    setChecked(event.target.checked);

    const save_beneficiary = event.target.checked === true ? 1 : 0;
    beneficiaryData.current.save_beneficiary = save_beneficiary;
  };

  const handleSearchInput = (event) => {
    const card_number = event.value;
    setInputs((inputs) => ({
      ...inputs,
      card_number,
    }));
    verifyCardNumber(card_number);
  };

  useEffect(() => {
    axios.get(`user/beneficiaries`)
      .then( res => setBenefit(res.data.data))
  }, [])

  const newArr = benefit.map( res => {
    let name = `${res.first_name} ${res.last_name == null ? '' : res.last_name}`
    const data  = {
      value: res.membership_number,
      label : name
    }
    return data
  })


  return (
    <div>
      {/* {loading ? <Loading /> : ""} */}
      <form action="#">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="acc-email">Select Beneficiary </label>
              <Select
                onChange={handleSearchInput}
                className="basic-single"
                classNamePrefix="select"
                isClearable="true"
                isSearchable="true"
                name="beneficiary_card_number"
                defaultValue="Select"
                options={newArr}
              />
            </div>
            <h6 className="mt-3 heading-border border-0">OR</h6>

            <div className="row align-items-center justify-content-between">
              <div className="col-md-8">
                <label htmlFor="card_number">Enter Membership Id</label>
                <input
                  type="text"
                  className="form-control"
                  name="card_number"
                  onChange={handleInputChange}
                  value={inputs.card_number}
                />
              </div>

              <div style={{marginTop: '30px', paddingLeft: '10px', textAlign: 'end',}}>   
                <button
                  onClick={() => verifyCardNumber(inputs.card_number)}
                  type="button"
                  className="btn-lg w-500 btn btn-primary"
                >
                  Validate Id
                </button>
              </div>
            </div>
          </div>

          {showBeneficiaryDataPage === true ? (
            <div className="col-sm-12">
              <h6 class="mt-3 heading-border border-0"></h6>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="acc-name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="acc-name"
                      required
                      disabled
                      name="acc-name"
                      value={beneficiaryData.current.name}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="acc-lastname">Membership Id</label>
                    <input
                      type="text"
                      className="form-control"
                      id="acc-lastname"
                      required
                      disabled
                      name="acc-lastname"
                      value={inputs.card_number}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="acc-lastname">Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      id="amount"
                      required
                      name="amount"
                      onChange={handleInputChange}
                      value={inputs.amount}
                    />
                  </div>
                </div>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  checked={checked}
                  name="save_beneficiary"
                  onChange={handleChange}
                />
                <span className="ml-3 font-weight-bold terms-condition">
                  Save Beneficiary
                </span>
              </div>

              <div className="mb-2"></div>

              <div className="form-footer">
                <div className="col-md-12 d-flex justify-content-center">
                  <button
                    onClick={() => proceedToTransfer()}
                    type="button"
                    className="btn-lg w-50 btn btn-primary"
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </form>
      {showTransferSummary === true ? (
        <TransferSummary data={transferSummaryData}  setShowTransferSummary={setShowTransferSummary} setShowBeneficiaryDataPage={setShowBeneficiaryDataPage}/>
      ) : (
        ""
      )}
    </div>
  );
}

export default React.memo(TransferPoints);
