import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryRealEstateSlides } from "../../components/Slides/Slides";
import "./RealEstatePage.scss";

export const RealEstatePage = () => {
  return (
    <>
      <Gallery photos={cloudinaryRealEstateSlides} layout="rows" targetRowHeight="400" />
    </>
  );
};
