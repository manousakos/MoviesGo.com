import { useEffect, useState,} from 'react';
import DetailsPage from './DetailsPage.jsx';
import MovieBrowsing from './MovieBrowsing.jsx';
import { BrowserRouter as Router,Route, Routes, useNavigate } from 'react-router-dom';

// http://www.omdbapi.com/?i=tt3896198&apikey=84d49492

const App = () => {
 
  
  return(
    
      <Routes>
        <Route exact path = "/" element =  { <MovieBrowsing />} ></Route>
        <Route path= "/details/:id" element = { < DetailsPage />} ></Route>
      </Routes>
    
  )
}

export default App;
