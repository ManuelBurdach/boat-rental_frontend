import { useEffect, useState } from "react";
import Statistic from "./Statistic";
import "./Statistics.css";

const Statistics = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch(
      import.meta.env.VITE_BACKEND +
        import.meta.env.VITE_API_VERSION +
        import.meta.env.VITE_GET_STATS
    )
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);
  return (
    <section className="Statistics">
      <Statistic stat={stats.reservedBoats} title="Aktuelle Reservierungen" link="reservierungen" />
      <Statistic stat={stats.availableBoats} title="Verfügbare Boote" link="boote" />
      <Statistic stat={stats.totalBoats} title="Gesamtzahl Boote" link="boote" />
    </section>
  );
};

export default Statistics;
