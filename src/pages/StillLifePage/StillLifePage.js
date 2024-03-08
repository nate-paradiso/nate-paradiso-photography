import { Gallery } from "../../components/Gallery/Gallery";
import { cloudinaryStillLifeSlides } from "../../components/Slides/Slides";
import "./StillLifePage.scss";

export const StillLifePage = () => {
  return (
    // <div className="still-life">
    //   <img
    //     className="still-life__img"
    //     src="https://res.cloudinary.com/hzjhihahh/image/upload/v1706940277/portfolio-nate-paradiso-photography/tyzjtcvqbv0gjbp9c1bn.jpg"
    //     alt="Milk n Cookies"
    //   />
    //   <img
    //     className="still-life__img"
    //     src="https://res.cloudinary.com/hzjhihahh/image/upload/v1709921307/portfolio-nate-paradiso-photography/rr3rx9hbgrs01ngonjz1.jpg"
    //     alt="Milk n Cookies 2"
    //   />
    // </div>
    <div className="still-life">
      <Gallery photos={cloudinaryStillLifeSlides} layout="columns" columns="2" margin="31.25rem" />
    </div>
  );
};
