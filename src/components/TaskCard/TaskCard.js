import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import config from "../../Helpers/config.json";
import profilePicture from "../../images/image.jpg";
import "font-awesome/css/font-awesome.min.css"

const TaskCard = (task) => {
    const [isLoading, setIsLoading] = useState(false);

    const submitRequest = async () => {
        setIsLoading(true);
        await axios.get(`${config.apiUrl}/users/v1a/user`)
            .then(response => {
                response ? setIsLoading(false) : console.log("test")
            });
    };

    return (
        <div className="taskCard" >
            <div className="taskCard-header">
                <span className="match">100% Match</span>
                Wasswa Richard , 28
            </div>
            <hr/>
            <div className="taskCard-body">
                <div className="taskCard-profile">
                    <img src= {profilePicture} className="taskCard-image" alt="profile picture"/>
                </div>
                <div className="taskCard-info">
                    <label>Experience in care: </label>
                    <label> German Skills: </label>
                    <label> Smoking: </label>
                    <label> Next availability: </label>
                </div>
                <div>
                    <button type="button" className="btn btn-danger">Decline</button>
                    <button type="button" className="btn btn-success" onClick={submitRequest} disabled={isLoading}>
                        {isLoading && <i className="fa fa-refresh fa-spin"/>}
                        {isLoading && <span style={{marginLeft: '5px'}}>Approving</span>}
                        {!isLoading && <span>Approve</span>}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TaskCard;