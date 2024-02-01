import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryWeddingSlides } from "../../components/Slides/Slides";

export const WeddingPage = () => {
  return (
    <>
      <Gallery photos={cloudinaryWeddingSlides} layout="columns" />
    </>
  );
};
