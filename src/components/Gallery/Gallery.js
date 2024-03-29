import React, { useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Gallery.scss";

export const Gallery = ({ photos, layout, targetRowHeight, columns, margin }) => {
  const [index, setIndex] = useState(-1);

  const handlePhotoClick = ({ index: currentIndex }) => {
    setIndex(currentIndex);
  };

  // Specify the correct layout in the configuration object

  return (
    <>
      <PhotoAlbum
        layout={layout} // Specify the correct layout here
        photos={photos}
        targetRowHeight={targetRowHeight}
        onClick={handlePhotoClick}
        columns={columns}
        margin={margin}
      />

      <Lightbox index={index} slides={photos} open={index >= 0} close={() => setIndex(-1)} />
    </>
  );
};
