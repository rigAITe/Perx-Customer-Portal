import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const AddRow = (props) => {

  const [value, setValue] = useState(1)
  const [subTotal, setSubTotal] = useState(props.price)
  const [totalValue, setTotalValue] = useState()
  const [ar, setAr] = useState([])

  const onChange = (e) => {
    setValue({ [e.target.name]: e.target.value })
  }

  const add = () => {
    setSubTotal(props.price * (value + 1))
    setValue(value + 1)
  }

  const subtract = () => {
    setSubTotal(props.price * (value - 1))
    setValue(value - 1)
  }

  useEffect(() => {
    setTotalValue(subTotal)
    setAr([...ar, totalValue])

  }, [subTotal])
  console.log('Subtotal ', ar)

  return (
    <tr>
      <td>{props.title}</td>
      <td>
        <div>{props.venue}</div>
      </td>
      <td>
        <div>
          {props.price}
          <span class="ruby-tag"> {props.point_name}</span>
        </div>
      </td>
      <td>
        <div className="d-flex">
          <div className={`mt-1 product-single-qty`}>
            <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
              <span className="input-group-btn input-group-prepend">
                {/* {value == 0 ? '' : */}
                <button
                  className="btn btn-outline btn-down-icon bootstrap-touchspin-down"
                  type="button"
                  onClick={subtract}
                  disabled={value == 0 ? true : false}
                ></button>
                {/* } */}
              </span>
              <input
                className="horizontal-quantity form-control"
                type="number"
                min="1"
                max="5"
                value={value}
                onChange={onChange}
                name={props.title}
              />
              <span className="input-group-btn input-group-append">

                <button
                  className="btn btn-outline btn-up-icon bootstrap-touchspin-up"
                  type="button"
                  onClick={add}
                ></button>
              </span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          {subTotal}
          <span class="ruby-tag"> {props.point_name}</span>
        </div>
        <div className="btn-quickview" title="View Branches">
          Redeem
        </div>
      </td>
    </tr>
  )
}

export default AddRow

{/* <figure> */ }
{/* <Link to={`${process.env.PUBLIC_URL}/products/default`}> */ }
{/* <span>
              <img src={imageA} className="first-image" alt="product" />
            </span>
            <span className="product-image-hover">
              <img src={silverbird} className="last-image" alt="product" />
            </span> */}
{/* </Link> */ }
{/* <Link to={{pathname:"/pages/entertainment/cinema/single/1", query: {
            data: props.data,
            cinema: props.name
          }}} className="btn-quickview" title="View Branches">
            {buttonTitle}
          </Link>
        </figure> */}