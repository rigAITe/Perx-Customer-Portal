import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './board.css'
import axios from 'axios'

function Board() {

  const [address, setAddress ] = useState({})
  const [ tier, setTier ] = useState({})
  const [ tierName, setTiername ] = useState('')
  const [ firstname, setFirstname ] = useState('')
  const [ lastname, setLastname ] = useState('')

  useEffect(() => {
    axios.get(`user/address`)
      .then(res => setAddress(res.data.data))

      axios.get(`user/tier`)
      .then( res => {
        setTier(res.data.data)
        setTiername(res.data.data.tier_name)
        setFirstname( res.data.data.first_name)
        setLastname( res.data.data.last_name)
      })

  }, [])

  // let upgrade = tier.upgrade_value
  // let member_upgrade_value = tier.member_upgrade_value
  let firstTwoLetters = tierName.slice(0, 2).toUpperCase()
  let name1 = firstname.slice(0, 1).toUpperCase()
  let name2 = lastname == null ? 'X' : lastname.slice(0, 1).toUpperCase()

  console.log('name1 ', name1)

  return (
    <div className="col-12 col-lg-16 col-md-12 board">
      <div className="col-lg-12">
        <div className="card cap-table">
          <div className="card-bodie">
            <h5>My Dashboard</h5>
            <div className=" col-lg-12 col-md-12 justify-content-between dashboard" >
              <div className="dash-info">
                <div className="dash-image">
                  <h4 className="dash-name">{name1}{name2}</h4>
                </div>
                <div className="dash-contact">
                  <h5> {tier.first_name} {tier.last_name} | {tier.phone_no}</h5>
                  <p>{tier.email}</p>
                </div>
              </div>
              <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/account`} style={{color: '#fff'}} className="dash-button-p">
                View
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-6 col-lg-6">
              <div className="card inner-card">
                <div className="card-header"> Point Statistics
                  <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/statement`}  className="card-edit">View Statement</Link>
                </div>

                <div className="card-body points">
                  <div>
                    <p>Total Current Balance</p>
                    <strong>{tier.current_bal}</strong>
                  </div>
                  <div>
                    <p>Total Credit Points</p>
                    <strong>{tier.total_credit_points}</strong>
                  </div>
                  <div>
                    <p>Total Used Points</p>
                    <strong>{tier.total_debit_points}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card inner-card">
                <div className="card-header"> Tier Information
                  <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/tier_status`}  className="card-edit">View</Link>
                </div>

                <div className="card-body ">
                  <div className="dash-info">
                    <div className="dash-image">
                      <h4 className="dash-name tier" style={{backgroundColor: tier.tier_color, color: "#fff"}}> {firstTwoLetters}</h4>
                    </div>
                    <div className="tier-body">
                      <h5 className="tier-body-head" style={{ color: tier.tier_color}}>{tierName}</h5>
                      <p>{tier.upgrade_text}</p>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-6 col-lg-6">
              <div className="card inner-card">
                <div className="card-header"> Address Book
                  <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/address_book`}  className="card-edit">View All</Link>
                </div>

                <div className="card-body">
                  <p><strong>{address.first_name} {address.last_name} - {address.phone_no} </strong></p>
                  <p style={{color: 'black'}}>{address.address}</p>
                  <Link style={{fontSize: 12, }} className="card-edit">{address.email}</Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card inner-card">
                <div className="card-header"> Security
                  <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/change_password`}  className="card-edit">Change Password</Link>
                </div>

                <div className="card-body">
                  <p><strong>Update your Password </strong></p>
                  <p>Ensure you know your current password before before attempting to change to a new password</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default React.memo( Board );