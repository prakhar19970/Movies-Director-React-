import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var url = 'http://localhost:8081/api/directors/'

class Updatedirector extends Component {
    componentDidMount() {
        this.singledirector();
        //     console.log("hello")
    }
    state = {
        data: {
            'id': 0,
            'Director': '',
        }
    }
    singledirector = () => {
        const obj = this.props.match.params
        console.log(obj.id)
        fetch(url + obj.id).then(res => res.json()).then(data => {
            this.setState({
                data: {
                    id: data.id,
                    Director: data.Director
                }
            });
        }).catch(error => {
            this.setState({
                data: 0,
            })
        })
    }

    addDirector = async (data) => {
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
    printdata = async (e) => {
        console.log('its working')
        console.log(e.target)
        await this.setState({ data: { Director: e.target.value } });

        this.addDirector(this.state.data)
    }
    render() {
        if (!this.state.data) {
            return null;
        }
        return (
            <div id="edit-popup-layout">
                <form >
                    <div className="form-director-title">
                        New Director Details
                            </div>
                    <div className="name">
                        <label className="input-movie-name label-text dir-form-text ">Title</label>
                        <input className="input-movie-name input-long dir-form-text input-area" type="text" name="title" placeholder="Director Name" required defaultValue={this.state.data.Director} onChange={this.printdata} />
                    </div>
                    <Link to="/directors">
                        <button className='form-submit' type='submit' >Submit</button>
                    </Link>
                    <Link to="/directors">
                        <button className='back' type='button' >Back</button>
                    </Link >
                </form>

            </div>
        )
    }
}
export default Updatedirector;