import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import './board.css'
import ProgressBar from "@ramonak/react-progress-bar";
import axios from 'axios'


function TierStatus() {

  const [ data, setData ] = useState({})
  const [ benefits, setBenefits ] = useState([])
  const [ tiername, setTiername ] = useState('')


  useEffect(() => {
    axios.get(`user/tier`)
    .then( res => {
      setData(res.data.data)
      setBenefits(res.data.data.tier_benefits)
      setTiername(res.data.data.tier_name)
    })
    
  }, [])


  let upgrade = data.upgrade_value
  let member_upgrade_value = data.member_upgrade_value
  let firstTwoLetters = tiername.slice(0, 2).toUpperCase()

  let Lpercentage = (member_upgrade_value / upgrade ) * 100

  const percentageF = () => {
    if( parseInt(member_upgrade_value ) > parseInt(upgrade) ){
      return parseInt(100)
    } else {
      return parseInt(Lpercentage)
    }
  }

  let stage = percentageF()
  console.log('stage is ',percentageF())


  
  return (
    <div className="col-12 col-lg-16 col-md-12 board">
      <div className="col-lg-12">
        <div className="card cap-table">
          <div className="card-bodie">
            <h5>Tier Information</h5>

            <div className=" col-lg-12 col-md-12 tier-inner " >
              <div className="tier-inner-1 justify-content-between" >
                <div className="dash-info">
                  <div className="dash-image">
                          <h4 className="dash-name" style={{backgroundColor: data.tier_color, color: "#fff"}}> {firstTwoLetters}</h4>
                        </div>
                  <div className="dash-contact" style={{width: '70%'}}>
                    <h5>{data.upgrade_text}</h5>
                  </div>
                </div>
                <div>
                  <div>
                    <img src="/assets/images/demo/logo.svg" alt="" />
                  </div>
                </div>
              </div>
              <div style={{paddingTop: '10px'}}>
                <div className="next-tier">Next Tier: <span style={{color: '#fff'}}>{data.next_tier_name}</span></div>
                { isNaN(upgrade) ? '' : <ProgressBar completed={ stage } bgColor={data.next_tier_color} baseBgColor="#4f4fb8"/>}
                <div className="tier-bottom">
                  <div>
                    CURRENT TIER: <br></br>
                  <span>{data.tier_name}</span>
                  </div>
                  <div>
                    Upgrade name: <br></br>
                    <span className="upgrade">{data.upgrade_name}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row" style={{marginTop:" 2rem"}}>
              <div className="col-12 col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-header"> 
                    CURRENT TIER BENEFITS
                  </div>

                  <div className="card-body tier-list">
                    <ul>
                      {benefits.map(res => 
                          <li>{res}</li>
                        )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo( TierStatus );