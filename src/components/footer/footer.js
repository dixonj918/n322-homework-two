import styles from "./footer.css";
import guitarLogo from "../images/guitarLogo.jpg";

function Footer() {
  return (
    <footer>
      <div className="copyright">
        <img src={guitarLogo}></img>2022 Dixon & Co. ALL RIGHT RESERVED
      </div>
      <div className="privacy">
        <a href="#">Privacy</a>
        <span>|</span>
        <a href="#">Terms</a>
      </div>
    </footer>
  );
}

export default Footer;
