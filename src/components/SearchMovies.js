import React, { useState } from 'react';
import MovieCard from './MovieCard';

function SearchMovies(){
    //state for input query
    const [query, setQuery] = useState('');
    //state for movies
    const [movies, setMovies] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const searchMovies = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const url = `https://api.themoviedb.org/3/search/movie?api_key=9b9e25dbc1c45abfea8f24e2af2091ff&language=en-US&query=${query}&page=1&include_adult=false`;

        try{
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            setMovies(data.results);
            setIsLoading(false);
        }catch(err){
            console.error(err);
        }
    }

    const filteredMovies = movies.filter(movie => movie.poster_path);

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
                    placeholder="movie name e.g Nutty Professor"
                    required 
                />
                <input className="button type" type="submit" value="Search"/>
            </form>

            <div className="card--list">
                {isLoading ? <h1>Loading... Please wait</h1> : filteredMovies.length ? 
                 filteredMovies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                 )) : <h1>Sorry! Movie Not Found</h1> }
            </div>
        </div>
    )
}

export default SearchMovies;