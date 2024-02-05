import "./AboutPage.scss";
import { NavLink } from "react-router-dom";
import evolve from "../../assets/images/evolve.png";
import tongass from "../../assets/images/Screen+Shot+2023-05-06+at+9.09.36+AM.png";
import mod from "../../assets/images/mod.png";

export const AboutPage = () => {
  return (
    <div>
      <div className="about">
        <div className="about__container">
          <p className="about__container--text">
            With over a decade of experience, Nate Paradiso has honed his skills to become a
            distinguished photographer. His photographic journey is driven by passion that
            transforms ordinary moments into extraordinary memories. Specializing in underwater,
            weddings, nature, and beyond. Nate brings a unique and creative perspective to each
            frame.{" "}
          </p>
          <br />
          <br />
          <p className="about__container--text-paragraph">
            With a portfolio spanning assignments for National Geographic in Alaska, published work
            in reputable magazines such as Tail and Microscopy Today, and recognition for capturing
            the celestial beauty of a lunar eclipse in National Geographic's "As the World Turns"
            assignment – featured on major networks like Fox News and CNN – and being published in
            prestigious works like Modernist Pizza books, Nate stands as a celebrated photographer
            with a proven track record.
          </p>
        </div>
        <div>
          <img
            className="about__container--img"
            src="https://res.cloudinary.com/hzjhihahh/image/upload/v1706723776/about/tvmkyhucosvq8n2l5cuy.jpg"
            alt="Nate Paradiso diving"
          />
          <div>
            <NavLink to={"https://kiliii.com/"} target="_blank">
              <p className="about__container--img-link">Image shot by Kiliii Yuyan</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="about__partners">
        <h3>Partners</h3>
        <NavLink className="about__partners--link" to={"https://evolve.com/"} target="_blank">
          <img className="about__partners--img" src={evolve} alt="Evolve" />
        </NavLink>
        <NavLink
          className="about__partners--link"
          to={"https://modernistcuisine.com/"}
          target="_blank"
        >
          <img className="about__partners--img" src={tongass} alt="tongass" />
        </NavLink>
        <NavLink
          className="about__partners--link"
          to={"https://tongassonthefly.com/"}
          target="_blank"
        >
          <img className="about__partners--img" src={mod} alt="mod" />
        </NavLink>
      </div>
    </div>
  );
};
