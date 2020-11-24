import React, { useState } from 'react';

function MovieCard(){

    return (
            <div className="card" key={movie.id}>
                <img 
                    className="card--image" 
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${.info.movie.poster_path}`} 
                    alt={.info.movie.title + ' poster'} 
                />
                <div className="card--content">
                    <h3 className="card--title">{.info.movie.title}</h3>
                    <p><small>RELEASE DATE: {.info.movie.release_date}</small></p>
                    <p><small>RATING: {.info.movie.vote_average}</small></p>
                    <p className="card--desc">{.info.movie.overview}</p>
                </div>
            </div>
    )
}

export default MovieCard;