import React, {useState, useEffect} from 'react';
import "./Board.sass"
import BoardColumn from "../BoardColum/BoardColumn";
import axios from "axios";
import config from "../../Helpers/config.json";
import data from "../../data";
const Board = () => {
    const status =  ["SELECTION", "PROPOSITION", "CONTRACT_SIGNATURES", "DONE"]
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const loadUsers =  () => {
           setUsers(data.tasks)
        }
        loadUsers();

    }, []);

    return (
        <div className="board">
            <BoardColumn title = "SELECTION"  tasks = { users.filter( task => {return task.status === status[0]	} )} />
            <BoardColumn title = "PROPOSITION" tasks = { users.filter( task => {return task.status === status[1] } )} />
            <BoardColumn title = "CONTRACT SIGNATURES" tasks = { users.filter( task => {return task.status === status[2]	} )} />
            <BoardColumn  title = "CLOSING THE OPPORTUNITY" tasks = { users.filter( task => {return task.status === status[3]	} )} />
        </div>
    );
}
export default Board;