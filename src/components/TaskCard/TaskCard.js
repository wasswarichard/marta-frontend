import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import config from "../../Helpers/config.json";
import profilePicture from "../../images/image.jpg";
import "font-awesome/css/font-awesome.min.css";
import store from "../../store/store";

const TaskCard = (task) => {
    const status = store.getState().status;
    const [isLoading, setIsLoading] = useState(false);
    const [activeTask, setActiveTask] = useState('');

    const calculateAge = (task) =>{
        const ageDifMs = Date.now() - new Date(task.dob);
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() -1970)
    }
    const age = calculateAge(task);
    const submitRequest = async () => {
        setIsLoading(true);
        await axios.put(`${config.apiUrl}/users/v1a/user/update`, {...task})
            .then(response => {
                response.data ? setIsLoading(false) : setIsLoading(true)
            });
    };

    return (
        <div className="taskCard" >
            <div className="taskCard-header">
                <span className="match">100% Match</span>
                {task.name} , {age}
            </div>
            <hr/>
            <div className="taskCard-body">
                <div className="taskCard-profile">
                    <img src= {profilePicture} className="taskCard-image" alt="profile picture"/>
                </div>
                <div className="taskCard-info">
                    <label className="label">Experience in care: {task.id}</label>
                    <label className="label"> German Skills:  {task.language}</label>
                    <label className="label"> Smoking:  {task.smoke}</label>
                    <label className="label"> Next availability: {new Date(task.nextavail).toLocaleDateString()}</label>
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