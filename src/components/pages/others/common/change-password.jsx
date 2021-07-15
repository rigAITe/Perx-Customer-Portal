import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './board.css'
import Visible from './assets/invisibility.svg'
import Invisible from './assets/visibility.svg'

function ChangePassword() {

  const [data, setData] = useState({
    old_password: '',
    new_password: '',
    confirm_password: ''
  })

  const [visibility, setVisiblity] = useState({
    old: false,
    new: false,
    confirm: false
  })

  const oldFunc = () => {
    setVisiblity({
      ...visibility,
      old: !visibility.old
    })
  }

  const newFunc = () => {
    setVisiblity({
      ...visibility,
      new: !visibility.new
    })
  }

  const confirmFunc = () => {
    setVisiblity({
      ...visibility,
      confirm: !visibility.confirm
    })
  }


  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const changePassword = (e) => {
    const detail = {
      old_password: data.old_password,
      password: data.new_password,
      password_confirmation: data.confirm_password,
    }

    axios.post(`user/change/password`, detail)
      .then(res => {
        console.log(res)
        toast.success("Password Changed Succesfully !")
      })
      .catch(err => {
        console.log(err)
        toast.error("Password Initially used or Network error")
      })
  }

  const oldVisiblility = () => {

  }

  return (
    <div className="col-12 col-lg-16 col-md-12 board">
      <ToastContainer
      // pauseOnFocusLoss
      // pauseOnHover
      />
      <div className="col-lg-12">
        <div className="card cap-table">
          <div className="card-bodie">
            <h5>Change Password</h5>
            <div className="changePassword">
              <div className="col-md-12">
                <div className="form-group required-field">
                  <label htmlFor="acc-name">Current Password</label>
                  <div style={{ display: 'flex', border: '1px solid #dad6d6', paddingRight: '10px' }}>
                    <input style={{ border: 'none' }} type={visibility.old ? "text" : "password"} className="form-control" id="acc-name" name="old_password" required onChange={handleChange} />
                    <img src={visibility.old ? Visible : Invisible} alt="Password" onClick={() => oldFunc()} />
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group required-field">
                  <label htmlFor="acc-lastname">New Password</label>
                  <div style={{ display: 'flex', border: '1px solid #dad6d6', paddingRight: '10px' }}>
                    <input style={{ border: 'none' }} type={visibility.new ? "text" : "password"} className="form-control" id="acc-lastname" name="new_password" required onChange={handleChange} />
                    <img src={visibility.new ? Visible : Invisible} alt="Password" onClick={() => newFunc()} />
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group required-field">
                  <label htmlFor="acc-lastname">Confirm New Password</label>
                  <div style={{ display: 'flex', border: '1px solid #dad6d6', paddingRight: '10px' }}>
                    <input style={{ border: 'none' }} type={visibility.confirm ? "text" : "password"} className="form-control" id="acc-lastname" name="confirm_password" required onChange={handleChange} />
                    <img src={visibility.confirm ? Visible : Invisible} alt="Password" onClick={() => confirmFunc()} />
                  </div>
                </div>
              </div>

              <div className="form-footer-right" style={{ textAlign: 'center' }}>
                {/* <div></div> */}
                <button type="submit" className="btn btn-primary" onClick={changePassword}>Change Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ChangePassword);