import React from 'react';
import { Link } from 'react-router-dom';
import './board.css'

function Board() {
  return (
    <div className="col-12 col-lg-16 col-md-12 board">
      <div className="col-lg-12">
        <div className="card cap-table">
          <div className="card-bodie">
            <h5>My Dashboard</h5>
            <div className=" col-lg-12 col-md-12 justify-content-between dashboard" >
              <div className="dash-info">
                <div className="dash-image">
                  <h4 className="dash-name"> JD</h4>
                </div>
                <div className="dash-contact">
                  <h5>John Doe | 5454745454</h5>
                  <p>johndoe@gmail.com</p>
                </div>
              </div>
              <div className="dash-button-p">
                <div> Edit </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-6 col-lg-6">
              <div className="card inner-card">
                <div className="card-header"> Point Statistics
                  <Link to="#" className="card-edit">View Statement</Link>
                </div>

                <div className="card-body points">
                  <div>
                    <p>Total Current Balance</p>
                    <strong>24,567</strong>
                  </div>
                  <div>
                    <p>Total Current Balance</p>
                    <strong>24,567</strong>
                  </div>
                  <div>
                    <p>Total Current Balance</p>
                    <strong>24,567</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card inner-card">
                <div className="card-header"> Tier Information
                  <Link to="#" className="card-edit">View</Link>
                </div>

                <div className="card-body ">
                  <div className="dash-info">
                    <div className="dash-image">
                      <h4 className="dash-name tier"> GD</h4>
                    </div>
                    <div className="tier-body">
                      <h5 className="tier-body-head">GOLD</h5>
                      <p>Spend 3k point to unlock platinum tier</p>
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
                  <Link to="#" className="card-edit">View All</Link>
                </div>

                <div className="card-body">
                  <p><strong>John Doe - 08076543126 </strong></p>
                  <p style={{color: 'black'}}>Grand Square Victoria Highland, No 8 Adetokunbo  Ademola, Victoria Island</p>
                  <Link style={{fontSize: 12, }} to="#" className="card-edit">Email address</Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card inner-card">
                <div className="card-header"> Security
                  <Link to="#" className="card-edit">Change Password</Link>
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