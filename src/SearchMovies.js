import React from 'react';

function SearchMovies(){
    return(
        <div>
            <form className="form">
                <label htmlFor="query">
                    <input type="text" name="query" id="query"/>
                </label>
            </form>
        </div>
    )
}