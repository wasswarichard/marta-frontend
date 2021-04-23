import React from 'react';
import TaskCard from "../TaskCard/TaskCard";

const BoardColumn = (props) => {
    return (
        <div className="boardColumn">
            <header className="boardColumn-header"><h1 className="boardColumn-title">{ props.title }</h1></header>
            <div className="boardColumn-taskList">
                { props.tasks.map( (task) => {
                    return(
                        <TaskCard key={task.id} task={task} socket={props.socket}/>
                        )
                } )}
            </div>
        </div>
    )
}
export default BoardColumn;