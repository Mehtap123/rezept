import './App.css';
import { client } from './Components/client';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Recipe from './Components/Recipe';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {client.getEntries()
    .then((res) => {setData(res)})
    .catch(console.error)
    };
    fetchData();
  }, []);

  console.log(data)
   
  return (

  <div className="App">
    <Routes>
      <Route path="/" element={<Recipe data={data}/>}/>
    </Routes>
  </div>
);
}

export default App;