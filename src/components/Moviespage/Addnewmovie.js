import React, { Component } from 'react';
import '../App.css'
class Addnewmovie extends Component {

    render() {
        const editPopupStyle = {
            display: "none",
            // background: ''
        };
        return (
            <div id="edit-popup-layout"
                style={editPopupStyle} >
                <form className='donation-form'>
                    <div className="main">
                        <div className="personal-info-area">
                            <div className="form-title info-title">
                                New Movie Details
                            </div>
                            <div className="name">
                                <label className="input-movie-name label-text ">Title</label>
                                <input className="input-movie-name input-long input-area" type="text" name="moviename" placeholder="Movie Name" required />
                                <label className="input-last-name label-text ">Actor</label>
                                <input className="input-last-name input-medium  input-area" type="text" name="actorname" placeholder="Actor name" />
                                <label className="input-last-name label-text ">Director</label>
                                <input className="input-last-name input-medium  input-area" type="text" name="directorname" placeholder="Director name" />
                                <label className="address1 label-text">Description</label>
                                <input className="address1 input-long input-area" type="text" name="description" placeholder="Description" />
                            </div>
                            <div className="address2">
                                <label className=" label-text state">Genre</label>
                                <select className=" input-small input-area state" name="None" required>
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
                            </div>
                            <label className="email label-text">Gross_Earning_in_Mil</label>
                            <input className="email input-long input-area" type="text" name="grossearning" placeholder="" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Addnewmovie;