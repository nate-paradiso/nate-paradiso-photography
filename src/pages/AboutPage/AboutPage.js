import "./AboutPage.scss";
import { NavLink } from "react-router-dom";
import evolve from "../../assets/images/evolve.png";
import kiliii from "../../assets/images/kiliii.png";
import devilfish from "../../assets/images/devilfish-logo2-resize.png";
import tongass from "../../assets/images/Screen+Shot+2023-05-06+at+9.09.36+AM.png";
import mod from "../../assets/images/mod.png";
import { Helmet } from "react-helmet";

export const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="Learn more about Nate Paradiso Photography, a Seattle, Washington-based photographer specializing in underwater, nature, weddings, and lifestyle photography. Also providing web development services."
        />
      </Helmet>
      <div className="about">
        <div className="about__container">
          <p className="about__container--text">
            Behind the lens, my passion for capturing moments transforms ordinary scenes into
            impactful visuals. Specializing in underwater, nature, and beyond, I bring a unique and
            creative perspective to my photography.
          </p>
          <br />
          <br />
          <p className="about__container--text-paragraph">
            My portfolio includes assignments for National Geographic in Alaska and published work
            in magazines like Tail and Microscopy Today. My talent has earned me recognition, with
            my images featured in National Geographic's "As the World Turns" assignment and
            showcased on major networks such as Fox, CNN and ABC news. Additionally, my work has
            been published in the Modernist Pizza books.
          </p>
          <br />
          <p className="about__container--text-paragraph">
            I am also the web developer behind the website you're currently enjoying. With
            experience in both fields, my expertise shines through in every aspect of my work. My
            ability to seamlessly blend my skills as both a photographer and web developer
            underscores my versatility and dedication to crafting immersive visual experiences.
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
      <h3 className="about__title">Partners</h3>
      <div className="about__partners">
        <NavLink
          className="about__partners--link"
          to={"https://devilfishdive.com/"}
          target="_blank"
        >
          <img className="about__partners--img" src={devilfish} alt="devilfish diving" />
        </NavLink>
        <NavLink className="about__partners--link" to={"https://kiliii.com/"} target="_blank">
          <img className="about__partners--img" src={kiliii} alt="Kiliii Yuyan" />
        </NavLink>
        <NavLink className="about__partners--link" to={"https://evolve.com/"} target="_blank">
          <img className="about__partners--img" src={evolve} alt="Evolve" />
        </NavLink>
        <NavLink
          className="about__partners--link"
          to={"https://tongassonthefly.com/"}
          target="_blank"
        >
          <img className="about__partners--img" src={tongass} alt="tongass on the fly" />
        </NavLink>
        <NavLink
          to={"https://modernistcuisine.com/"}
          className="about__partners--link"
          target="_blank"
        >
          <img className="about__partners--img" src={mod} alt="modernist cuisine" />
        </NavLink>
      </div>
    </div>
  );
};
