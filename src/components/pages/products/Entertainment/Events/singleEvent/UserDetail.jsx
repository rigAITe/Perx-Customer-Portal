import React, { useState, useContext } from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { LoaderContext } from '../../../../../../context/Loading';
import swal from "sweetalert";

const UserDetail = (props) => {

  const { toggleLoading } = useContext(LoaderContext)

  const [form, setForm] = useState({
    email: '',
    number: '',
    name: ''
  })

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const postData = (e) => {
    e.preventDefault();
    const data = {
      signature: props.info.signature,
      points: props.info.points,
      email: form.email,
      quantity: props.info.quantity,
      phone_no: form.number,
      name: form.name
    }
    toggleLoading(true)

    axios.post(`catalogue/events/redeem`, data)
      .then(res => {
        toggleLoading(false)
        props.setShowSuccess(true)
        console.log('dATA RETURNED ', res)
        props.setModal(false)
      })
      .catch(err => {
        toggleLoading(false)
        swal({
          title: "Oops!",
          text: err.response.data.message,
          icon: "error",
          button: "Ok",
        });
        props.setModal(false)
      })
  }

  return (
    <>
      <ToastContainer />
      <form style={{ marginBottom: 0 }} onSubmit={postData}>
        <div className="card-bodie">
          <div className="row">
            <div className="col-md-4">
              <div className="form-group required-field">
                <label htmlFor="acc-name">Name</label>
                <input type="text" className="form-control" id="acc-name" name="name" onChange={handleForm} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group required-field">
                <label htmlFor="acc-lastname">Phone Number</label>
                <input type="text" className="form-control" id="acc-lastname" name="number" onChange={handleForm} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group required-field">
                <label htmlFor="acc-lastname">Email address</label>
                <input type="email" className="form-control" id="acc-lastname" name="email" onChange={handleForm} />
              </div>
            </div>
          </div>
          <div className="form-footer-right">
            <button type="submit" className="btn btn-primary">Redeem</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default UserDetail
