import { Link } from "react-router-dom";

const Recipe = ({ data }) => {
  return (    
    <div className="bckgrnd">
      <h1 className="heading">Rezepte</h1>

      {data.map((item, index) => (
        <div className="card recipe-main" key={index}>
          <img
            src={item.PictureURL}
            className="card-img-top images"
          />
          <div className="card-body">
            <h3 className="card-title">{item.Title}</h3>
            
            <Link to={`${item.Recipe_ID}`}>
              <button className="btn btn-primary btnstyle">Zum Rezept</button>
            </Link>
          </div>
        </div>
        
      ))}
      
    </div>
  );
  
};

export default Recipe;

