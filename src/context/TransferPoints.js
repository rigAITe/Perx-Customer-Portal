import React, { useState, useContext } from "react";
import axios from "axios";
import LoaderContext from "./Loading";

export const TransferPointsContext = React.createContext();

export function TransferPointsContextController({ children }) {
  const { toggleLoading } = useContext(LoaderContext);
  let intialState = { data: null };
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(intialState);
  const [verifyCardState, setVerifyCard] = useState(intialState);
  const [beneficiaries, setBeneficiaries] = useState(intialState);
  const [inputs, setInputs] = useState({});
  const [hideBeneficiaryDataPage, setHideBeneficiaryDataPage] = useState(false);
  

  const getBeneficiaryList = () => {
    toggleLoading(true);
    axios
      .get(`user/beneficiaries`)
      .then((res) => {
        toggleLoading(false);
        setBeneficiaries({
          data: res.data,
        });

      })
      .catch((err) => {
        toggleLoading(false);

        setBeneficiaries({
          data: err.response.data,
        });
      });
  };

  const verifyCardNumber = (card_number) => {
    toggleLoading(true);
    axios
      .post(`user/validate/card`, {
        card_number,
      })
      .then((res) => {
        console.log(res);
        toggleLoading(false);
        setVerifyCard({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setVerifyCard({
          data: err.response.data,
        });
      });
  };

  const makeTransfer = (data) => {
    toggleLoading(true);
    axios
      .post(`user/transfer/points`, {
        ...data,
      })
      .then((res) => {
        console.log(res);
        toggleLoading(false);
        setHideBeneficiaryDataPage(true);
        setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setHideBeneficiaryDataPage(true);
        setState({
          data: err.response.data,
        });
      });
  };

  const removeBeneficiary = (id) => {
    toggleLoading(true);

    console.log('REMOVE ', id)

    const data = {
      beneficiary_id: parseInt(id)
    }

    axios
      .post(`user/remove/beneficiary`, data)
      .then((res) => {
        console.log(res);
        toggleLoading(false);
        setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setState({
          data: err.response.data,
        });
      });
  };

  return (
    <TransferPointsContext.Provider
      value={{
        getBeneficiaryList,
        setLoading,
        setInputs,
        verifyCardNumber,
        makeTransfer,
        removeBeneficiary,
        hideBeneficiaryDataPage,
        verifyCardState,
        state,
        inputs,
        beneficiaries,
      }}
    >
      {children}
    </TransferPointsContext.Provider>
  );
}
