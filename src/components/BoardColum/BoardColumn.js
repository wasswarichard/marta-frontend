import React, {useState, useEffect} from 'react';
import TaskCard from "../TaskCard/TaskCard";

const BoardColumn = (props) => {
    return (
        <div className="boardColumn">
            <header className="boardColumn-header"><h1 className="boardColumn-title">{ props.title }</h1></header>
            <div className="boardColumn-taskList">
                { props.tasks.map( (task) => <TaskCard {...task} /> )}
            </div>
        </div>
    )
}
export default BoardColumn;