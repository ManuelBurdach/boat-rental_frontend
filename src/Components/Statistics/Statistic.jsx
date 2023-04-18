import { Link } from "react-router-dom";
import "./Statistic.css";

const Statistic = (props) => {
  return (
    <Link to={props.link}>
      <div className="Statistic">
        <h2>{props.title}</h2>
        <p>{props.stat}</p>
      </div>
    </Link>
  );
};

export default Statistic;
