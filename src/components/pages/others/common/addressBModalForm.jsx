// import { data, data } from 'isotope-layout';
import React, {useState} from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export  const AddressBookModalForm = ({ address, state, stateID, fetchAddress, modal, setModal }) => {

  const [ city, setCity ] = useState([])
  const [ stateList, setStateList ] = useState([])

  console.log('In mOdal page ' ,address)
  console.log('modal state', state)
  console.log('State Id', stateID)

  const [ data, setData ] = useState({
    firstname: address.first_name, 
    lastname: address.last_name, 
    email: address.email, 
    number: address.phone_no, 
    state: '', 
    city: '', 
    address: address.address, 
  })

  console.log('modal state', data)
  console.log('parese state ', state)
  console.log('parese city ', city)

  const editAddress = (e) => {
    e.preventDefault()
    axios.post(`user/edit/address`, {
      address_id: address.address_id,
      first_name: data.firstname,
      last_name: data.lastname,
      phone_no: data.number,
      email: data.email,
      state_id: data.state,
      country_id: 1,
      city_id: data.city,
      address: data.address
    })
      .then(res => {
        fetchAddress()
        setModal(!modal)
        toast.success("Added Succesfully!")
        console.log(res)
      })
      .catch(err => {
        console.log(err)
        toast.error("Error occured, check your internet or refresh page!")
      })
  }

  const callState = () => {
    axios.get(`user/cities/${data.state}`)
    .then(res => setCity(res.data.data))
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  return (
    <>
      <form style={{marginBottom: 0}} onSubmit={editAddress}>
      <ToastContainer/>
        <div className="card-bodie">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group required-field">
                <label htmlFor="acc-name">First Name</label>
                <input type="text" className="form-control" id="acc-name" name="firstname" onChange={handleChange} required value={data.firstname}/>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group required-field">
                  <label htmlFor="acc-lastname">Last Name</label>
                  <input type="text" className="form-control" id="acc-lastname" name="lastname" onChange={handleChange} required value={data.lastname}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group required-field">
                <label htmlFor="acc-name">Phone Number</label>
                <input type="number" className="form-control" id="acc-name" name="number" onChange={handleChange} required value={data.number}/>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group required-field">
                  <label htmlFor="acc-lastname">Email address</label>
                  <input type="email" className="form-control" id="acc-lastname" name="email" onChange={handleChange} required value={data.email}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6" >
              <div className="required-field">
                <label htmlFor="acc-name">State <span class="required"></span></label>
                <select type="text" className="form-control select" id="" name="state" onChange={handleChange} required>
                  <option></option>
                  {state.map((res) => 
                    <option value={res.id}>{res.state_name}</option>
                  )}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group required-field">
                  <label htmlFor="acc-lastname">City</label>
                  <select type="text" className="form-control select" id="city" name="city"  onChange={handleChange} onClick={callState} required>
                    <option></option>
                    {city.map((res) => 
                      <option value={res.id}>{res.City_name}</option>
                    )}
                  </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" >
              <div className="required-field">
                <label htmlFor="acc-name">Address</label>
                <input type="street" className="form-control " id="acc-name" name="address" required onChange={handleChange} value={data.address}/>
              </div>
            </div>
          </div>
          <div className="form-footer-right">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </>
  );
}
