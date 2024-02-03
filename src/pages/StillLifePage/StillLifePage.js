// import { Gallery } from "../../components/Gallery/Gallery";
// import { cloudinaryStillLifeSlides } from "../../components/Slides/Slides";
import "./StillLifePage.scss";

export const StillLifePage = () => {
  return (
    <div className="still-life">
      <img
        className="still-life__img"
        src="https://res.cloudinary.com/hzjhihahh/image/upload/v1706940277/portfolio-nate-paradiso-photography/tyzjtcvqbv0gjbp9c1bn.jpg"
        alt="Milk n Cookies"
      />
      {/* <Gallery photos={cloudinaryStillLifeSlides} layout="columns" columns="1" margin="31.25rem" /> */}
    </div>
  );
};
