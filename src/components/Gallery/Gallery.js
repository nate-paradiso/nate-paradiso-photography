import React from "react";
import { Gallery } from "react-grid-gallery";
import "./Gallery.scss";

export const MyGallery = () => {
  const images = [
    {
      src: "https://res.cloudinary.com/hzjhihahh/image/upload/v1706222674/portfolio-nate-paradiso-photography/rl4jbg7pxtjrmistqwfs.jpg",
      width: 600,
      height: 441,
      className: "img",
    },
    {
      src: "https://res.cloudinary.com/hzjhihahh/image/upload/v1706222674/portfolio-nate-paradiso-photography/rl4jbg7pxtjrmistqwfs.jpg",
      width: 600,
      height: 441,
    },
    {
      src: "https://res.cloudinary.com/hzjhihahh/image/upload/v1706222670/portfolio-nate-paradiso-photography/urezb0tgmqmnsx8lh25c.jpg",
      height: 1200,
      width: 882,
    },
  ];

  const galleryOptions = {
    images,
    margin: 10,
  };

  return (
    <div className="gallery">
      <Gallery images={images} {...galleryOptions} />
    </div>
  );
};
