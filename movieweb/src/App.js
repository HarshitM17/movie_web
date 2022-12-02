import './App.css';
import React,{useEffect,useState} from 'react';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MovieCard from './components/MovieCard';
import SearchIcon from "./search.svg"

const App = () => {

  // 12665bc8
  const[movies,setMovies] = useState([]);
  const[searchTerm,setSearchTerm] = useState("");

  // const modata=
  // {'Title': 'The Amazing Spiderman 2 Webb Cut', 'Year': '2021', 'imdbID': 'tt18351128', 'Type': 'movie','Poster':'N/A'}
  const API_URL = 'http://www.omdbapi.com?apikey=12665bc8';

  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
    //console.log(data.Search)
  }
  useEffect(() =>{

    searchMovies('spiderman');

  },[]);

  return (
    <div className="App">
    <h1>MOVIEHUB</h1>
    <div className="search">
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search for movies"
    />
    <img
      src={SearchIcon}
      alt="search"
      onClick={() => searchMovies(searchTerm)}
    />
  </div>

    {movies?.length>0?
      (    <div className="container">
      {movies.map((movie)=>(
        <MovieCard movie={movie}/>   
      ))}
      </div>
      ):(
        <div className="empty">
        <h2>NO MOVIES FOUND</h2>
        </div>
      )
    }

    </div>

  );
}

export default App;
