import React from "react";

const ThumbnailItem = ({ imageUrl, onViewImage, isSelected }) => {
  return (
    <li className="preview__thumbnails-item" onClick={onViewImage}>
      <img
        src={require(`./../../${imageUrl}`)}
        alt="Sneakers 1"
        className={`preview__thumbnails-img ${
          isSelected ? "preview__thumbnails-img--selected" : ""
        }`}
      />
    </li>
  );
};

export default ThumbnailItem;
