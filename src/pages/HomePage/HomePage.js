import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryPortfolioSlides } from "../../components/Slides/Slides";

export const HomePage = () => {
  return (
    <>
      <Gallery photos={cloudinaryPortfolioSlides} />
    </>
  );
};
