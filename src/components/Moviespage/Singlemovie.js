import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var url = 'http://localhost:8081/api/movies/'

class Singlemovie extends Component {
    componentDidMount() {
        this.singlemovie();
    }

    state = {
        data: {
            'title': '',
            'desc': '',
            'runtime': 0,
            'genre': '',
            'rate': 0,
            'metascore': 0,
            'votes': 0,
            'gross': 0,
            'dir': '',
            'actor': '',
            'year': 0
        }
    }
    singlemovie = () => {
        const obj = this.props.match.params
        console.log(obj.id)
        fetch(url + obj.id).then(res => res.json()).then(data => {
            console.log(data)
            this.setState({
                data: {
                    'title': data.Title,
                    'desc': data.Description,
                    'runtime': data.Runtime,
                    'genre': data.Genre,
                    'rate': data.Rating,
                    'metascore': data.Metascore,
                    'votes': data.Votes,
                    'gross': data.Gross_Earning_in_Mil,
                    'dir': data.Director,
                    'actor': data.Actor,
                    'year': data.Year
                }
            });
        }).catch(error => {
            this.setState({
                data: {
                    'title': '',
                    'desc': '',
                    'runtime': 0,
                    'genre': '',
                    'rate': 0,
                    'metascore': 0,
                    'votes': 0,
                    'gross': 0,
                    'dir': '',
                    'actor': '',
                    'year': 0
                }
            })
        })
    }
    render() {
        if (!this.state.data) {
            return null;
        }
        return (
            <div className='movie-block'>
                <h3 >{this.state.data.title}</h3>
                <div className='list-area'>
                    <p>Description: {this.state.data.desc}</p>
                    <p>Actor: {this.state.data.actor}</p>
                    <p>Director: {this.state.data.dir}</p>
                    <p>Genre: {this.state.data.genre}</p>
                    <p>Gross_Earning_in_Mil: {this.state.data.gross}</p>
                    <p>Metascore: {this.state.data.metascore}</p>
                    <p>Rating: {this.state.data.rate}</p>
                    <p>Runtime: {this.state.data.runtime}</p>
                    <p>Votes: {this.state.data.votes}</p>
                    <p>Year: {this.state.data.year}</p>
                </div>
            </div>
        )
    }
}
export default Singlemovie;