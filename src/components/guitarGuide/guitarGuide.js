import styles from "./guitarGuide.css";
import vSeries from "../images/vSeries.jpg";
import lSeries from "../images/lSeries.jpg";
import warlock from "../images/warlock.jpg";

function GuitarGuide() {
  return (
    <div className="guitarContainer">
      <div className="guitarSeries">
        <img src={vSeries} />
        <h5>V Series</h5>
        <h6>suspendisse ultrices gravida dictum fusce</h6>
      </div>
      <div className="guitarSeries">
        <img src={lSeries} />
        <h5>L Series</h5>
        <h6>suspendisse ultrices gravida dictum fusce</h6>
      </div>
      <div className="guitarSeries">
        <img src={warlock} />
        <h5>Warlock</h5>
        <h6>suspendisse ultrices gravida dictum fusce</h6>
      </div>
    </div>
  );
}

export default GuitarGuide;
