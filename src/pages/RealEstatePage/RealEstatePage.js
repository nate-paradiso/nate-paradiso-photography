import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryRealEstateSlides } from "../../components/Slides/Slides";
import "./RealEstatePage.scss";
import { Helmet } from "react-helmet";

export const RealEstatePage = () => {
  return (
    <>
      <Helmet>
        <title>Real Estate</title>
        <meta
          name="description"
          content="Showcase properties, interiors, and architectural details. Elevate your listings with professional photography services."
        />
      </Helmet>
      <p className="realestate-title">real estate</p>
      <Gallery photos={cloudinaryRealEstateSlides} layout="rows" targetRowHeight="400" />
    </>
  );
};
