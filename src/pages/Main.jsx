import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useAuthContext } from "../context/AuthProvider";
import { toastWarnNotify } from "../helpers/ToastNotify";

const Main = () => {
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useAuthContext();

  const getMovies = async (URL) => {
    setLoading(true)
    try {
      const res = await axios(URL);
      setMovies(res.data.results);
    } catch (error) {
      alert(error)
    }
    finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm)
      setSearchTerm("")
    } else if (!currentUser) {
      toastWarnNotify("Please log in to search a movie");
    } else {
      toastWarnNotify("Please enter a text");
    }
  }

  return <div>
  <form onSubmit={handleSubmit} className="flex justify-center p-2">
    <input
      type="search"
      className="w-80 h-8 rounded-md p-1 m-2"
      placeholder="Search a movie..."
      onChange={(e) => setSearchTerm(e.target.value)}
      value={searchTerm}
    />
    <button className="btn-danger-bordered">Search</button>
  </form>
  <div className="flex justify-center flex-wrap">
    {loading ? (
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    ) : (
      movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
    )}
  </div>
</div>
};

export default Main;
