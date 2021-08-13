import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AddressBookModalForm } from './addressBModalForm';
import Pagination from "react-js-pagination";
import infoIcon from './assets/infoIcon.svg'
import axios from 'axios'
import StatementComp from './statementComp';
import './saved-address.css'
import './board.css'
import Flatpickr from "react-flatpickr";


function Statement(props) {

  const [ newData, setNewData ] = useState()
  const [ start, startChange ] = useState( )
  const [ end, endChange ] = useState( )

  let event = new Date(start);
  event.setMinutes(event.getMinutes()-event.getTimezoneOffset())
  let startDate = JSON.stringify(event)
  startDate = startDate.slice(1,11)

  let events = new Date(end);
  events.setMinutes(events.getMinutes()-events.getTimezoneOffset())
  let endDate = JSON.stringify(events)
  endDate = endDate.slice(1,11)

  // console.log('DATE ', startDate)
  // console.log('DATE ', endDate)

  const getData = (pageNumber = 1) => {
    const url = `user/statement?page=${pageNumber}`
    axios.post(url)
      .then(res => setNewData(res.data.data))
  }

  const dateSearch = (pageNumber = 1) => {
    
    const data = {
      start_date: startDate,
      end_date: endDate
    }

    const url = `user/statement?page=${pageNumber}`
    axios.post(url, data)
      .then(res => setNewData(res.data.data))
  }

  useEffect(() => {
    getData()
  }, [])

  const renderRow = () => {
    
    const {data, current_page, per_page, total } = newData

    return (
      <React.Fragment>
        {data.map( (item) => {
          return(
            <tr key={item.id}>
              <th scope="row">{item.created_at}</th>
              <td>{item.tran_ref}</td>
              <td>{item.remarks}</td>
              <td>{item.amount_in}</td>
              <td>{item.amount_out}</td>
              <td>{item.balance}</td>
            </tr>
          )
        })}
        <div style={{paddingTop: '20px'}}>
          <Pagination 
            activePage={current_page}
            totalItemsCount={total}
            itemsCountPerPage={per_page}
            onChange={(pageNumber) => getData(pageNumber)}
            itemClass="page-item"
            linkClass="page-link"
            firstPageText="First"
            lastPageText="Last"
          />
        </div>
      </React.Fragment>
    )
  }

  // Get current post

  // const paginate = pageNumber => setCurrentPage(pageNumber)

  // const toggle = () => setModal(!modal);


  return (
    <div className="col-12 col-lg-16 col-md-12 board">
      <div className="col-lg-12">
        <div className="card cap-table">
          <div className="card-bodie" style={{marginBottom: 0}}>
            <h5 style={{marginBottom: 0}}>Statement</h5>
            
          </div>
          {/* <form style={{marginBottom: 0}} onSubmit={dateSearch}> */}
              <div className="card-bodie">
                <div  className="row">
                  <div className="col-md-4">
                    <div className="form-group required-field">
                      <label htmlFor="acc-name">Start Date</label>
                      <Flatpickr
                        value={start}
                        onChange={startChange} 
                      />
                      {/* <input type="text" className="form-control" id="acc-name" name="acc-name" required /> */}
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group required-field">
                        <label htmlFor="acc-lastname">End Date</label>
                        <Flatpickr
                        value={end}
                        onChange={endChange} 
                      />
                        {/* <input type="text" className="form-control" id="acc-lastname" name="acc-lastname" required /> */}
                    </div>
                  </div>
                  <div className="col-md-4" style={{ display: 'flex', alignItems: 'center'}}>
                    <div>
                      <div style={{paddingBottom: '2.5rem'}}></div>
                      <button type="submit" className="btn btn-primary" onClick={dateSearch}>Search</button>
                    </div>
                  </div>
                </div>


                <div style={{marginTop: '4rem'}}>
                <Table responsive>
                  <thead>
                    <tr className="statement-head">
                      <th>Date</th>
                      <th>Transaction No</th>
                      <th>Description</th>
                      <th>Credit</th>
                      <th>Debit</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    { newData && renderRow()}
                  </tbody>
                </Table>
                  
                </div>
                
              </div>
            {/* </form> */}
        </div>
      </div>
      {/* <>
        <div>
          <Modal isOpen={modal} toggle={toggle} contentClassName="address-modal">
            <ModalHeader toggle={toggle} charCode="x">Order receipt</ModalHeader>
            <ModalBody>

              <div className="statement">
                <div className="col-lg-8" >
                  <Table responsive>
                    <thead>
                      <tr className="statement-head">
                        <th>Image</th>
                        <th>Redemption Type </th>
                        <th>Price Unit</th>
                        <th>Qty</th>
                        <th>Price Total</th>
                        <th>Status</th>
                        <th>Voucher No</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" style={{ fontWeight: 400}}>
                          <span style={{color: '#003cad'}}>Premium Spandex Cotton Trttle Neck</span><br></br>
                          <span style={{color: '#000'}}>Colour: Red / Size M13.5</span>
                        </th>
                        <td>Delivery</td>
                        <td>10,500 <span style={{color: '#003cad'}}>Rubies</span></td>
                        <td>1</td>
                        <td>10,500 <span style={{color: '#003cad'}}>Rubies</span></td>
                        <td>redeemed</td>
                        <td>AU11558HD92849</td>
                      </tr>
                      <tr>
                        <th scope="row" style={{ fontWeight: 400}}>
                        <span style={{color: '#003cad'}}>Premium Spandex Cotton Trttle Neck</span><br></br>
                        <span style={{color: '#000'}}>Colour: Red / Size M13.5</span>
                        </th>
                        <td>
                          Pickup<br></br>
                          (Grand Sqare Victoria Island, No 8 Adetokunbo Ademola victoria Island)
                        </td>
                        <td>10,500 <span style={{color: '#003cad'}}>Rubies</span></td>
                        <td>1</td>
                        <td>10,500 <span style={{color: '#003cad'}}>Rubies</span></td>
                        <td>Cancelled</td>
                        <td>AU11558HD92849</td>
                      </tr>
                      <tr className="statement-head">
                        <th style={{fontWeight: 400}}>
                          <>
                            <span>Order No</span><br></br><br></br>
                            <span style={{marginTop: '2rem'}}>Date:</span>
                          </>
                        </th>
                          <td></td>
                          <td>
                            <span>309586</span><br></br><br></br>
                            <span>Mon, 9 Nov, 2020 / 10:48</span>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="e-voucher">
                    <div style={{width: 40, paddingRight: 10, paddingTop: 3}}> 
                      <img src={infoIcon} alt=""/>
                    </div>
                    <div className="e-vouch">
                      <p>E-vouchers redemption, your item will be available for pickup at your sem]lected location withing the period of 15 days after which your voucher expires</p>
                      <p>Delivery redemptions, your item will be delivered to your addresswithing 15 days period</p>
                      <p>An agent will contact you or unavailabitlity of an item </p>
                      <p>For complaint or enquires please call +234 8123456789 or send an email to connect@companyrewards.com</p>
                    </div>
                  </div>
                </div>  
                <div className="col-lg-4">
                  <div className=" row" className="delivery">
                    <div className="card cap-table">
                      <div className="card-body">
                        <p className= "bold black-text">
                          <small className="bold">Delivery Address</small>
                        </p>
                        <div className="delivery-addr">
                          <p >Delivery address</p>
                          <p>John Doe</p>
                          <p>Grand Sqare Victoria Island, No 8 Adetokunbo Ademola victoria Island</p>
                          <div className="delivery-tdg">
                            <div>Total Cost</div>
                            <div>10,500 Rubies</div>
                          </div>
                          <div className="delivery-tdg">
                            <div>Delivery Cost</div>
                            <div>0 Rubies</div>
                          </div>
                          <div className="delivery-tdg">
                            <div>Grand total</div>
                            <div>10,500 Rubies</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>    

            </ModalBody>
          </Modal>
        </div>
      </> */}
    </div>
  )
}

export default React.memo( Statement );