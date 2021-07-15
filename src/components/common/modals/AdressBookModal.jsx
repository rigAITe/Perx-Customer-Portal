import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function AddressBookModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         

        <form style={{marginBottom: 0}}>
          <div className="card-bodie">
            <h5>Edit Account Information </h5>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group required-field">
                  <label htmlFor="acc-name">First Name</label>
                  <input type="text" className="form-control" id="acc-name" name="acc-name" required />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group required-field">
                    <label htmlFor="acc-lastname">Last Name</label>
                    <input type="text" className="form-control" id="acc-lastname" name="acc-lastname" required />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group required-field">
                  <label htmlFor="acc-name">Phone Number</label>
                  <input type="text" className="form-control" id="acc-name" name="acc-name" required />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group required-field">
                    <label htmlFor="acc-lastname">Email address</label>
                    <input type="text" className="form-control" id="acc-lastname" name="acc-lastname" required />
                </div>
              </div>
            </div>
            <div className="row">
              {/* <div className="col-md-6">
                <div className="form-group required-field">
                  <label htmlFor="acc-name">Country</label>
                  <input type="text" className="form-control" id="acc-name" name="acc-name" required />
                </div>
              </div> */}

              <div className="col-md-6">
                <div className="form-group required-field">
                    <label htmlFor="acc-lastname">State</label>
                    <input type="text" className="form-control" id="acc-lastname" name="acc-lastname" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group required-field">
                    <label htmlFor="acc-lastname">City</label>
                    <input type="text" className="form-control" id="acc-lastname" name="acc-lastname" required />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group required-field">
                    <label htmlFor="acc-lastname">Address</label>
                    <input type="text" className="form-control" id="acc-lastname" name="acc-lastname" required />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={props.onHide} >Save Changes</button>
          </div>
        </form>


        </Modal.Body>

        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}

      </Modal>
    );
  }
 
export default AddressBookModal