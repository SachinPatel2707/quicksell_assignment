import React, { useState, useEffect } from 'react'
import "./task.css"
import { MoreHorizontal } from 'react-feather'

const Task = (props) => {
    const [task, setTask] = useState(props.data)
    useEffect(() => {
        setTask(props.data)
    }, [props])
    return (
        <div className = "task-container">
            <div className = "task-main">
                <div className = "task-id">{task.id}</div>
                <p>{ task.title }</p> 
                <div className = "task-footer">
                    <MoreHorizontal />
                    { task.tag.map((tag) => <p>{tag}</p>) }
                </div>
            </div>
            <div className = "task-user-profile">
                dp
            </div>
        </div>
    )
}

export default Task