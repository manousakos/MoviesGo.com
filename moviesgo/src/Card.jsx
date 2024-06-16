import React  from "react";
import { useNavigate } from "react-router-dom";

// this is a card component
const Card = (props) => {
    const { Title, Year, Poster , imdbID    } = props.movie1;
    const navigate = useNavigate();
    
    console.log(Title);
    return(
        <div className="FullCard" onClick={ () => navigate(`/details/${imdbID}`)}>
            <div className='movie'>
                <p>{Year}</p>
            </div>
            <div>
                <img src={Poster !== "N/A" ? Poster : 'https://via.placeholder.com/400'} alt={Title} />
            </div>
        </div>
    )
}

export default Card;



/*
const Card = ( props )  => {

    console.log( props.Title );
    return(
        
        <div className='Container'>
            <div className='movie'>
                <p >{props.Year}</p>
            </div>
            <div>
                <img  src =   {props.Poster !== "N/A"  ? props.Poster : 'https://via.placeholder.com/400'} alt =  {props.Title} />
             </ div>

            
        </div>
        
        
    )
}

export default Card;
*/