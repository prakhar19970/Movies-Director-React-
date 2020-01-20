import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var url = 'http://localhost:8081/api/directors/'

class Singledirectors extends Component {
    componentDidMount() {
        this.singledirector();
    }

    state = {
        data: {
            id: 0,
            Director: ''
        },
    }
    singledirector = () => {
        const obj = this.props.match.params
        console.log(obj.id)
        fetch(url + obj.id).then(res => res.json()).then(data => {
            console.log(data.id);
            console.log(data.Director)
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

    render() {
        if (!this.state.data) {
            return null;
        }
        return (
            <div className='director-block'>
                <div className='list-area-director'>
                    <p>{this.state.data.id}</p>
                    <p> Director: {this.state.data.Director}</p>
                </div>
            </div>
        )
    }
}
export default Singledirectors;