import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryPortfolioSlides } from "../../components/Slides/Slides";
import "./AdventurePage.scss";
import { Helmet } from "react-helmet";

export const AdventurePage = () => {
  return (
    <>
      <Helmet>
        <title>Adventure</title>
        <meta
          name="description"
          content="Explore images of underwater scenes, nature landscapes, travel destinations, fly fishing, wildlife encounters, free diving adventures, and captivating nightscape views captured by Nate Paradiso Photography."
        />
      </Helmet>

      <main>
        <div className="landing-container">
          <h1 className="landing">
            <span className="landing__start">Crafting </span>Immersive
            <p>
              content Through <span className="landing__middle">visual </span>
              media.
            </p>
          </h1>
        </div>
        <Gallery photos={cloudinaryPortfolioSlides} layout="columns" />
      </main>
    </>
  );
};
