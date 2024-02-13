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
            Behind the lens, Nate's passion for capturing moments transforms ordinary scenes into
            impactful visuals. Specializing in underwater, nature, and beyond, Nate brings a unique
            and creative perspective to his photography.
          </p>
          <br />
          <br />
          <p className="about__container--text-paragraph">
            His portfolio includes assignments for National Geographic in Alaska and published work
            in prestigious magazines like Tail and Microscopy Today. Nate's talent has earned him
            recognition, with his stunning images featured in National Geographic's "As the World
            Turns" assignment and showcased on major networks such as Fox News and CNN.
            Additionally, his work has been published in esteemed works like the Modernist Pizza
            books.
          </p>
          <br />
          <p className="about__container--text-paragraph">
            Not just a skilled photographer, Nate Paradiso is also the web developer behind the
            website you're currently enjoying. With experience in both fields, Nate's expertise
            shines through in every aspect of his work. Nate's ability to seamlessly blend his
            skills as both a photographer and web developer underscores his versatility and
            dedication to crafting immersive visual experiences.
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
