import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryCoupleSlides } from "../../components/Slides/Slides";
import "./CouplesPage.scss";
import { Helmet } from "react-helmet";

export const CouplesPage = () => {
  return (
    <>
      <Helmet>
        <title>Couples</title>
        <meta
          name="description"
          content="Explore engagements and couples photography by Nate Paradiso Photography. Witness love, connection, and intimacy beautifully captured in stunning visual media. Book a session to commemorate your special moments together."
        />
      </Helmet>
      <p className="couples-title">couples</p>
      <Gallery photos={cloudinaryCoupleSlides} layout="columns" />
    </>
  );
};
