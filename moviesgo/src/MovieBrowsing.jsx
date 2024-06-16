import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
  
const MovieBrowsing = () =>{
    const [browse, setBrowse] = useState('');
  const [movies,setMovies] = useState([]);

  const navigate = useNavigate();
  useEffect( () => {
      
    searchMovies('');
  },[])


  

  const searchMovies= async (title) => {
    

    const URL = `http://www.omdbapi.com/?s=${title}&apikey=84d49492`;
    const response = await fetch(`${URL}`);
    const result = await response.json();
    
    console.log(result);
    setMovies(result.Search);


    

  }
  
  

  
  
  
  return (
      <div className='Page'>
        <div className='SearchBar'>
          <input placeholder='Search ...'
            vlaue = {browse}
            onChange={(e) => setBrowse(e.target.value) }
          />
          <button className='SearchButton' onClick={() => searchMovies(browse)} >
            go!
          </button>

        </div>
        
        {
        movies?.length >0
        ?(
          <div className='Containter' >
            { movies.map( (mov) => (
              <Card movie1= {mov} />
            ))}
          </div>
        ) : (
          <div className='empty'>
              <h4>No movies found</h4>
          </div>
          

        )  
        }
      </div>
  );
}


export default MovieBrowsing;