import React from 'react'
import "./travel.css";
import ListProducts from "./ListProducts";


export const ListOfTopFlightDestinations = ({buttonTitle, buttonLink, image}) => {

    return(
      <React.Fragment>

          <div className="p-0 col-6 col-md-3 p-0" key={"flex-grid"}>
            <div className="skel-pro skel-pro-grid"></div>
            <ListProducts
              buttonTitle={buttonTitle}
              buttonLink={buttonLink}
              imageA={image}
              discount
              addClass="inner-quickview inner-icon pl-3 pr-3"
              product={null}
              key={"flex-grid"}
            />
          </div>
      </React.Fragment>
    )
}