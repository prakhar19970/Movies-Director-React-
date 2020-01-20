import React, { Component } from 'react';
import '../../App.css'
import { Link } from 'react-router-dom'
var url = 'http://localhost:8081/api/movies/'

class Addnewmovie extends Component {
    componentDidMount() {
    }
    state = {
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
    addMovie = async (data) => {

        await fetch(url, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => {
            console.log(res);
            res.json()
        }).then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        });
    }
    printdata = async (e) => {
        console.log('its working')
        e.preventDefault();
        console.log(e.target);
        var x = e.target;
        var y = Object.keys(this.state).toString()
        //  console.log(y)
        for (let i of x) {
            console.log(i);
            console.log(i.name);
            if (y.includes(i.name) && i.name !== "") {
                if (i.type === 'number') {
                    let temp = Number(i.value);
                    await this.setState({ [i.name]: temp });
                }
                else {
                    await this.setState({ [i.name]: i.value });
                }
            }

        }
        document.getElementById('movie-form').value = '';
        console.log(this.state)
        console.log(JSON.stringify(this.state))
        this.addMovie(this.state)
    }
    render() {
        return (
            <div id="edit-popup-layout">

                <form className='donation-form' onSubmit={this.printdata}>
                    <div className="main">
                        <div className="personal-info-area">
                            <div className="form-title info-title">
                                New Movie Details
                            </div>
                            <div className="name">
                                <label className="input-movie-name label-text ">Title</label>
                                <input id="movie-form" className="input-movie-name input-long input-area" type="text" name="title" placeholder="Movie Name" required />
                                <label className="input-actor-name label-text ">Actor</label>
                                <input className="input-actor-name input-medium  input-area" type="text" name="actor" placeholder="Actor name" />
                                <label className="input-director-name label-text ">Director</label>
                                <input className="input-director-name input-medium  input-area" type="text" name="dir" placeholder="Director name" />
                            </div>
                            <label className="address1 label-text">Description</label>
                            <input className="address1 input-long input-area" type="text" name="desc" placeholder="Description" />


                            <div className="address2">
                                <label className=" label-text rating">Rating</label>
                                <input type="number" className=" input-small input-area rating" name="rate" />
                                <label className=" label-text genre">Genre</label>
                                <select className=" input-small input-area genre" name="genre" required>
                                    <option value="Action">Action</option>
                                    <option value="Adventure">Adventure</option>
                                    <option value="Animation">Animation</option>
                                    <option value="Biography">Biography</option>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Crime">Crime</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Horror">Horror</option>
                                    <option value="Mystery">Mystery</option>
                                    <option value="Western">Western</option>
                                </select>
                                <label className="label-text runtime">Runtime</label>
                                <input className="input-small input-area runtime" type="number" name="runtime" placeholder="Enter Runtime..." />
                            </div>
                            <div className="address3">
                                <label className=" label-text metascore">Metascore</label>
                                <input type="number" className="input-small input-area metascore" name="metascore" placeholder="Enter Metascore..." />
                                <label className=" label-text votes">Votes</label>
                                <input type="number" className="input-small input-area votes" name="votes" placeholder="Enter Votes..." />
                                <label className=" label-text year">Year</label>
                                <input type="number" className="input-small input-area year" name="year"
                                    min="1990-03" placeholder="Enter year..." />
                            </div>
                            <label className="email label-text">Gross_Earning_in_Mil</label>
                            <input className="email input-long input-area" type="number" name="gross" placeholder="" />
                            <button className='form-submit' type='submit' >Submit</button>
                        </div>
                    </div>
                </form>
                <Link to="/movies">
                    <button className='back' type='button' >Back</button>
                </Link >
            </div >

        )
    }
}
export default Addnewmovie;