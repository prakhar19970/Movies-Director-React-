import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var url = 'http://localhost:8081/api/movies/'



class Updatemovie extends Component {
    componentDidMount() {
        this.singlemovie();

    }
    state = {
        data: {
            'title': '',
            'desc': '',
            'runtime': '',
            'genre': '',
            'rate': '',
            'metascore': '',
            'votes': '',
            'gross': '',
            'dir': '',
            'actor': '',
            'year': ''
        }
    }
    singlemovie = () => {
        const obj = this.props.match.params
        console.log(obj.id)
        fetch(url + obj.id).then(res => res.json()).then(data => {
            // console.log(data)
            this.setState({
                data: {
                    'title': data.Title,
                    'desc': data.Description,
                    'runtime': Number(data.Runtime),
                    'genre': data.Genre,
                    'rate': Number(data.Rating),
                    'metascore': Number(data.Metascore),
                    'votes': Number(data.Votes),
                    'gross': Number(data.Gross_Earning_in_Mil),
                    'dir': data.Director,
                    'actor': data.Actor,
                    'year': Number(data.Year)
                }
            })

        }).catch(error => {
            this.setState({
                data: {
                    'title': '',
                    'desc': '',
                    'runtime': '',
                    'genre': '',
                    'rate': '',
                    'metascore': '',
                    'votes': '',
                    'gross': '',
                    'dir': '',
                    'actor': '',
                    'year': ''
                }
            })
        })
    }
    printdata = async (e) => {

        await this.setState({ data: { [e.target.name]: e.target.value } });

        console.log(this.state.data)

        this.addMovie(this.state.data)
    }
    addMovie = async (data) => {
        console.log(data);
        //event.preventDefault();
        await fetch(url + this.props.match.params.id, {
            method: 'PUT',
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
    render() {
        if (!this.state.data) {
            return null;
        }
        return (

            < div id="edit-popup-layout" >

                <form className='donation-form' >

                    <div className="main">
                        <div className="personal-info-area">
                            <div className="form-title info-title">
                                New Movie Details
                    </div>
                            <div className="name">
                                <label className="input-movie-name label-text ">Title</label>
                                <input className="input-movie-name input-long input-area" type="text" name="title" placeholder="Movie Name" value={this.state.data.title} onChange={this.printdata} required />
                                <label className="input-actor-name label-text ">Actor</label>
                                <input className="input-actor-name input-medium  input-area" type="text" name="actor" placeholder="Actor name" value={this.state.data.actor} onChange={this.printdata} />
                                <label className="input-director-name label-text ">Director</label>
                                <input className="input-director-name input-medium  input-area" type="text" name="dir" placeholder="Director name" value={this.state.data.dir} onChange={this.printdata} />
                            </div>
                            <label className="address1 label-text">Description</label>
                            <input className="address1 input-long input-area" type="text" name="desc" placeholder="Description" value={this.state.data.desc} onChange={this.printdata} />


                            <div className="address2">
                                <label className=" label-text rating">Rating</label>
                                <input type="number" className=" input-small input-area rating" name="rate" step='0.1' value={this.state.data.rate} onChange={this.printdata} />
                                <label className=" label-text genre">Genre</label>
                                <select className=" input-small input-area genre" name="genre" onChange={this.printdata} required>
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
                                <input className="input-small input-area runtime" type="number" name="runtime" placeholder="Enter Runtime..." value={this.state.data.runtime} onChange={this.printdata} />
                            </div>
                            <div className="address3">
                                <label className=" label-text metascore">Metascore</label>
                                <input type="number" className="input-small input-area metascore" name="metascore" placeholder="Enter Metascore..." value={this.state.data.metascore} onChange={this.printdata} />
                                <label className=" label-text votes">Votes</label>
                                <input type="number" className="input-small input-area votes" name="votes" value={this.state.data.votes} placeholder="Enter Votes..." onChange={this.printdata} />
                                <label className=" label-text year">Year</label>
                                <input type="number" className="input-small input-area year" name="year"
                                    min="1990-03" placeholder="Enter year..." value={this.state.data.year} onChange={this.printdata} />
                            </div>
                            <label className="email label-text">Gross_Earning_in_Mil</label>
                            <input className="email input-long input-area" type="number" name="gross" placeholder="" step='0.01' value={this.state.data.gross} onChange={this.printdata} />
                            <Link to="/movies">
                                <button className='form-submit' type='submit' >Submit</button>
                            </Link>
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

export default Updatemovie;
