import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

  
const MovieBrowsing = () =>{
    const [browse, setBrowse] = useState('');
  const [movies,setMovies] = useState([]);

  const navigate = useNavigate();


  // when the web app is fist loaded,we load the search of "spiderman" so that the page is not empty
  // with the use of useEffect hook
  useEffect( () => {
      
    searchMovies("spiderman");
  },[])


  
// code snippet taken from the restfull api Movie Database alternative for search by name/string
  const searchMovies= async (title) => {
    const url = `https://movie-database-alternative.p.rapidapi.com/?s=${title}&r=json&page=1`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3279362f39msh18933dc9449f741p14d976jsn5f331005d583',
		'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	setMovies(result.Search); // when succesfull , sets the Movies with useState hook
} catch (error) {
	console.error(error);
}


    

  }
  
  

  
  
  
  return (
      <div className="bg-primary w-100">
        <div className="row justify-content-center my-4" >
          
          
            <div className="col my-2">
              <input  className="form-control text-center" placeholder='Search ...'
              vlaue = {browse}
              onChange={(e) => setBrowse(e.target.value) }
            />
            </div>
            
            <div className="col my-2 "><button className="btn btn-light" placeholder="Go!" onClick={() => searchMovies(browse)} >go!</button></div>
          
            <div className="col">
              <h1 className="row text-center justify-content-center text-light fw-bold  fst-italic fs-1">MoviesGo</h1>
            </div>
            
        </div>
        
        
        <div className="my-5 ">
          {
          movies?.length >0
          ?(
            <div className="row row-cols-3  ">
              { movies.map( (mov) => (
                  <Card className="col mx-3" movie1= {mov} />
                ))}
              
            </div>
          ) : (
            <div className='empty'>
                <h1 className="text-center">No movies found</h1>
            </div>
            

          )  
          }
        </div>
          
      </div>
  );
}


export default MovieBrowsing;