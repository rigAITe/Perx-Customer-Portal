import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { isStateHandled } from "../../../../../src/utils/index.js";
import { AuctionContext } from "../../../../context/Auctions";
import LoaderContext from "../../../../context/Loading";

import "./bid-history.css";
import swal from "sweetalert";

import Loading from "../../../features/Loader/Loading";
import Countdown from "react-countdown";
import moment from "moment";

const AuctionBidHistory = () => {
  const { bidHistory, bidHistoryState, setInputs, inputs } = useContext(
    AuctionContext
  );
  const { loading } = useContext(LoaderContext);
  const [getHistories, setHistories] = useState([]);

  const user = JSON.parse(localStorage.getItem("user_data"));

  const Completionist = () => (
    <span className="badge badge-danger">Expired!</span>
  );

  useEffect(() => {
    bidHistory();
  }, []);

  useEffect(() => {
    if (
      isStateHandled(bidHistoryState) &&
      !isStateHandled(bidHistoryState).status
    ) {
      swal({
        title: "Oops!",
        text: isStateHandled(bidHistoryState).message,
        icon: "error",
        button: "Ok",
      });
      return;
    }

    if (
      isStateHandled(bidHistoryState) &&
      isStateHandled(bidHistoryState).status
    ) {
      setHistories(bidHistoryState.data.data);
    }
  }, [bidHistoryState.data]);

  const loadHistories = getHistories.map((history) => {
    return (
      <tr>
        <td>
          <img
            className="imageStyle"
            src={require("./images/bag-1.jpg")}
            alt=""
          />
        </td>
        <td>
          <p className="textStyle1">{history.auction_name} </p>
        </td>
        <td>{history.current_bid} rubies</td>
        <td>{`${moment(history.bid_at).format(
          "dddd, MMMM Do YYYY, h:mm:ss a"
        )}`}</td>
        <td>
          <Countdown date={history.end_date}>
            <Completionist />
          </Countdown>
        </td>
        <td>
          <div className="d-flex flex-row justify-content-between align-items-center increase-width">
            <p
              className={`${history.status === 1 ? "text-warning" : ""} ${
                history.status === 3 || 2 ? "text-success" : ""
              }`}
            >
              {history.status_name}
            </p>
            {history.winner === 1 ? <p className="text-dark">Winner</p> : ""}
            {history.can_claim === 1 ? (
              <Link
                to={`${process.env.PUBLIC_URL}/products/auction-redeem?auction_ref_no=${history.auction_ref_no}&member_no=${history.member_no}`}
                className="btn btn-primary"
                title="Claim"
                onClick={() => null}
              >
                Claim
              </Link>
            ) : (
              ""
            )}
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className="auction-container">
      {loading ? <Loading /> : ""}
      <div className="card cap-table">
        <div className="card-body">
          <h4>Auction History</h4>
          <div class="table-responsive">
            <table class="table bid-history-table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Item</th>
                  <th scope="col">Bid Amount</th>
                  <th scope="col">Bid Time</th>
                  <th scope="col">Time Left</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {loadHistories}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionBidHistory;
