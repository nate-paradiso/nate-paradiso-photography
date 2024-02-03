import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryStillLifeSlides } from "../../components/Slides/Slides";

export const StillLifePage = () => {
  return (
    <>
      <Gallery photos={cloudinaryStillLifeSlides} layout="columns" columns="2" margin="31.25rem" />
    </>
  );
};
