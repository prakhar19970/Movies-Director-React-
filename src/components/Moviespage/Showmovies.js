import React, { Component } from 'react';


var url = 'http://localhost:8081/api/movies/'
class Showmovies extends Component {

    state = {
        movies: [],
        newItem: ''
    }
    componentDidMount() {
        document.getElementsByClassName('movie-link')[0].style.display = 'none'
        this.allmovies()
    }
    allmovies = () => {
        return fetch(url).then(data => data.json()).then(res => {
            console.log(res);

            this.setState({ movies: res })
        });
    }

    render() {

        return (
            < div className="movie-info" >
                {
                    this.state.movies.map((data, index) => (
                        // console.log(data.Title)
                        <div position={data.id} key={data.id} className='movie-block'>
                            <h3 >{data.Title}</h3>
                            <div className='list-area'>
                                <p>Description:{data.Description}</p>
                                <p>Actor:{data.Actor}</p>
                                <p>Director:{data.Director}</p>
                                <p>Genre:{data.Genre}</p>
                                <p>Gross_Earning_in_Mil: {data.Gross_Earning_in_Mil}</p>
                                <p>Metascore: {data.Metascore}</p>
                                <p>Rating:{data.Rating}</p>
                                <p>Runtime: {data.Runtime}</p>
                                <p>Votes: {data.Votes}</p>
                                <p>Year:{data.Year}</p>
                            </div>
                        </div>

                    ))
                }
            </div >
        )
    }
}
export default Showmovies;
  // <Showmovies allMovies={this.state.movies} />

    // <AddNewMovie allMovies={this.state.movies}
    //   addMovie={this.props.addNewMovie} />

//   addNewMovieform = (e) => {
//     this.props.history.push('movies/add')
//     e.preventDefault();
//     console.log(e.target)
//     // const id = e.target.parentNode.parentNode.id;
//     const popup = document.getElementById("edit-popup-layout");
//     popup.style.display = "block";
//     // // await this.setState({ids:id})
//     // this.getMovieById(id);
//   };

// import Showmovies from './components/Showmovies'
// import AddNewMovie from './components/Addnewmovie'
