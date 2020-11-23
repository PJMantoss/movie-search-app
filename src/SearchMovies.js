import React from 'react';

function SearchMovies(){
    return(
        <div>
            <form className="form">
                <label className="label" htmlFor="query"> Movie Name
                    <input className="input" type="text" name="query" placeholder="type movie name e.g Nutty Professor"/>
                </label>
                <input className="button type" type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default SearchMovies;