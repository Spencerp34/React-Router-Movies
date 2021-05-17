import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Movie from './Movies/Movie'
import AllMovies from './Movies/MovieList'

import SavedList from './Movies/SavedList';


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state

          // console.log(response)

          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <>
      <div>
        {/* <Link to='/'>Home</Link>
        <Link to='/movies/:id'>Movies</Link> */}
      </div>
      <div className='App'>
        { <SavedList list={[ /* This is stretch */]} />}

        <div>
          <Route exact path='/' >
            <AllMovies
              // {...props}
              movies={movieList} 
            />
          </Route>
          <Route path='/movies/:id' >
            <Movie movie={movieList} />
          </Route>
        </div>
      </div>
    </>
  );
}
