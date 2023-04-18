import "./Boot.css";

const Boot = ({ object }) => {
  const deleteBoat = async () => {
    try {
      const result = await fetch(
        import.meta.env.VITE_BACKEND +
          import.meta.env.VITE_API_VERSION +
          import.meta.env.VITE_DELETE_ONE,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ id: object._id }),
        }
      );
    } catch (err) {
      const result = "Error";
    }
  };

  return (
    <div className="Boot">
      <div>
        <p>Baujahr</p>
        <p>{object.constructionYear}</p>
      </div>
      <div>
        <p>Seriennummer</p>
        <p>{object.serialNumber}</p>
      </div>
      <div>
        <p>Material</p>
        <p>{object.material}</p>
      </div>
      <div>
        <p>Boot-Typ</p>
        <p>{object.bootType}</p>
      </div>
      <div>
        <p>Boot verfügbar</p>
        <p>{object.available ? "ja" : "nein"}</p>
      </div>
      <div>
        <button onClick={deleteBoat} className="delete">
          Boot löschen
        </button>
        <button className="success">Boot bearbeiten</button>
      </div>
    </div>
  );
};

export default Boot;
