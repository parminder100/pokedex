import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import "../Movies/Movies.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import PokemonMoviesSkeletonLoader from "../../Loader/PokemonMoviesSkeletonLoader";

const Movies = () =>{
    const navigate = useNavigate();
    const [movieDetail, setMovieDetail] = useState([]);
    const [changeColor, setChangeColor] = useState(true);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setShowLoader(false);
        },3000)
    },[])

    const handleChangeColor = () =>{
        setChangeColor(!changeColor);
    }

    useEffect(()=>{
        const apiKey = process.env.REACT_APP__MOVIE_API_KEY;
        if(!apiKey){
            console.error('API key is missing. Please check your environment variables.');
            return;
        }
        const getMovies = async() =>{
            const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=pokemon`);
            const response = await data.json();
            setMovieDetail(response.results);
            console.log(response.results); 
        }

        getMovies();
    },[])

    const handleMovieDetails = (movieId ) =>{
        navigate(`/moviedetails/${movieId }`);
    }

    return(
        <>
            <div className="movies-header">
                <Header includeScrollFunctionality={false} changeColor={changeColor} handleChangeColor={handleChangeColor} />
            </div>
            <div className="container movie-data">
                <div className="row">
                    {showLoader ?(
                        Array.from({length:20}).map((index)=>(
                            <div key={index} className="col-sm-3 skeleton-loader">
                                <PokemonMoviesSkeletonLoader />
                            </div>
                        ))
                    ):(
                        movieDetail.map((movie)=>(
                            <div key={movie.id} className="col-sm-3 movies-item">
                                <div onClick={()=>handleMovieDetails(movie.id)} className={`movies-list ${changeColor ? "aboutus-dark-theme":"light-theme"}`}>
                                    <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                    <p className="movie-date">{movie.release_date}</p>
                                    <p className="movie-name">{movie.title}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Movies;