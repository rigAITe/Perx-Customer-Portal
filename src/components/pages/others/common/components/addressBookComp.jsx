import React, {useState} from 'react'

import bin from '../assets/delete.svg'
import edit from '../assets/edit.svg'
import { nanoid } from 'nanoid'


const AddressBookComponent = ({firstname, lastname, number, address, toggle, addressId, deleteAddress, data}) => {

  console.log('IDDDDDD ', addressId)
  let id = nanoid()
  // console.log('NANO' ,id)
  
    return (
    <>
      <div className="card inner-card" id={addressId}>
        <div className="address-book-h">
            <div className="address-book">
              <p> {firstname} {lastname} - {number} </p> 
              <p> {address} </p>
            </div>
            <div className = "address-book-inner">
              <img src={edit} onClick={() => toggle(data)}/>
              <img src={bin} style={{ paddingLeft: '20px', paddingRight: '20px'}} onClick={() => deleteAddress(addressId)}/>
            </div>
        </div>                  
        </div> 
    </>
  )
}

export default AddressBookComponent


// import React from 'react'
// import bin from '../assets/delete.svg'
// import edit from '../assets/edit.svg'



// const AddressBookComponent = ({name, number, address}) => {
//   return (
//     <>
//       <div className="card inner-card">
//         <div className="address-book-h">
//         <div className="address-book">
//             <p> {name} - {number} </p>
//             <p> {address} </p>
//         </div>
//         <div className = "address-book-inner">
//         <img src={edit} onClick={toggle}/>
//             <img src={bin} style={{ paddingLeft: '20px', paddingRight: '20px'}}/>
//         </div>
//         </div>                  
//     </div> 
//     </>
//   )
// }

// export default AddressBookComponent
