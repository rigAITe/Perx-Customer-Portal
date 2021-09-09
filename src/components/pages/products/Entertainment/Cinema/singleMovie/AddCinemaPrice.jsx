import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const AddCinemaPrice = (props) => {

  const [value, setValue] = useState(1)
  const [subTotal, setSubTotal] = useState(props.data.price)
  const [totalValue, setTotalValue] = useState()
  const [ar, setAr] = useState([])

  const onChange = (e) => {
    setValue({ [e.target.name]: e.target.value })
  }

  const add = () => {
    setSubTotal(props.data.price * (value + 1))
    setValue(value + 1)
  }

  const subtract = () => {
    setSubTotal(props.data.price * (value - 1))
    setValue(value - 1)
  }

  useEffect(() => {
    setTotalValue(subTotal)
    setAr([...ar, totalValue])

  }, [subTotal])

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const redeem = (x) => {
    console.log(x)
  }

  const data = {
    signature: props.data.signature,
    points: subTotal,
    quantity: value,
    type: props.data.type
  }

  return (
    <tr onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
      <td>{props.data.type}</td>
      <td>
        <div>
          {props.data.price}
          <span class="ruby-tag"> {props.data.point_name}</span>
        </div>
      </td>
      <td>
        <div className="d-flex">
          <div className={`mt-1 product-single-qty`}>
            <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
              <span className="input-group-btn input-group-prepend">
                <button
                  className="btn btn-outline btn-down-icon bootstrap-touchspin-down"
                  type="button"
                  onClick={subtract}
                  disabled={value == 0 ? true : false}
                ></button>
              </span>
              <input
                className="horizontal-quantity form-control"
                type="number"
                min="1"
                max="5"
                value={value}
                onChange={onChange}
                name={props.data.types}
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
          <span class="ruby-tag"> {props.data.point_name}</span>
        </div>
      </td>
      <td>
        {isHovering ?
          <div className="btn btn-primary" onClick={() => props.toggle(data)}>
            Select
          </div> : ""
        }
      </td>
    </tr>
  )
}

export default AddCinemaPrice

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