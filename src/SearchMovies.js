import React, { useState } from 'react';

function SearchMovies(){
    //state for input query
    const [query, setQuery] = useState('');
    //state for movies
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        // const query = "The Mechanic";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=9b9e25dbc1c45abfea8f24e2af2091ff&language=en-US&query=${query}&page=1&include_adult=false`;

        try{
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    return(
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query"> Movie Name</label>
                <input 
                    className="input" 
                    type="text" 
                    name="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder="movie name e.g Nutty Professor"/>
                <input className="button type" type="submit" value="Search"/>
            </form>

            <div className="card--list">
                {movies.map(movie => (
                    <div className="card" key={movie.id}>
                        <img 
                            className="card--image" 
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
                            alt={movie.title + ' poster'} 
                        />
                        <div className="card--content">
                            <h3 className="card.title">{movie.title}</h3>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}</small></p>
                            <p className="card--desc"></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchMovies;