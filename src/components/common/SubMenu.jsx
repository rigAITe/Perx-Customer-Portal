import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuctionContext } from '../../context/Auctions';

const Shop_subMenu = () => {

  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.href);
  });

  return (
    <nav className="main-nav w-100">
      <ul className="menu sf-arrows">
        <li>
          <Link>
            Fashion
          </Link>
        </li>
        <li>
          <Link>
            Baby & KIDS
          </Link>
        </li>
        <li>
          <Link>
            GADGETS
          </Link>
        </li>
        <li>
          <Link>
            BEAUTY
          </Link>
        </li>
        <li>
          <Link>
            GROCERIES
          </Link>
        </li>
        <li>
          <Link>
            APPLIANCES
          </Link>
        </li>
      </ul>
    </nav>
  )
}


const AirtimeBill_subMenu = () => {
  return (
    <nav className="main-nav w-100">
      <ul className="menu sf-arrows">
        <li>
          <Link>
            TRANSPORT AND TOLL PAYMENT
          </Link>
        </li>
        <li>
          <Link>
            CABLE BILLS
          </Link>
        </li>
        <li>
          <Link>
            UTILITIES
          </Link>
        </li>
        <li>
          <Link>
            AIRTIME
          </Link>
        </li>
        <li>
          <Link>
            DATA
          </Link>
        </li>
        <li>
          <Link>
            SCHOOL AND EXAMS
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const Auction_subMenu = () => {

  const { state, getAuctionCategories, listHomeAuctions } = useContext(AuctionContext)

  useEffect(() => {
    getAuctionCategories()
  }, [])

  // state.data.map( res => console.log('State ', res))
  // console.log( 'state ', (state))


  return (
    <nav className="main-nav w-100">
      <ul className="menu sf-arrows">
        {state.map(res =>
        // onClick={() => listHomeAuctions()}
          <li >
            <Link
              to={`${process.env.PUBLIC_URL}/pages/auctions/${res.slug}`}
            >
              {res.category_name}
            </Link>
          </li>
        )}

        <li></li>

      </ul>
    </nav>
  )
}

const Discount_subMenu = () => {
  return (
    <nav className="main-nav w-100">
      <ul className="menu sf-arrows">
        <li>
          <Link>
            FASHION
          </Link>
        </li>
        <li>
          <Link>
            BABY & KIDS
          </Link>
        </li>
        <li>
          <Link>
            GADGETS
          </Link>
        </li>
        <li>
          <Link>
            BEAUTY
          </Link>
        </li>
        <li>
          <Link>
            GROCERIES
          </Link>
        </li>
        <li>
          <Link>
            APPLIANCES
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const Meals_subMenu = () => {
  return (
    <nav className="main-nav w-100">
      <ul className="menu sf-arrows">
        <li>
          <Link
            to={`${process.env.PUBLIC_URL}/pages/meal`}
          >
            TAKE IN
          </Link>
        </li>
        <li>
          <Link
            to={`${process.env.PUBLIC_URL}/pages/meal/dine-in`}
          >
            DINE IN
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const Survey_subMenu = () => {
  return (
    <nav className="main-nav w-100">
      <ul className="menu sf-arrows">
        <li>
          <Link>
            Available Surveys
          </Link>
        </li>
        <li>
          <Link>
            Incomplete Surveys
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const Sweepstake_subMenu = () => {

  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.href);
  });

  return (
    <nav className="main-nav w-100">
      <ul className="menu sf-arrows">
        <li className={path.indexOf("/pages/sweepstake") > -1 ? "active" : ""}>
          <Link
            to={`${process.env.PUBLIC_URL}/pages/sweepstake`}
          >
            All Sweepstakes
          </Link>
        </li>
        <li className={path.indexOf("/pages/sweepstake_history`") > -1 ? "active" : ""}>
          <Link
            to={`${process.env.PUBLIC_URL}/pages/sweepstake_history`}
          >
            History
          </Link>
        </li>
      </ul>
    </nav>
  )
}




const Experience_Travel_subMenu = () => {

  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.href);
  });

  return (
    <nav className="main-nav w-100">
      <ul className="menu sf-arrows">
        <li className={path.indexOf("pages/experience&travel/experience") > -1 ? "active" : ""}>
          <Link
            to={`${process.env.PUBLIC_URL}/pages/experience&travel/experience`}
          >
            EXPERIENCE
          </Link>
        </li>
        <li className={path.indexOf("pages/experience&travel/travel") > -1 ? "active" : ""}>
          <Link
            to={`${process.env.PUBLIC_URL}/pages/experience&travel/travel`}
          >
            TRAVEL
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const Entertainment_subMenu = () => {

  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.href);
  });

  return (
    <nav className="main-nav w-100">
      <ul className="menu sf-arrows">
        <li className={path.indexOf("pages/entertainment/cinema") > -1 ? "active" : ""}>
          <Link
            to={`${process.env.PUBLIC_URL}/pages/entertainment/cinema`}
          >
            CINEMA
          </Link>
        </li>
        <li className={path.indexOf("pages/entertainment/events") > -1 ? "active" : ""}>
          <Link
            to={`${process.env.PUBLIC_URL}/pages/entertainment/events`}
          >
            EVENTS
          </Link>
        </li>
      </ul>
    </nav>
  )
}



export default {
  Shop_subMenu,
  AirtimeBill_subMenu,
  Auction_subMenu,
  Discount_subMenu,
  Meals_subMenu,
  Survey_subMenu,
  Sweepstake_subMenu,
  Experience_Travel_subMenu,
  Entertainment_subMenu
}