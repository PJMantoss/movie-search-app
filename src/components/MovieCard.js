import React from 'react';

function MovieCard(props){
    return (
        <div className="card--list">
            {movies.filter(movie => props.info.movie.poster_path).map(movie => (
                <div className="card" key={movie.id}>
                    <img 
                        className="card--image" 
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.info.movie.poster_path}`} 
                        alt={props.info.movie.title + ' poster'} 
                    />
                    <div className="card--content">
                        <h3 className="card--title">{props.info.movie.title}</h3>
                        <p><small>RELEASE DATE: {props.info.movie.release_date}</small></p>
                        <p><small>RATING: {props.info.movie.vote_average}</small></p>
                        <p className="card--desc">{props.info.movie.overview}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieCard;