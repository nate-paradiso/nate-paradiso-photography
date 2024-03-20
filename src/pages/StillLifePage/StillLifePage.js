import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryStillLifeSlides } from "../../components/Slides/Slides";
import "./StillLifePage.scss";
import { Helmet } from "react-helmet";

export const StillLifePage = () => {
  return (
    <div className="still-life">
      <Helmet>
        <title>Still Life</title>
        <meta
          name="description"
          content="Discover frozen moments of everyday objects, from milk and cookies to intricate details, crafted to evoke emotion and curiosity."
        />
      </Helmet>
      <p className="still-life__title">still life</p>
      <Gallery photos={cloudinaryStillLifeSlides} layout="columns" columns="2" margin="31.25rem" />
    </div>
  );
};
