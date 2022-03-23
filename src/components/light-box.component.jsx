import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ThumbnailItem from "./thumbnail-item.component";
const LightBox = ({ images, onCloseLightBox }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bigImage, setBigImage] = useState(images[currentImageIndex]);
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
  const show = useSelector((state) => state.lightBox.show);

  return (
    <div className={`lightbox ${show ? "lightbox--show" : ""}`}>
      <div className="lightbox__close">
        <img
          src={require("../../public/images/icon-close.svg")}
          alt=""
          className="lightbox__close-icon"
          onClick={onCloseLightBox}
        />
      </div>

      <div className="preview">
        <div className="preview__container">
          <div className="preview__img-box">
            <img
              src={require(`./../../${bigImage}`)}
              alt="Sneakers"
              className="preview__img"
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
    </div>
  );
};

export default LightBox;
