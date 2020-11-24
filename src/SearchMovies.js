import React, { useState } from 'react';

function SearchMovies(){

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const query = "The Mechanic";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=9b9e25dbc1c45abfea8f24e2af2091ff&language=en-US&query=${query}&page=1&include_adult=false`;

        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        }catch(err){
            console.error(err);
        }
    }

    return(
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query"> Movie Name</label>
                <input className="input" type="text" name="query" placeholder="movie name e.g Nutty Professor"/>
                <input className="button type" type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default SearchMovies;