import React from 'react';

function SearchMovies(){
    return(
        <div>
            <form className="form">
                <label className="label" htmlFor="query"> Movie Name</label>
                <input className="input" type="text" name="query" placeholder="movie name e.g Nutty Professor"/>
                <input className="button type" type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default SearchMovies;