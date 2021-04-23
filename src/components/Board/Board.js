import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import store from "../../store/store";
import "./Board.sass"
import BoardColumn from "../BoardColum/BoardColumn";
import axios from "axios";
import config from "../../Helpers/config.json";

let socket
const Board = () => {
    const state =  store.getState();
    const status =  state.status;
    const [users, setUsers] = useState([]);
    useEffect(() => {
        socket = io(config.apiUrl);
        const loadUsers = async () => {
            await axios.get(`${config.apiUrl}/users/v1a/users`)
                .then(response => {
                    setUsers(response.data)
                });
        };
        loadUsers();
        socket.emit('join', {}, (error) => {});
        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [config.apiUrl]);

    useEffect(() => {
        socket.on('message', (message) => {
            users
                .filter(user => user.id === message.id)
                .map(user => user.status = message.status)
            setUsers(users);
        })

    }, [users])
    return (
        <div className="board">
            <BoardColumn title = "SELECTION"  tasks = { users.filter( task => {return task.status === status[0]	})} socket={socket} />
            <BoardColumn title = "PROPOSITION" tasks = { users.filter( task => {return task.status === status[1] })} socket={socket}/>
            <BoardColumn title = "CONTRACT SIGNATURES" tasks = { users.filter( task => {return task.status === status[2]})} socket={socket}/>
            <BoardColumn  title = "CLOSING THE OPPORTUNITY" tasks = { users.filter( task => {return task.status === status[3]})} socket={socket} />
        </div>
    );
}
export default Board;