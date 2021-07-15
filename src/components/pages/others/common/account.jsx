import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Account() {
    const [ show, setShow ] = useState( 0 );

    const toggleShow = () => {
        setShow( ( show + 1 ) % 2 );
    }

    const [ data, setData ] = useState({
      first: '',
      lastname: '',
      middlename: '',
      number:'',
      email: '',
      sex: '',
      dob: ''
    })

    useEffect(() => {
      axios.get(`user/view/profile`)
        .then(res => setData( {
          first: res.data.data.first_name,
          lastname: res.data.data.last_name,
          middlename: res.data.data.middle_name,
          number: res.data.data.phone,
          email: res.data.data.email,
          sex: res.data.data.sex,
          dob: res.data.data.DOB
        }))
    }, [])

    console.log('PROFILE ', data)

    return (
        
      <div>
        <div className="col-12 col-lg-16 col-md-12 board">
        <div className="col-lg-12">
          <div className="card cap-table">
            <form style={{marginBottom: 0}}>
              <div className="card-bodie">
                <h5>Edit Account Information </h5>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group ">
                      <label htmlFor="acc-name">First Name</label>
                      <input type="text" className="form-control" id="acc-name" name="acc-name" value={data.first} disabled={true} />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group ">
                        <label htmlFor="acc-lastname">Middle Name</label>
                        <input type="text" className="form-control" id="acc-lastname" name="acc-lastname" value={data.middlename} disabled={true}/>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group ">
                        <label htmlFor="acc-lastname">Last Name</label>
                        <input type="text" className="form-control" id="acc-lastname" name="acc-lastname"  value={data.lastname} disabled={true}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label htmlFor="acc-name">Phone Number</label>
                      <input type="text" className="form-control" id="acc-name" name="acc-name" value={data.number} disabled={true}/>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group ">
                        <label htmlFor="acc-lastname">Email address</label>
                        <input type="text" className="form-control" id="acc-lastname" name="acc-lastname" value={data.email} disabled={true}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label htmlFor="acc-name">Sex</label>
                      <input type="text" className="form-control" id="acc-name" name="acc-name"  value={data.sex} disabled={true}/>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group ">
                        <label htmlFor="acc-lastname">Date of birth</label>
                        <input type="text" className="form-control" id="acc-lastname" name="acc-lastname"  value={data.dob} disabled={true}/>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo( Account );