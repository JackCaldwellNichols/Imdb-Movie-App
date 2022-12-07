import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from "./component/MovieList.jsx";
import MovieListHeading from "./component/MovieListHeading.jsx";
import SearchBox from "./component/SearchBox.jsx";
import AddToFavourites from "./component/AddToFavourites.jsx";
import RemoveFromFavourites from "./component/RemoveFromFavourites.jsx";

import "../styles/app.css";



const App = () => {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest  = async (searchValue) => {
        const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=a0af7bda`;

        const resp = await fetch(url);
        const response = await resp.json();
        
        if (response.Search){
            setMovies(response.Search)
        }
    }; 

    useEffect(() => {
        getMovieRequest(searchValue)
    }, [searchValue])

    useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

    const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};


    const addFavourite = (movie) => {
        const newFavouriteList = [...favourites, movie]
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList);
    }

    const removeFavourite = (movie) =>{
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        )
        setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
    }

	return (
		<div className="container-fluid movie-app">
            <div className="row d-flex align-items-center mt-4 mb-4">
                <MovieListHeading heading="Movies"/>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <div className="row">
                <MovieList 
                    movies={movies}
                    handleFavouritesClick={addFavourite}
                    favouriteComponent={AddToFavourites}
                />
            </div>
            <div className="row d-flex align-items-center mb-4 mt-4">
                <MovieListHeading heading="Favourites" />
            </div>
            <div className="row d-flex align-items-center mb-4 mt-4">
                <MovieList 
                    movies={favourites} 
                    handleFavouritesClick={removeFavourite}
                    favouriteComponent={RemoveFromFavourites}
                />
            </div>
		</div>
	);
};

export default App;