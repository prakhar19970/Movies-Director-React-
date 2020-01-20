
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Homepage extends Component {

    render() {
        return (
            <div className="movie-link" >
                <Link to="/movies">
                    <button className='movies-button' type="button">
                        Movies
                    </button>
                </Link>
                <Link to="/directors">
                    <button className='movies-button' type="button">
                        Directors
                    </button>
                </Link>
            </div>
        )
    }

}
export default Homepage;

