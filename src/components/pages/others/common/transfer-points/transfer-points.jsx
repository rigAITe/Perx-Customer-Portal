// Hooks and Contexts
import React, { useState, useContext } from "react";
import { LoaderContext } from "../../../../../context/Loading";

// Components
import Loading from "../../../../features/Loader/Loading";
import ShowAllBeneficiariesPage from "./show-all-beneficiaries";
import ShowSearchBeneficiariesPage from "./search-beneficiary";

// UI
import "./css/transfer-points.css";

function TransferPoints() {
  const [showSearchBeneficiariesPage, setSearchBeneficiariesPage] = useState(
    true
  );
  const [showAllBeneficiariesPage, setShowAllBeneficiariesPage] = useState(
    false
  );

  const { loading } = useContext(LoaderContext);

  const switchTabs = (id) => {
    switch (id) {
      case "transfer":
        document.getElementById(id).classList.add("active-beneficiary-menu");
        document
          .getElementById("all_beneficiaries")
          .classList.remove("active-beneficiary-menu");
        setSearchBeneficiariesPage(true);
        setShowAllBeneficiariesPage(false);
        break;

      case "all_beneficiaries":
        document.getElementById(id).classList.add("active-beneficiary-menu");
        document
          .getElementById("transfer")
          .classList.remove("active-beneficiary-menu");
        setShowAllBeneficiariesPage(true);
        setSearchBeneficiariesPage(false);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {loading ? <Loading /> : ""}
      <div className="auction-container">
        <div className="card cap-table">
          <div style={{padding: '20px'}}>
            <h4>Transfer Points</h4>
            <div className="row my-5">
              <div className="col-md-6 col-sm-6 col-6 ">
                <button
                  type="submit"
                  id="transfer"
                  onClick={() => switchTabs("transfer")}
                  className={`w-100 btn-lg btn btn-outline-secondary active-beneficiary-menu t-head`}
                >
                  Transfer to Beneficiary
                </button>
              </div>

              <div className="col-md-6 col-sm-6 col-6 ">
                <button
                  type="submit"
                  id="all_beneficiaries"
                  onClick={() => switchTabs("all_beneficiaries")}
                  className="w-100 btn-lg btn btn-outline-secondary t-head"
                >
                  All Beneficiaries
                </button>
              </div>
            </div>
            {showSearchBeneficiariesPage === true ? (
              <ShowSearchBeneficiariesPage />
            ) : (
              ""
            )}

            {showAllBeneficiariesPage === true ? (
              <ShowAllBeneficiariesPage />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(TransferPoints);
