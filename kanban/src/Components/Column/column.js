import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import "./column.css"
import Task from '../Task/task'
import { AlertCircle, Plus, MoreHorizontal } from 'react-feather'

const Column = (props) => {
    const [colName, setColName] = useState('')
    const [tasks, setTasks] = useState([])
    const svg = <MoreHorizontal />

    useEffect(() => {
        setColName(props.colName)
        setTasks(props.tasks)
    }, [props])

    return (
        <div className = "column-container">
            <div className = "column-title">
                <p>{ svg }</p>
                <p id = "title">{colName}</p>
                <p>{tasks.length}</p>
                <p><Plus /></p>
                <p><MoreHorizontal /></p>
            </div>
            { tasks.map((task) => <Task key = {task.id} data = {task}/>) }
        </div>
    )
}

export default Column