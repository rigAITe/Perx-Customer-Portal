import React, { useState, useContext } from "react";
import axios from "axios";
import LoaderContext from "./Loading";

export const AuctionContext = React.createContext();

export function AuctionContextController({ children }) {
  const { toggleLoading } = useContext(LoaderContext);
  let intialState = { data: null };
  const [state, setState] = useState(intialState);
  const [singleAuctionState, setSingleAuction] = useState(intialState);
  const [listAuctionState, setListAuctionState] = useState(intialState);
  const [placeBidState, setPlaceBid] = useState(intialState);
  const [bidHistoryState, setBidHistory] = useState(intialState);
  const [singleClaimState, setSingleClaimState] = useState(intialState);
  const [checkoutState, setCheckoutState] = useState(intialState);
  const [inputs, setInputs] = useState({});
  const [orderReceipt, setOrderReceipt] = useState({});
  const [deliveryState, setDeliveryState] = useState(intialState);

  const getAuctionCategories = () => {
    toggleLoading(true);
    axios
      .get(`auction/sigma-prime/categories`)
      .then((res) => {
        toggleLoading(false);
        setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log('Error in AUCTION',err.response)
        toggleLoading(false);
        setState({
          data: err.response,
        });
      });
  };

  const listAuctions = () => {
    toggleLoading(true);
    axios
      .get(`auction/sigma-prime/list_auctions`)
      .then((res) => {
        toggleLoading(false);
        setListAuctionState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setListAuctionState({
          data: err.response,
        });
      });
  };

  const getSingleAuction = (auction_ref_no) => {
    toggleLoading(true);
    axios
      .get(`auction/sigma-prime/get_auction/${auction_ref_no}`)
      .then((res) => {
        toggleLoading(false);
        setSingleAuction({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setSingleAuction({
          data: err.response.data,
        });
      });
  };

  const placeBid = (data) => {
    toggleLoading(true);
    axios
      .post(`auction/sigma-prime/place/bid`, {
        ...data,
      })
      .then((res) => {
        console.log(res);
        toggleLoading(false);
        setPlaceBid({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setPlaceBid({
          data: err.response.data,
        });
      });
  };
  
  const bidHistory = (data) => {
    toggleLoading(true);
    axios
      .post(`auction/sigma-prime/member/history`, {
        ...data,
      })
      .then((res) => {
        toggleLoading(false);
        setBidHistory({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setBidHistory({
          data: err.response.data,
        });
      });
  };
  
  const getSingleClaim = (data) => {
    toggleLoading(true);
    axios
      .post(`auction/sigma-prime/member/claims`, {
        ...data,
      })
      .then((res) => {
        toggleLoading(false);
        setSingleClaimState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setSingleClaimState({
          data: err.response.data,
        });
      });
  };
  
  const checkoutOnPickup = (data) => {
    toggleLoading(true);
    axios
      .post(`auction/sigma-prime/claim_auction`, {
        ...data,
      })
      .then((res) => {
        toggleLoading(false);
        setCheckoutState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setCheckoutState({
          data: err.response.data,
        });
      });
  };
  
  const calculateDelivery = (data) => {
    toggleLoading(true);
    axios
      .post(`auction/sigma-prime/calculate/delivery`, {
        ...data,
      })
      .then((res) => {
        toggleLoading(false);
        setDeliveryState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setDeliveryState({
          data: err.response.data,
        });
      });
  };

  return (
    <AuctionContext.Provider
      value={{
        getAuctionCategories,
        listAuctions,
        setInputs,
        getSingleAuction,
        placeBid,
        bidHistory,
        setState,
        getSingleClaim,
        checkoutOnPickup,
        setOrderReceipt,
        calculateDelivery,
        deliveryState,
        orderReceipt,
        checkoutState,
        singleClaimState,
        state,
        bidHistoryState,
        listAuctionState,
        singleAuctionState,
        placeBidState,
        inputs,
      }}
    >
      {children}
    </AuctionContext.Provider>
  );
}
