import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
const DetailsPage = () =>{
    const {id} = useParams();
    const navigate = useNavigate();
    const iidd = {id};
    const [info, setInfo] = useState(); // state hook that stores the info of a movie in <info>
    
    // we use a useEffect hook so that the info of the selected movie will load fist
    useEffect(() => {
        fetchData();
    }, []);

    // code snippet taken from the restfull api Movie Database alternative for search by ID
    const fetchData = async  () => {
        const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        console.log("1");

        xhr.open('GET', `https://movie-database-alternative.p.rapidapi.com/?r=json&i=${id}`);
        xhr.setRequestHeader('x-rapidapi-key', '3279362f39msh18933dc9449f741p14d976jsn5f331005d583');
        xhr.setRequestHeader('x-rapidapi-host', 'movie-database-alternative.p.rapidapi.com');
        console.log("2");
        xhr.send(data);
        xhr.addEventListener('readystatechange',  function () {
	        
            
                
            if (this.readyState === this.DONE) {
            
                const parsedInfo =  JSON.parse(this.responseText);
                setInfo(parsedInfo);
                console.log(parsedInfo);

	        }
        });

        console.log("3");

    };

    


   
    return(
        <div className="Details">
            <button className ="btn btn-light my-4 align-center" onClick={ () => navigate("/") }>
            Back To Search!</button>
            
          {info ? (
          <div>
            <h1 className="text-center fw-bold text-light fst-italic fs-1">{info.Title}</h1>
            <div className="row">
              <div className="col ">
                <img src={info.Poster} alt={`${info.Title} Poster`} />
              </div>
              <div className="col text-left text-light">
                <p><strong>Year:</strong> {info.Year}</p>
                <p><strong>Rated:</strong> {info.Rated}</p>
                <p><strong>Released:</strong> {info.Released}</p>
                <p><strong>Runtime:</strong> {info.Runtime}</p>
                <p><strong>Genre:</strong> {info.Genre}</p>
                <p><strong>Director:</strong> {info.Director}</p>
                <p><strong>Writer:</strong> {info.Writer}</p>
                <p><strong>Actors:</strong> {info.Actors}</p>
              </div>
              <div className="col"></div>

              <div className="my-4 text-center text-light">
                
                <p><strong>Plot:</strong> {info.Plot}</p>
                <p><strong>Language:</strong> {info.Language}</p>
                <p><strong>Country:</strong> {info.Country}</p>
                <p><strong>Awards:</strong> {info.Awards}</p>
                
                <p><strong>IMDB Rating:</strong> {info.imdbRating}</p>
                <p><strong>IMDB Votes:</strong> {info.imdbVotes}</p>
              </div>
            </div>
            
            
            
            
          </div>
      ) : (
        <p>Loading...</p>
      )}
        
      </div>
    )
}

export default DetailsPage;
 