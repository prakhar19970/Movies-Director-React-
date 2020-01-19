
import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (

        <header className="App-header" >
            <h1>FlixInfo</h1>

        </header>
    )

}

function Body() {
    return (
        <div className="movie-link">
            <Link to="/movies">
                <button className='movies-button' onClick={disappear} type="button">
                    Movies
                </button>
            </Link>
        </div>
    )
}
function disappear() {
    console.log('hello');
    document.getElementsByClassName('movie-link')[0].style.display = 'none';
}
export default { Header, Body };

