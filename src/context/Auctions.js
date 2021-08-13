import React, { useState, useContext } from "react";
import axios from "axios";
import LoaderContext from "./Loading";

export const AuctionContext = React.createContext();

export function AuctionContextController({ children }) {
  const { toggleLoading } = useContext(LoaderContext);
  let intialState = { data: null };
  const [state, setState] = useState([]);
  const [singleAuctionState, setSingleAuction] = useState(intialState);
  const [listAuctionState, setListAuctionState] = useState([]);
  const [listHomeAuctionState, setListHomeAuctionState] = useState([]);
  const [placeBidState, setPlaceBid] = useState(intialState);
  const [bidHistoryState, setBidHistory] = useState(intialState);
  const [singleClaimState, setSingleClaimState] = useState(intialState);
  const [checkoutState, setCheckoutState] = useState(intialState);
  const [inputs, setInputs] = useState({});
  const [orderReceipt, setOrderReceipt] = useState({});
  const [deliveryState, setDeliveryState] = useState(intialState);
  const [auctionCurrentPage, setAuctionCurrentPage] = useState(0)
  const [auctionPerPage, setAuctionPerPage] = useState(0)
  const [auctionTotalPage, setAuctionTotalPage] = useState(0)
  const [singleBid, setSingleBidHistory ] = useState(intialState)
  const [currentBid, setCurrentBid] = useState()
  // setCurrentBid

  const getAuctionCategories = () => {
    toggleLoading(true);
    axios
      .get(`auction/categories`)
      .then((res) => {
        toggleLoading(false);
        setState(
          res.data.data
        );
      })
      .catch((err) => {
        // console.log('Error in AUCTION',err.response)
        toggleLoading(false);
        setState({
          data: err.response,
        });
      });
  };

  const listAuctions = () => {
    toggleLoading(true);
    axios
      .get(`auction/list`)
      .then((res) => {
        console.log('LIST AUCTION ', res.data.data)
        toggleLoading(false);
        setListAuctionState( res.data.data );
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setListAuctionState({
          data: err.response,
        });
      });
  };

  const listHomeAuctions = (category, pagenumber = 1) => {
    toggleLoading(true);
    axios
      .get(`auction/list/${category}?page=${pagenumber}`)
      .then((res) => {
        console.log('PURSE AUCTION ', res.data.data)
        toggleLoading(false);
        setListHomeAuctionState( res.data.data.data );
        setAuctionCurrentPage(res.data.data.current_page)
        setAuctionPerPage(res.data.data.per_page)
        setAuctionTotalPage(res.data.data.total)
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setListHomeAuctionState({
          data: err.response,
        });
      });
  };

  const getSingleAuction = (auction_ref_no) => {
    toggleLoading(true);
    axios
      .get(`auction/single/${auction_ref_no}`)
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
    // console.log('BID DATA ', data)
    axios
      .post(`auction/place/bid`, {
        ...data,
      })
      .then(res => {
        console.log('BID response ', res.data)
        // setSuccess(true)
        // showSuccessModal(true)
        toggleLoading(false);
        setPlaceBid({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        console.log('BID Failed')
        setPlaceBid({
          data: err.response.data,
        });
      });
  };
  
  const bidHistory = ( pagenumber = 1) => {
    toggleLoading(true);
    axios
      .get(`auction/member/history?page=${pagenumber}`)
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

  const singleBidHistory = ( ref, pagenumber = 1) => {
    toggleLoading(true)
    console.log('REFERENCE ', ref)
    axios
      .get(`auction/bid/history/${ref}?page=${pagenumber}`)
      .then((res) => {
        toggleLoading(false);
        setSingleBidHistory({
          data: res.data,
        });
        setCurrentBid(res.data.data)
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setSingleBidHistory({
          data: err.response.data,
        });
      });
  }
  
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
        listHomeAuctions,
        singleBidHistory,
        currentBid,
        singleBid,
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
        listHomeAuctionState,
        auctionCurrentPage,
        auctionPerPage,
        auctionTotalPage,
      }}
    >
      {children}
    </AuctionContext.Provider>
  );
}
