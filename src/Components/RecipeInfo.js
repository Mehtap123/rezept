import { useParams, useNavigate } from "react-router-dom";

const RecipeInfo = ({data}) => {
   const { id } = useParams();
  console.log(id);
  console.log(data);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const foundRecipe = data.find((recipe) => id === recipe.sys.id);
  console.log(foundRecipe);
  //console.log(foundRecipe.fields.zutaten)
  const zutaten = foundRecipe.fields.zutaten;
  console.log(zutaten)


  return (

    <>
    {foundRecipe && 
      <div>
        <h2>{foundRecipe.fields.berschrift}</h2>
        <img src={foundRecipe.fields.bild.fields.file.url}/>
        <ul>
          {zutaten.map((zutat, index) => <li key={index}>{zutat}</li>)}
        </ul>
        <p>{foundRecipe.fields.zubereitung}</p>
        <button onClick={handleClick}>Home</button>



      </div>}
    </>
    
    
    )


};

export default RecipeInfo;
