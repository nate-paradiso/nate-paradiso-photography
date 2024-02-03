import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryPortfolioSlides } from "../../components/Slides/Slides";

export const AdventurePage = () => {
  return (
    <>
      <Gallery photos={cloudinaryPortfolioSlides} layout="columns" />
    </>
  );
};
