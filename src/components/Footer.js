import React from 'react';
import '../App.css'

function Footer(){
    return (
        <footer>
            <p><strong>Movie Search</strong></p>
            <p>Copyright 2020</p>

            <div id="love">
                <span>Made With</span>
                <img src="https://img.icons8.com/dusk/64/000000/like.png" alt="love"/> 
                <span>by <a href="https://github.com/PJMantoss" target="_blank">Mantoss</a></span>
            </div>
        </footer>
    )
}

export default Footer;