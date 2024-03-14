import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryPortfolioSlides } from "../../components/Slides/Slides";
import "./AdventurePage.scss";

export const AdventurePage = () => {
  return (
    <main>
      <div className="landing-container">
        <h1 className="landing">
          <span className="landing__start">Crafting </span>Immersive{" "}
          <p>
            content Through <span className="landing__middle">visual </span>
            media.
          </p>
        </h1>
      </div>
      <Gallery photos={cloudinaryPortfolioSlides} layout="columns" />
    </main>
  );
};
