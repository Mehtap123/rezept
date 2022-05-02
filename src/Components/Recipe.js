import { Link } from "react-router-dom";

const Recipe = ({ data }) => {
  //console.log(data);

  return (
    <>
      <h1>Rezepte</h1>
      {/* <div className="container"> */}
      <div className="test">
        {data.map((item, index) => (
          <div className="recipe" key={index}>
            <h2>{item.fields.berschrift}</h2>

            <img src={item.fields.bild.fields.file.url} className="images" />
            <p>
              <Link to={item.sys.id}>
                <button className="btn btn-primary testtest">
                  Zum Produkt
                </button>
              </Link>
            </p>
          </div>
        ))}
      </div>
      {/* </div> */}
    </>
  );
};

export default Recipe;
