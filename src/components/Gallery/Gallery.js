import React, { useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const Gallery = ({ photos }) => {
  const [index, setIndex] = useState(-1);

  const handlePhotoClick = ({ index: currentIndex }) => {
    console.log("Clicked Index:", currentIndex);
    console.log("Slides:", photos);
    setIndex(currentIndex);
  };
  //height of thumbnails
  const layoutConfig = {
    rows: {
      targetRowHeight: 200, // Adjust the height of each row
    },
  };
  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={150}
        onClick={handlePhotoClick}
        className="gallery"
        {...layoutConfig["rows"]}
      />

      <Lightbox index={index} slides={photos} open={index >= 0} close={() => setIndex(-1)} />
    </>
  );
};
