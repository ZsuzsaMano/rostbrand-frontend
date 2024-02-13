
import insta from "../images/insta.png"
import facebook from "../images/facebook.png"
import kah from "../images/kah.png";

const Footer = ()=>{

return (
  <footer>
    <div className="copyright">
      <small>&copy; Copyright 2022, Rostbrand</small>
    </div>
    <div className="social-media">
      <a
        href="https://www.instagram.com/peter.tauber/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={insta}
          alt="instagram"
        />
      </a>
      <a
        href="https://www.facebook.com/peter.tauber.9"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="facebook" />
      </a>
      <a
        href="https://www.kunstabhinterhof.at/artist/peter-tauber/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={kah} alt="kunstabhinterhof" />
      </a>
    </div>
  </footer>
);}

export default Footer
