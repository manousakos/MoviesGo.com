import { useEffect, useState,} from 'react';
import DetailsPage from './DetailsPage.jsx';
import MovieBrowsing from './MovieBrowsing.jsx';
import { BrowserRouter as Router,Route, Routes, useNavigate } from 'react-router-dom';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
// http://www.omdbapi.com/?i=tt3896198&apikey=84d49492

const App = () => {
 
  // in the app we only declare the routes where we can only visit either of them, not both toghether (due to Routes )
  return(
    <div className="container  bg-primary d-flex flex-column min-vh-100">
      <Routes>
        <Route exact path = "/" element =  { <MovieBrowsing />} ></Route>
        <Route path= "/details/:id" element = { < DetailsPage />} ></Route>
      </Routes>
    </div>
  )
}

export default App;
