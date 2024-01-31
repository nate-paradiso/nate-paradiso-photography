import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryPortfolioSlides } from "../../components/Slides/Slides";

export const Nature = () => {
  return (
    <>
      <Gallery photos={cloudinaryPortfolioSlides} />
    </>
  );
};
