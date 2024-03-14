import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryWeddingSlides } from "../../components/Slides/Slides";
import "./WeddingPage.scss";

export const WeddingPage = () => {
  return (
    <>
      <p className="wedding-title">weddings</p>
      <Gallery photos={cloudinaryWeddingSlides} layout="columns" />
    </>
  );
};
