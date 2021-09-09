import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { findIndex, getPrice } from '../../../../../../../src/utils/index.js'
import LoaderContext from '../../../../../../context/Loading.js'
import Loading from '../../../../../features/Loader/Loading.jsx'
import {
  isStateHandled,
  formatNumber,
} from '../../../../../../../src/utils/index.js'
import swal from 'sweetalert'
import SuccessfulBidModal from '../../../../../common/modals/SuccessfulBidModal.jsx'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './singleMovie.css'
import SingleDetailTime from './single-detail-time.jsx'
import AddCinemePrice from './AddCinemaPrice'
import UserDetailCinema from './UserDetailCinema'

function SingleDetail(props) {
  const { toggleLoading } = useContext(LoaderContext)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const { wishlist, product, isSticky = false, auction, auction_bid } = props
  let isInWishlist = findIndex(wishlist, product.id) ? true : false
  let maxPrice,
    minPrice = 0

  if (product.variants) {
    maxPrice = getPrice(product.variants)
    minPrice = getPrice(product.variants, 'min')
  }

  const selectGroup = (e) => {
    e.preventDefault()
    if (props.noSelect === undefined)
      document
        .querySelector('.product-single-gallery .owl-item.active img')
        .setAttribute('src', e.currentTarget.getAttribute('data-src'))

    e.currentTarget.parentElement.parentElement.querySelector('.active') &&
      e.currentTarget.parentElement.parentElement
        .querySelector('.active')
        .classList.remove('active')
    e.currentTarget.parentElement &&
      e.currentTarget.parentElement.classList.add('active')
  }

  function addToCart(e) {
    e.preventDefault()
    let val = 1
    if (e.currentTarget.parentElement.querySelector('.horizontal-quantity'))
      val = parseInt(
        e.currentTarget.parentElement
          .querySelector('.horizontal-quantity')
          .getAttribute('value')
      )
    props.quickAddToCart(props.product, val)
  }

  function onWithWishClick(e) {
    if (!isInWishlist) {
      e.preventDefault()
      props.addToWishList(props.product)
    }
  }

  const [title, setTitle] = useState('')
  const [data, setData] = useState([])
  const [dates, setDates] = useState([])
  const [modal, setModal] = useState(false)

  console.log('MAJOR DATA ', props.data)
  // console.lo

  useEffect(() => {
    toggleLoading(true)
    axios
      .get(`catalogue/cinema/movie/${props.data.data.movie_id}`)
      .then((res) => {
        toggleLoading(false)
        setTitle(props.data.data.title)
        setData(res.data.data)
      })
      .catch((err) => {
        toggleLoading(false)
        swal({
          title: 'Oops!',
          text: err.response.data.message,
          icon: 'error',
          button: 'Ok',
        })
      })
  }, [])

  const [cinemaPricing, setCinemaPricing] = useState([])
  const [info, setInfo] = useState()
  const [time, setTime] = useState()
  const [showSuccess, setShowSuccess] = useState(false)

  const pricing = (x, y) => {
    setCinemaPricing(x)
    setTime(y)
  }

  const toggle = (x) => {
    setModal(!modal)
    setInfo(x)
  }

  return (
    <>
      <div className='skel-pro skel-detail'></div>
      <div className='product-single-details'>
        <div className='col-md-8 row less-margin'>
          <h4>{title}</h4>
        </div>
        <div className='black-text bold'>Show time</div>

        {data.map((res) => (
          <SingleDetailTime data={res} pricing={pricing} />
        ))}
        <h5 className='mt-3'>Tickets</h5>
        <div className='p-0 col-lg-12'>
          <div className='wishlist-table-container'>
            <table className='table table-order table-wishlist'>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cinemaPricing == undefined
                  ? ''
                  : cinemaPricing.map((res) => (
                      <AddCinemePrice data={res} toggle={toggle} />
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <Modal isOpen={modal} toggle={toggle} contentClassName='address-modal'>
          <ModalHeader toggle={toggle} charCode='x'>
            User Information
          </ModalHeader>
          <ModalBody>
            <UserDetailCinema
              info={info}
              time={time}
              cinema={props.data.cinema}
              setModal={setModal}
              setShowSuccess={setShowSuccess}
            />
          </ModalBody>
        </Modal>
      </div>
      {showSuccessModal ? (
        <SuccessfulBidModal
          // amount={inputs.amount}
          messageTitle='Bid Submitted Successully'
          messageBody='Your bid has been submitted'
        />
      ) : (
        ''
      )}
    </>
  )
}

export default SingleDetail
