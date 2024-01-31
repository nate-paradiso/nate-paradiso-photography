import instagram from "../../assets/images/3228551_app_b_w_instagram_logo_media_icon.svg";
import youtube from "../../assets/images/3228540_app_b_w_logo_media_popular_icon.svg";
import mail from "../../assets/images/1011335_email_envelope_mail_message_send_icon.svg";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div>
        <div className="footer">
          <div>
            <NavLink
              to={"https://www.instagram.com/paradisopics13/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer__icon" src={instagram} alt="instagram" />
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"https://www.youtube.com/channel/UCeQhLxT5QExy1yS2d0mlPKg"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer__icon" src={youtube} alt="instagram" />
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
        <p>Copywrite Nate Paradiso 2024</p>
      </div>
    </>
  );
};
