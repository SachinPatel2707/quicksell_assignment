import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import "./column.css"
import Task from '../Task/task'
import { AlertCircle, Plus, MoreHorizontal, Flag, Circle, Disc, CheckCircle, XCircle } from 'react-feather'
import ProfilePic from '../ProfilePic/profilePic'

const Column = (props) => {
    const [colName, setColName] = useState('')
    const [tasks, setTasks] = useState([])
    const [svg, setSvg] = useState('')

    let selectedGrouping = useSelector((store) => store.filters.selectedFilters.Grouping.toLowerCase())
    selectedGrouping = selectedGrouping == "user" ? "userId" : selectedGrouping
    const users = useSelector((store) => store.board.users)
    const priorities = useSelector((store) => store.common.priorities)

    useEffect(() => {
        let color = ''
        const idToUserName = (id) => {
            const user = users.filter((user) => user.id === id)
            if (user.length > 0) return user[0].name
        }
        const priorityToName = (pr) => {
            const priority = priorities.filter((priority) => priority.id == pr)
            if (priority.length > 0) {
                color = priority[0].color
                return priority[0].label
            }
        }

        const getSvg = () => {
            if (selectedGrouping == 'userId') {
                let dp = <ProfilePic userId = {props.colName} />
                return dp
            }
            if (selectedGrouping == 'priority') {
                let dp = <Flag color = {color} size = {14}/>
                return dp
            }
            
            switch(props.colName) {
                case 'Todo':
                    return <Circle color = "#ffcc00"/>
                case 'In progress':
                    return <Disc color = "orange"/>
                case 'Done':
                    return <CheckCircle color = "green"/>
                case 'Canceled':
                    return <XCircle />
                default:
                    return <AlertCircle color = "red"/>
            }
        }
        
        // need to change column names from userId -> userName
        // and priority number -> priority name
        setColName((selectedGrouping == 'userId') ? idToUserName(props.colName) : 
                   (selectedGrouping == 'priority') ? priorityToName(props.colName) : props.colName)
        setTasks(props.tasks ? props.tasks : [])
        setSvg(getSvg())
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
            { tasks.length > 0 && tasks.map((task) => <Task key = {task.id} data = {task}/>) }
        </div>
    )
}

export default Column