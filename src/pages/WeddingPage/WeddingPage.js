import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryWeddingSlides } from "../../components/Slides/Slides";
import "./WeddingPage.scss";
import { Helmet } from "react-helmet";

export const WeddingPage = () => {
  return (
    <>
      <Helmet>
        <title>Wedding Photography</title>
        <meta
          name="description"
          content="Experience creative wedding photography by Nate Paradiso. Let me capture the precious moments of your special day with stunning visual storytelling and timeless elegance."
        />
      </Helmet>
      <p className="wedding-title">weddings</p>
      <Gallery photos={cloudinaryWeddingSlides} layout="columns" />
    </>
  );
};
