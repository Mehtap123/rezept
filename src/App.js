import "./App.css";
import { client } from "./Components/client";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Recipe from "./Components/Recipe";
import RecipeInfo from "./Components/RecipeInfo"

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      client
        .getEntries()
        .then((res) => {
          setData(res);
        })
        .catch(console.error);
    };
    fetchData();
  }, []);

  const recipes = data.items;
  console.log(recipes);

  // console.log(data);

  return (
    <>
      {recipes ? (
        <Routes>
          <Route path="/" element={<Recipe data={recipes}/>}/>
          <Route path=":id" element={<RecipeInfo data={recipes}/>}/> 
        
        </Routes>
      ) : (
        "Loading......."
      )}
    </>

    
  );
}

export default App;
