import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryCoupleSlides } from "../../components/Slides/Slides";

export const CouplesPage = () => {
  return (
    <>
      <Gallery photos={cloudinaryCoupleSlides} layout="columns" />
    </>
  );
};
