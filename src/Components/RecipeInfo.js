import { useParams, useNavigate } from "react-router-dom";

const RecipeInfo = ({data}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const foundRecipe = data.find((recipe) => id === recipe.sys.id);
  const zutaten = foundRecipe.fields.zutaten;

  return (
    <>
      {foundRecipe && 
        <div className="card recipe-info">
          <img className="card-img-top image" src={foundRecipe.fields.bild.fields.file.url}/>
          <div className="card-body">
            <h1 className="card-title">{foundRecipe.fields.berschrift}</h1>          
            <ul>
              {zutaten.map((zutat, index) => <li key={index}>{zutat}</li>)}
            </ul>
            <p className="card-text">{foundRecipe.fields.zubereitung}</p>
            <button onClick={handleClick} className="btn btn-primary">Home</button>
          </div>
        </div>}
    </>
    )
};

export default RecipeInfo;