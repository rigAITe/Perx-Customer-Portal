import React from 'react'

const AddRow = (props) => {
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
                <button
                  className="btn btn-outline btn-down-icon bootstrap-touchspin-down"
                  type="button"
                ></button>
              </span>
              <input
                className="horizontal-quantity form-control"
                type="number"
                min="1"
                max="5"
                // value={props.value}
                onChange={props.onChange}
                name={props.title}
              />
              <span className="input-group-btn input-group-append">
                <button
                  className="btn btn-outline btn-up-icon bootstrap-touchspin-up"
                  type="button"
                ></button>
              </span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          10,500
          <span class="ruby-tag"> {props.point_name}</span>
        </div>
      </td>
    </tr>
  )
}

export default AddRow
