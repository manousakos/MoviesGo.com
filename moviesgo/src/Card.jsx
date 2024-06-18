import React  from "react";
import { useNavigate } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

// this is a card component
const Card = (props) => {
    const { Title, Year, Poster , imdbID    } = props.movie1;  
    const navigate = useNavigate(); //we use useNAvigate to navigate between pages.
    
    console.log(Title);

    // if the image whole component is clicked, we will navigate to the details page of the selected movie (div)
    
    return(
        <div className="card mx-3 my-2" style={{width: '18rem'}} onClick={ () => navigate(`/details/${imdbID}`)}>
            <img src={Poster !== "N/A" ? Poster : 'https://via.placeholder.com/400'} alt={Title} />
            <div className="carf-footer">
                <p>{Year}</p>
                <h3>{Title}</h3>
            </div>
        </div>
    )
}

export default Card;



