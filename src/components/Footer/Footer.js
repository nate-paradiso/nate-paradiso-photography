import instagram from "../../assets/images/icons8-instagram.svg";
import youtube from "../../assets/images/icons8-youtube.svg";
import mail from "../../assets/images/icons8-mail-50.png";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div>
            <NavLink
              to={"https://www.instagram.com/paradisopics13/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer__icon" src={instagram} alt="Instagram" />
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"https://www.youtube.com/channel/UCeQhLxT5QExy1yS2d0mlPKg"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer__icon" src={youtube} alt="Youtube" />
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"mailto:natepphotography@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer__icon" src={mail} alt="Email" />
            </NavLink>
          </div>
        </div>
        <p>All Rights Reserved. Content and Web Development by Nate Paradiso 2025</p>
      </footer>
    </>
  );
};
