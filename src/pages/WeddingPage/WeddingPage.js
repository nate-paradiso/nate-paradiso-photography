import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryWeddingSlides } from "../../components/Slides/Slides";

export const Wedding = () => {
  return (
    <>
      <Gallery photos={cloudinaryWeddingSlides} />
    </>
  );
};
