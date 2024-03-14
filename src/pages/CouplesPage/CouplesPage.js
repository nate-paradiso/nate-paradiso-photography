import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryCoupleSlides } from "../../components/Slides/Slides";
import "./CouplesPage.scss";

export const CouplesPage = () => {
  return (
    <>
      <p className="couples-title">couples</p>
      <Gallery photos={cloudinaryCoupleSlides} layout="columns" />
    </>
  );
};
