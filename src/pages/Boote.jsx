import { useEffect, useRef, useState } from "react";
import Boot from "../Components/Boot/Boot";
import "./Boote.css";

const Boote = () => {
  const [boats, setBoats] = useState([]);
  const constuctionYear = useRef();
  const serialNumber = useRef();
  const material = useRef();
  const bootType = useRef();
  const available = useRef();

  const getBoats = async () => {
    try {
      const result = await fetch(
        import.meta.env.VITE_BACKEND +
          import.meta.env.VITE_API_VERSION +
          import.meta.env.VITE_GET_ALL
      );
      const data = await result.json();
      setBoats(data);
    } catch (err) {
      console.log("Error");
    }
  };

  useEffect(() => {
    getBoats();
  }, []);

  const addBoat = async (e) => {
    e.preventDefault();
    const result = await fetch(
      import.meta.env.VITE_BACKEND +
        import.meta.env.VITE_API_VERSION +
        import.meta.env.VITE_ADD_ONE,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          constructionYear: constuctionYear.current.value,
          serialNumber: serialNumber.current.value,
          material: material.current.value,
          bootType: bootType.current.value,
          user: "12312lk12",
          available: available.current.value,
        }),
      }
    );
    const data = await result.json();
    getBoats();
  };

  return (
    <main className="Boote">
      <section>
        <form onSubmit={addBoat}>
          <h2>Boot hinzufügen</h2>
          <input type="text" placeholder="Baujahr" ref={constuctionYear} />
          <input type="text" placeholder="Seriennummer" ref={serialNumber} />
          <select ref={material}>
            <option value="GFK">GFK</option>
            <option value="Holz">Holz</option>
            <option value="Metall">Metall</option>
            <option value="Pappe">Pappe</option>
            <option value="Seelen">Seelen</option>
          </select>
          <select ref={bootType}>
            <option value="Tretboot">Tretboot</option>
            <option value="Segelboot">Segelboot</option>
            <option value="Luftkissenboot">Luftkissenboot</option>
            <option value="Geisterschiff">Geisterschiff</option>
            <option value="Containerschiff">Containerschiff</option>
          </select>
          <select ref={available}>
            <option value="true">Ja</option>
            <option value="false">Nein</option>
          </select>
          <input type="submit" value="Boot hinzufügen" />
        </form>
      </section>
      <section>
        {boats?.map((object, i) => {
          return <Boot key={"boat" + i} object={object} />;
        })}
      </section>
    </main>
  );
};

export default Boote;
