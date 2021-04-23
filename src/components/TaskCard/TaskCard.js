import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import io from 'socket.io-client';
import config from "../../Helpers/config.json";
import profilePicture from "../../images/image.jpg";
import "font-awesome/css/font-awesome.min.css";
import store from "../../store/store";
import {userStatusUpdated} from "../../actions/actions";

const TaskCard = (props) => {
    const socket = props.socket;
    const status = store.getState().status;
    const [isDeclining, setIsDeclining] = useState(false);
    const [isApproving, setIsApproving] = useState(false);
    const [disableApprove, setDisableApprove] = useState(false);
    const [disableDecline, setDisableDecline] = useState(false)

    useEffect(() => {
        if(status.indexOf(props.task.status) === 0 ) { setDisableDecline(true)}
        if(status.indexOf(props.task.status) === 3 ) { setDisableApprove(true)}
    });
    const approveRequest = async () => {
        setIsApproving(true)
        setDisableApprove(true);
        setDisableDecline(true);
        const index = status.indexOf(props.task.status);
        await axios.put(`${config.apiUrl}/users/v1a/user/update`, {
            ...props.task,
            status : status[index + 1]
        }).then(response => {
            response.data ? setIsApproving(false) : setIsApproving(true)
            socket.emit('statusUpdated', {...response.data.data}, (error) => {})
            store.dispatch(userStatusUpdated({...response.data.data}))
        });
    }

    const declineRequest = async () => {
        setIsDeclining(true)
        const index = status.indexOf(props.task.status);
        await axios.put(`${config.apiUrl}/users/v1a/user/update`, {
            ...props.task,
            status : status[index - 1]
        }).then(response => {
            response.data ? setIsDeclining(false) : setIsDeclining(true)
        });

    }

    return (
        <div className="taskCard" >
            <div className="taskCard-header">
                <span className="match">100% Match</span>
                {props.task.name} , 20
            </div>
            <hr/>
            <div className="taskCard-body">
                <div className="taskCard-profile">
                    <img src= {profilePicture} className="taskCard-image" alt="profile picture"/>
                </div>
                <div className="taskCard-info">
                    <label className="label">Experience in care: {props.task.id}</label>
                    <label className="label"> German Skills:  {props.task.language}</label>
                    <label className="label"> Smoking:  {props.task.smoke}</label>
                    <label className="label"> Next availability: {new Date(props.task.nextavail).toLocaleDateString()}</label>
                </div>
                <div>
                    <button type="button" className="btn btn-danger" onClick={declineRequest} disabled={disableDecline}>
                        {isDeclining && <i className="fa fa-refresh fa-spin"/>}
                        {isDeclining && <span style={{marginLeft: '5px'}}>Declining</span>}
                        {!isDeclining && <span>Decline</span>}
                    </button>
                    <button type="button" className="btn btn-success" onClick={approveRequest} disabled={disableApprove}>
                        {isApproving && <i className="fa fa-refresh fa-spin"/>}
                        {isApproving && <span style={{marginLeft: '5px'}}>Approving</span>}
                        {!isApproving && <span>Approve</span>}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TaskCard;