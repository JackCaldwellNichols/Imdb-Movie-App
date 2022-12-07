import React from "react";

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	return (
		<div className="d-flex">
			{props.movies.map((movie, index) => (
				<div className="image-container d-flex justify-content-space-evenly ms-2">
					<img src={movie.Poster} alt="movie-image" className="ms-3"/>
					<div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center mb-4">
						<FavouriteComponent />
					</div>
				</div>	
			))}
		</div>
	);
};

export default MovieList;
