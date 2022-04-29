import {Link, useNavigate} from "react-router-dom";


const Recipe = ({data}) => {
    console.log(data);
    const recipes = data.items;
    console.log(recipes);

    // eventuell for.each() - Methode anwenden
    // for each object in an array, create a div with title, picture and button


    // console.log(data.items[0].fields.bild.fields.file)
    // console.log(data.items);
   
    
    
    // const {items} = data;
    // console.log("showdata:" + items)
    
  return 
    
  
};

export default Recipe;
