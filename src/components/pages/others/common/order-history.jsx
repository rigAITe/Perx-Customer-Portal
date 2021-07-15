import React from 'react';
import { Link } from 'react-router-dom';
import './board.css'
import { Table } from 'reactstrap';


function OrderHistory() {
  return (
    <div className="col-lg-12">
      {/* <div className="col-lg-12"> */}
        <div className="card cap-table">
          <div className="card-bodie">
            <h5>Order History</h5>
            
            <div style={{marginTop: '4rem'}}>
              <Table responsive>
                <thead>
                  <tr className="statement-head" style={{fontSize: '1rem'}}>
                    <th>Date</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Order <br></br>No</th>
                    <th>Voucher <br></br>No</th>
                    <th>Delivery <br></br>Type</th>
                    <th>Pick Up<br></br> Location</th>
                    <th>Delivery <br></br>Location</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody >
                  <tr >
                    <td scope="row">2019-11-8 <br></br>/10:29:11</td>
                    <td>45656</td>
                    <td> <Link>Luxury Fashion <br></br> bag of 2021</Link></td>
                    <td>555,000</td>
                    <td>198,490</td>
                    <td>47123</td>
                    <td>456789102</td>
                    <td>Delivery</td>
                    <td>None</td>
                    <td>Lekki</td>
                    <td className="completed">Completed</td>
                  </tr>
                </tbody>
              </Table>
            </div>

          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default React.memo( OrderHistory );