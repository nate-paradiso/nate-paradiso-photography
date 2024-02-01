import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryPortfolioSlides } from "../../components/Slides/Slides";

export const NaturePage = () => {
  return (
    <>
      <Gallery photos={cloudinaryPortfolioSlides} layout="columns" />
    </>
  );
};
