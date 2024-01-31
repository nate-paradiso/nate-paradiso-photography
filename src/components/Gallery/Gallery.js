import React, { useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Gallery.scss";

export const Gallery = ({ photos }) => {
  const [index, setIndex] = useState(-1);

  const handlePhotoClick = ({ index: currentIndex }) => {
    console.log("Clicked Index:", currentIndex);
    console.log("Slides:", photos);
    setIndex(currentIndex);
  };

  // Specify the correct layout in the configuration object
  const layoutConfig = {
    columns: {
      targetColumnHeight: 300, // Adjust the height of each row (each image in a column)
    },
  };

  return (
    <>
      <PhotoAlbum
        layout="columns" // Specify the correct layout here
        photos={photos}
        targetRowHeight={150}
        onClick={handlePhotoClick}
        {...layoutConfig["columns"]}
      />

      <Lightbox index={index} slides={photos} open={index >= 0} close={() => setIndex(-1)} />
    </>
  );
};
