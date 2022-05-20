import "./App.css";
import { client } from "./Components/client";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Recipe from "./Components/Recipe";
import RecipeInfo from "./Components/RecipeInfo";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://yammi-yammi-yammi-recipes.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const recipes = data.recipes;

  return (
    <>
      {recipes ? (
        <Routes>
          <Route path="/" element={<Recipe data={recipes} />} />
          <Route path=":id" element={<RecipeInfo data={recipes} />} />
        </Routes>
      ) : (
        "Loading......."
      )}
    </>
  );
}

export default App;
