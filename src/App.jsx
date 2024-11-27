import { useEffect, useState } from 'react'
import { getMovieList, seacrhMovie } from './api'
import './App.css'

function App() {
const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((results) => {
      setPopularMovies(results);
    })
  },[])

  

  const popularMoviesList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <>
        <div className="movie-wrapper" key={movie.id}>
        <h3 className="movie-title">{movie.title}</h3>
        <img src={`${import.meta.env.VITE_BASEIMAGE}/${movie.poster_path}`} alt="image-movie" className="movie-image" />
        <h3 className="movie-date">{movie.release_date}</h3>
        <h2 className="movie-rate">{movie.vote_average}</h2>
      </div>
      </>
      )
    })
  }
  const search = async (q) => {
    if(q.length > 3){
      const query = await seacrhMovie(q)
      console.log({query: query})
      setPopularMovies(query.results)
    }
   }

  return (
    <>
    <div className="app-header">
      <h1>Movie</h1>
      <input type="text" className="movie-search" placeholder="Cari film kesayangan anda..." onChange={({target}) => search(target.value)} />
      <div className="movie-container">
      {popularMoviesList()}
        
      </div>
    </div>
    </>
  )
}

export default App
