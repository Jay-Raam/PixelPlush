import React from "react";
import styles from "./ImageGallery.module.css";
import { ImageFavGallory } from "./Image";

const ImageGallery = () => {
  return (
    <div className={styles.galleryContainer}>
      {ImageFavGallory.map(({ id, imageUrl }) => (
        <div key={id} className={styles.galleryItem}>
          <img
            src={imageUrl}
            alt={`galllery ${id}`}
            className={styles.galleryImage}
            data-aos="zoom-in-down"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
