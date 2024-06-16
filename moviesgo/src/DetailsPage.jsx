import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailsPage = () =>{
    const {id} = useParams();
    console.log({id});
    const navigate = useNavigate();

    useEffect( () => {
        getInfo({id});
    })
    const getInfo = async(tayt) => {

        const infoURL = `http://www.omdbapi.com/?apikey=84d49492&i=${tayt}`;
        const response = await fetch(`${infoURL}`);
        const result = await response.json();
        console.log(result,tayt);
        
    }
    return(
        <div className="yurrrr">
            <p>Yes you made  it with params--- {id} </p>
        <button onClick={ () => navigate("/") }>
            backToSearcH</button>
        </div>
    )
}
export default DetailsPage;