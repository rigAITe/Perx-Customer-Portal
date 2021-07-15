import React, { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
import bin from './assets/delete.svg'
import edit from './assets/edit.svg'
import './board.css'
import axios from 'axios'
import { LoginContext } from '../../../../context/Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AddressBookModalForm } from './addressBModalForm';
import AddressBookComponent from './components/addressBookComp';


function AddressBook(props) {


  const [address, setAddress] = useState([])
  const [state, setState] = useState([])
  const [city, setCity] = useState([])
  const [visible, setVisible] = useState(false)
  const [modal, setModal] = useState(false);
  const [editUser, setEditedUser] = useState({})
  const [val, setValue] = useState({})



  useEffect(() => {
    axios.get(`user/addresses`)
      .then(res => setAddress(res.data.data))

    axios.get(`user/states/1`)
      .then(res => setState(res.data.data))

    console.log('States ', state)
  }, [])

  const fetchAddress = () => {
    axios.get(`user/addresses`)
      .then(res => setAddress(res.data.data))
  }

  const deleteAddress = (id) => {
    const data = {
      address_id: id
    }

    axios.post(`user/remove/address`, data)
      .then(res => {
        toast.success("Address Removed !")
        const newAddress = address.filter(add => add.address_id !== id)
        setAddress(newAddress)
      })
      .catch(err => {
        console.log('ADDRESS ID ', id)
        toast.error("Error occured, check your internet or refresh page!")
      })
  }

  const toggle = (id) => {
    setEditedUser(id)
    setModal(!modal)
  };


  const formVisibility = () => {
    setVisible(!visible)
  }

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    state: '',
    city: '',
    address: '',
  })

  const callState = () => {
    axios.get(`user/cities/${data.state}`)
      .then(res => setCity(res.data.data))
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const addAddress = (e) => {
    e.preventDefault()
    const info = {
      first_name: data.firstname,
      last_name: data.lastname,
      phone_no: data.number,
      email: data.email,
      state_id: parseInt(data.state),
      country_id: 1,
      city_id: parseInt(data.city),
      address: data.address,
    }

    axios.post(`user/add/address`, info)
      .then(res => {
        fetchAddress()
        toast.success("Added Succesfully!")
        setVisible(!visible)
        setAddress([info, ...address])
        console.log('dATA RETURNED ', res)
      }
      )
      .catch(err =>
        toast.error("Error occured, check your internet or refresh page!")
      )
  }


  return (
    <div className="col-12 col-lg-16 col-md-12 board">
      <ToastContainer
      // pauseOnFocusLoss
      // pauseOnHover
      />
      <div className="col-lg-12">
        <div className="card cap-table">

          <div className="card-bodie" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ color: '#000', fontWeight: '600' }}>Address Book</div>
            <div style={{ background: 'blue', padding: '7px 12px', marginBottom: '0px', color: '#fff', fontWeight: '600', fontSize: '10px', cursor: 'pointer' }} onClick={() => formVisibility()}>Add Address</div>
          </div>
          <>
            {visible ?
              (
                <form style={{ marginBottom: 0 }} onSubmit={addAddress}>
                  <div className="card-bodie">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group required-field">
                          <label htmlFor="acc-name">First Name</label>
                          <input type="text" className="form-control" id="acc-name" name="firstname" onChange={handleChange} required />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group required-field">
                          <label htmlFor="acc-lastname">Last Name</label>
                          <input type="text" className="form-control" id="acc-lastname" name="lastname" onChange={handleChange} required />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group required-field">
                          <label htmlFor="acc-name">Phone Number</label>
                          <input type="number" className="form-control" id="acc-name" name="number" onChange={handleChange} required />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group required-field">
                          <label htmlFor="acc-lastname">Email address</label>
                          <input type="email" className="form-control" id="acc-lastname" name="email" onChange={handleChange} required />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6" >
                        <div className="required-field">
                          <label htmlFor="acc-name">State <span class="required"></span></label>
                          <select type="text" className="form-control select" id="" name="state" onChange={handleChange} >
                            <option>Select State</option>
                            {state.map((res) =>
                              <option value={res.id}>{res.state_name}</option>
                            )}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group required-field">
                          <label htmlFor="acc-lastname">City</label>
                          <select type="text" className="form-control select" id="city" name="city" onChange={handleChange} onClick={callState}>
                            <option>Select City</option>
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
                          <input type="street" className="form-control " id="acc-name" name="address" required onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                    <div className="form-footer-right">
                      <button type="submit" className="btn btn-primary" >Save</button>
                    </div>
                  </div>
                </form>
              ) : ''
            }
          </>

          {address.map((res) =>
            <AddressBookComponent
              firstname={res.first_name}
              lastname={res.last_name}
              number={res.phone_no}
              address={res.address}
              toggle={toggle}
              key={res.id}
              addressId={res.address_id}
              deleteAddress={deleteAddress}
              data={res}
            />
          )
          }
        </div>
      </div>

      <>
        <div>
          <Modal isOpen={modal} toggle={toggle} contentClassName="address-modal">
            <ModalHeader toggle={toggle} charCode="x">Edit Account Information</ModalHeader>
            <ModalBody>

              <AddressBookModalForm
                toggle={toggle}
                address={editUser} state={state}
                callState={callState}
                fetchAddress={fetchAddress}
                modal={modal}
                setModal={setModal}
              />

            </ModalBody>
          </Modal>
        </div>
      </>


    </div>

  )
}

export default React.memo(AddressBook);




