import React, { useState, useEffect } from "react";
import ThumbnailItem from "./thumbnail-item.component";
import { useDispatch } from "react-redux";
import { toggleOverlay } from "./../redux/actions/overlay.actions";
import { toggleLightBox } from "./../redux/actions/light-box.actions";
import LightBox from "./light-box.component";

const Preview = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bigImage, setBigImage] = useState(images[currentImageIndex]);
  const dispatch = useDispatch();

  useEffect(() => {
    setBigImage(images[currentImageIndex]);
  }, [currentImageIndex]);

  const handleOnViewImage = (imageUrl, index) => {
    setCurrentImageIndex(index);
  };

  const handleShowNextImage = () => {
    setCurrentImageIndex((currentIndex) => {
      if (++currentIndex == images.length) return 0;
      return currentIndex;
    });
  };

  const handleShowPreviousImage = () => {
    setCurrentImageIndex((currentIndex) => {
      if (--currentIndex == -1) return images.length - 1;
      return currentIndex;
    });
  };

  const handleOpenLightBox = () => {
    dispatch(toggleOverlay(true, 7));
    dispatch(toggleLightBox(true));
  };

  const handleCloseLightBox = () => {
    dispatch(toggleOverlay(false));
    dispatch(toggleLightBox(false));
  };

  return (
    <React.Fragment>
      <LightBox images={images} onCloseLightBox={handleCloseLightBox} />
      <div className="preview">
        <div className="preview__container">
          <div className="preview__img-box">
            <img
              src={require(`./../../${bigImage}`)}
              alt="Sneakers"
              className="preview__img"
              onClick={handleOpenLightBox}
            />
            <div className="preview__controls">
              <div className="preview__controls-box">
                <button
                  className="btn preview__controls-btn preview__controls-btn--previous"
                  onClick={handleShowPreviousImage}
                >
                  <img
                    src={require("./../../public/images/icon-previous.svg")}
                    alt="Previous"
                  />
                </button>
                <button
                  type="button"
                  className="btn preview__controls-btn preview__controls-btn--next"
                  onClick={handleShowNextImage}
                >
                  <img
                    src={require("./../../public/images/icon-next.svg")}
                    alt="Next"
                  />
                </button>
              </div>
            </div>
          </div>

          <ul className="preview__thumbnails">
            {images.map((imageUrl, i) => {
              const isSelected = bigImage == imageUrl;
              return (
                <ThumbnailItem
                  onViewImage={() => handleOnViewImage(imageUrl, i)}
                  key={i}
                  isSelected={isSelected}
                  imageUrl={imageUrl.replace(".jgp", "-thumbnail.jpg")}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Preview;
