import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryStillLifeSlides } from "../../components/Slides/Slides";
import "./StillLifePage.scss";

export const StillLifePage = () => {
  return (
    <div className="still-life">
      <Gallery photos={cloudinaryStillLifeSlides} layout="columns" columns="2" margin="31.25rem" />
    </div>
  );
};
