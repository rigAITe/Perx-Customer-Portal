import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "../../../../src/components/pages/others/cart/cart.css";
import playstation from "../../../../src/components/pages/products/Shop/assets/playstation.svg";

Modal.setAppElement("#root");

function RemoveCartItem(props) {
  const { addClass = "header-icon", hidemodal } = props;
  const [open, setOpen] = useState(true);

  const customStyles = {
    content: {
      width: "100%",
      top: "60%",
      left: "65%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const closeModal = () => {
    hidemodal();
    setOpen(false);
  };

  return (
    <>
      <Link
        to="#"
        className={`login-link ${addClass}`}
        onClick={openModal}
        title="Login"
      >
        <i className="icon-user-2"></i>
      </Link>
      <Modal
        isOpen={open}
        contentLabel="addCartModal"
        className="add-cart-modal modal"
        id="addCartModal"
        shouldFocusAfterRender={false}
        portalClassName="ReactModalPortal add-to-cart-portal"
        overlayClassName="cart-modal-overlay"
        style={customStyles}
      >
        <div className="modal-dialog modal-lg remove-cart" role="document">
          <div className="modal-content cart-modal-content">
            <div className="modal-body p-5">
              <button
                title="Close (Esc)"
                type="button"
                className="btn btn-danger float-right"
                onClick={closeModal}
              >
                close
              </button>
              <div className="">
                <h4>Items will be removed</h4>
                <table className="table table-order table-wishlist">
                  <thead>
                    <tr>
                      <th className="product-col">Status</th>
                      <th className="price-col">Image</th>
                      <th className="qty-col">Item Name</th>
                      <th>Quantity</th>
                      <th>New Item Price</th>
                      <th>Old Item Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <React.Fragment key={"CartItem" + "index"}>
                      <tr className="product-row">
                        <td>
                          <Link
                            to={`${process.env.PUBLIC_URL}/categories/full-width`}
                            style={{ width: "180px" }}
                            className="btn btn-outline-danger"
                          >
                            Item out of Stock
                          </Link>
                        </td>
                        <td className="product-col">
                          <figure className="product-image-container">
                            <Link
                              to={`${process.env.PUBLIC_URL}/product/default`}
                              className="product-image"
                            >
                              <img src={playstation} alt="product" />
                            </Link>
                          </figure>
                        </td>
                        <td>
                          Nike Air Jordan 13 XIII Retro Low Clot Sepia Size 13
                        </td>
                        <td>5</td>
                        <td>10,500 Rubies</td>
                        <td>10,500 Rubies</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            style={{ width: "140px" }}
                          >
                            Keep In Cart
                          </button>
                        </td>
                      </tr>
                      <tr className="product-row striped-row">
                        <td>
                          <Link
                            to={`${process.env.PUBLIC_URL}/categories/full-width`}
                            style={{ width: "180px" }}
                            className="btn btn-outline-primary"
                          >
                            Item price change
                          </Link>
                        </td>
                        <td className="product-col">
                          <figure className="product-image-container">
                            <Link
                              to={`${process.env.PUBLIC_URL}/product/default`}
                              className="product-image"
                            >
                              <img src={playstation} alt="product" />
                            </Link>
                          </figure>
                        </td>
                        <td>
                          Nike Air Jordan 13 XIII Retro Low Clot Sepia Size 13
                        </td>
                        <td>5</td>
                        <td>10,500 Rubies</td>
                        <td>10,500 Rubies</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            style={{ width: "140px" }}
                          >
                            Keep In Cart
                          </button>
                        </td>
                      </tr>
                      <tr className="product-row">
                        <td>
                          <Link
                            to={`${process.env.PUBLIC_URL}/categories/full-width`}
                            style={{ width: "180px" }}
                            className="btn btn-outline-danger"
                          >
                            Item out of Stock
                          </Link>
                        </td>
                        <td className="product-col">
                          <figure className="product-image-container">
                            <Link
                              to={`${process.env.PUBLIC_URL}/product/default`}
                              className="product-image"
                            >
                              <img src={playstation} alt="product" />
                            </Link>
                          </figure>
                        </td>
                        <td>
                          Nike Air Jordan 13 XIII Retro Low Clot Sepia Size 13
                        </td>
                        <td>5</td>
                        <td>10,500 Rubies</td>
                        <td>10,500 Rubies</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            style={{ width: "140px" }}
                          >
                            Keep In Cart
                          </button>
                        </td>
                      </tr>
                      <tr className="product-row striped-row">
                        <td>
                          <Link
                            to={`${process.env.PUBLIC_URL}/categories/full-width`}
                            style={{ width: "180px" }}
                            className="btn btn-outline-primary"
                          >
                            Item price change
                          </Link>
                        </td>
                        <td className="product-col">
                          <figure className="product-image-container">
                            <Link
                              to={`${process.env.PUBLIC_URL}/product/default`}
                              className="product-image"
                            >
                              <img src={playstation} alt="product" />
                            </Link>
                          </figure>
                        </td>
                        <td>
                          Nike Air Jordan 13 XIII Retro Low Clot Sepia Size 13
                        </td>
                        <td>5</td>
                        <td>10,500 Rubies</td>
                        <td>10,500 Rubies</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            style={{ width: "140px" }}
                          >
                            Keep In Cart
                          </button>
                        </td>
                      </tr>
                    </React.Fragment>
                  </tbody>

                  <tfoot>
                    <tr>
                      <td colSpan="7" className="clearfix text-center">
                        <div className="">
                          <Link
                            to={`${process.env.PUBLIC_URL}/categories/full-width`}
                            className="w-50 btn btn-primary"
                          >
                            Done
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default RemoveCartItem;
