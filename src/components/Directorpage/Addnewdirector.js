import React, { Component } from 'react';
import '../../App.css'
import { Link } from 'react-router-dom'
var url = 'http://localhost:8081/api/directors/'

class Addnewdirector extends Component {
    componentDidMount() {
    }
    state = {
        'Director': ''
    }
    addDirector = async (data) => {
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
        console.log(e.target[0].value);
        await this.setState({ Director: e.target[0].value });
        console.log(this.state)
        console.log(JSON.stringify(this.state))
        this.addDirector(this.state)
    }

    render() {
        return (
            <div id="edit-popup-layout">
                <form onSubmit={this.printdata}>
                    <div className="form-director-title">
                        New Director Details
                            </div>
                    <div className="name">
                        <label className="input-movie-name label-text dir-form-text ">Title</label>
                        <input className="input-movie-name input-long dir-form-text input-area" type="text" name="title" placeholder="Director Name" required />
                    </div>
                    <button className='form-submit' type='submit' >Submit</button>
                    <Link to="/directors">
                        <button className='back' type='button' >Back</button>
                    </Link >
                </form>

            </div>
        )
    }
}
export default Addnewdirector;