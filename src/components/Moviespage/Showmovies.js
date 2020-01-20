import React, { Component } from 'react';
import Addnewmovie from '../Moviespage/Addnewmovie'
import { Link } from 'react-router-dom'
var url = 'http://localhost:8081/api/movies/'

class Showmovies extends Component {

    componentDidMount() {
        this.allmovies()
    }


    state = {
        movies: [],
        item: ''
    }
    allmovies = () => {
        return fetch(url).then(data => data.json()).then((res) => {
            console.log(res);
            this.setState({ movies: res })
        });
    }

    movDelete = (event) => {

        const id = event.target.parentElement.parentElement.parentElement.attributes.position.value;
        console.log(id);
        this.deleteMovie(Number(id));
    }

    deleteMovie = async (data) => {
        await fetch("http://localhost:8081/api/movies/" + data, {
            method: 'DELETE',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then(res => {
            console.log(res)
            res.json()
        }).then(data => {
            console.log(data);
            this.allmovies();
        }).catch(error => {
            console.log(error);
        });
        this.componentDidMount();
    }
    render() {
        return (
            < div className="movie-info" >
                <div className="movie-info-button-area">
                    <Link to="/movies/add" >
                        <button className=' movie-info-buttons' type="button">
                            Add Movies
                </button>
                    </Link>
                    <Link to="/home">
                        <button className=' movie-info-buttons' type="button">
                            Back
                 </button>
                    </Link>
                </div >
                < div >
                    {
                        this.state.movies.map((data, index) => (
                            // console.log(data.Title)
                            <div position={data.id} key={data.id} className='movie-block'>
                                <Link className="link-css" to={`/movies/${data.id}`}>
                                    <h3 >{data.Title}</h3>
                                    <div className='list-area'>
                                        <p>Description: {data.Description}</p>
                                        <p>Actor: {data.Actor}</p>
                                        <p>Director: {data.Director}</p>
                                        <p>Genre: {data.Genre}</p>
                                        <p>Gross_Earning_in_Mil: {data.Gross_Earning_in_Mil}</p>
                                        <p>Metascore: {data.Metascore}</p>
                                        <p>Rating: {data.Rating}</p>
                                        <p>Runtime: {data.Runtime}</p>
                                        <p>Votes: {data.Votes}</p>
                                        <p>Year: {data.Year}</p>
                                    </div>
                                </Link>
                                <div className="buttons">
                                    <Link to={`/movies/${data.id}/update`}>
                                        <button className="update">Update</button>
                                    </Link>
                                    < Link to='/movies' >
                                        <button className="update delete" onClick={this.movDelete}>Delete</button>
                                    </Link>
                                </div>
                            </div >
                        ))
                    }
                </div >

            </div >

        )
    }
}
export default Showmovies;

