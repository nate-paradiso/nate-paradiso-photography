import fourOFour from "../../assets/images/404.png";
import "./NotFoundPage.scss";
import { Helmet } from "react-helmet";

export const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="Oops! The page you are looking for could not be found. Explore Nate Paradiso Photography's website for more captivating content."
        />
      </Helmet>
      <div className="not-found">
        <img className="not-found__image" src={fourOFour} alt="" />
        <h3>page not found</h3>
      </div>
    </>
  );
};
