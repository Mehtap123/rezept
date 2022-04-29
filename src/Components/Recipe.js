import { Link } from "react-router-dom";

const Recipe = ({ data }) => {
  console.log(data);

  return (
    <>
      <h1>Rezepte</h1>
      {data.map((item) => (
        <div>
          <h2>{item.fields.berschrift}</h2>
          <img
            src={item.fields.bild.fields.file.url}
            width="500"
            height="300"
          />
          <Link to={item.sys.id}>
            <button>Zum Produkt</button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Recipe;
