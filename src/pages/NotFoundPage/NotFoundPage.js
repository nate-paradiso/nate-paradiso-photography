import fourOFour from "../../assets/images/404.png";
import "./NotFoundPage.scss";
export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <img className="not-found__image" src={fourOFour} alt="" />
      <h3>page not found</h3>
    </div>
  );
};
