import React, { Component } from 'react';

import { Link } from 'react-router-dom'
var url = 'http://localhost:8081/api/directors/'

class Showdirectors extends Component {
    componentDidMount() {
        this.alldirectors();
    }
    state = {
        directors: [],
        item: ''
    }
    alldirectors = () => {
        return fetch(url).then(data => data.json()).then((res) => {
            console.log(res);
            this.setState({ directors: res })
        });
    }
    dirDelete = (event) => {

        const id = event.target.parentElement.parentElement.parentElement.attributes.position.value;
        console.log(id);
        this.deleteDirector(Number(id));
    }
    deleteDirector = async (data) => {
        await fetch(url + data, {
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
            this.alldirectors();
        }).catch(error => {
            console.log(error);
        });
    }
    render() {
        return (


            < div className="movie-info" >
                <div className="movie-info-button-area">
                    <Link to="/directors/add" >
                        <button className=' movie-info-buttons' type="button">
                            Add Director
                </button>
                    </Link>
                    <Link to="/home">
                        <button className=' movie-info-buttons' type="button">
                            Back
                 </button>
                    </Link>

                </div >
                < div className="director-area" >
                    {
                        this.state.directors.map((data, index) => (
                            <div position={data.id} key={data.id}
                                className='director-block'>

                                <div className='list-area-director'>
                                    <Link className="link-css" to={`/directors/${data.id}`}>
                                        <p>{data.id}</p>
                                        <p> Director: {data.Director}</p>
                                    </Link>
                                </div>
                                <div className="buttons">
                                    <Link to={`/directors/${data.id}/update`}>
                                        <button className="update" onClick={this.onUpdate}>Update</button>
                                    </Link>
                                    <Link to="/directors">
                                        <button className="update delete" onClick={this.dirDelete} >Delete</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </ div>
                ))

    }
</div >
        )
    }
}
export default Showdirectors;