import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import { Magnifier } from "react-image-magnifiers";

import Carousel from "../../../../../../src/components/features/carousel.jsx";
import dstv from "./../assets/company-logos/dstv.svg";

function HorizontalThumbnail(props) {
  const [photoIndex, setPindex] = useState(0);
  const [open, setOpen] = useState(false);
  const { addClass = "", product } = props;
  console.log(product);
  const images = product.image;
  const openLightBox = () => {
    let productCarousel = document.querySelector(".product-single-carousel");
    let productItem = productCarousel.querySelector(".active");
    let index = productItem.querySelector(".image-item").getAttribute("index");

    if (!index) {
      index = 0;
    }

    setOpen(true);
    setPindex(index);
  };

  const moveToPrev = () => {
    if (images.length !== 1) {
      setPindex((photoIndex + images.length - 1) % images.length);
    }
  };

  const moveToNext = () => {
    if (images.length !== 1) {
      setPindex((photoIndex + 1) % images.length);
    }
  };

  return (
    <div className={`product-single-gallery ${addClass}`}>
      <div className="skel-pro skel-magnifier"></div>
      <div className="product-slider-container product-item">
        <Carousel addClass="product-single-carousel">
          {product.image
            ? product.image.map((imageSource, index) => (
                <div
                  className="product-item image-item active"
                  key={"mag-image" + index}
                  index={index}
                >
                  <Magnifier
                    imageSrc={dstv}
                    imageAlt="product"
                    mouseActivation="hover"
                    cursorStyleActive="crosshair"
                    dragToMove={false}
                    className="product-single-image"
                  />
                </div>
              ))
            : ""}
        </Carousel>

        <span className="prod-full-screen" onClick={openLightBox}>
          <i className="icon-plus"></i>
        </span>
      </div>

      <div className="prod-thumbnail row owl-dots" id="carousel-quick-dots">
        {product.image
          ? product.image.map((imageSource, index) => (
              <div
                className="col-3 p-0 owl-dot active"
                key={"prod-nav" + index}
              >
                <img src={dstv} alt="product" />
              </div>
            ))
          : ""}
      </div>

      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={moveToPrev}
          onMoveNextRequest={moveToNext}
        />
      )}
    </div>
  );
}

export default HorizontalThumbnail;
