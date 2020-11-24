import React from 'react';

function SearchMovies(){

    const searchMovies = async (e) => {
        e.preventDefault();

        const query = "The Mechanic";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=6a711b2f9574da2458063937e061f1c3=en-US&query=${query}&page=1&include_adult=false`;

        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
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