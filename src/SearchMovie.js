import React from 'react';

function SearchMovie(){
    return(
        <div>
            <form className="form">
                <label htmlFor="query">
                    <input className="input" type="text" name="query" id="query" placeholder="type movie name e.g Nutty Professor"/>
                </label>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default SearchMovie;