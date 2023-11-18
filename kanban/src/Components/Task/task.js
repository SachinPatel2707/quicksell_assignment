import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import "./task.css"
import ProfilePic from '../ProfilePic/profilePic'
import { Flag } from 'react-feather'

const Task = (props) => {
    const [task, setTask] = useState(props.data)
    const [svg, setSvg] = useState('')
    
    let selectedGrouping = useSelector((store) => store.filters.selectedFilters.Grouping.toLowerCase())
    selectedGrouping = selectedGrouping == "user" ? "userId" : selectedGrouping
    const priorities = useSelector((store) => store.common.priorities)

    useEffect(() => {
        // find the color of icon depending on priority
        const getColor = () => {
            const priority = priorities.filter((priority) => priority.id == task.priority)
            if (priority.length > 0) return priority[0].color
        }
        const getSvg = () => {
            return <Flag color = {color} size = {14}/>
        }

        setTask(props.data)
        const color = getColor()
        setSvg(getSvg())
    }, [props])

    return (
        <div className = "task-container">
            <div className = "task-main">
                <div className = "task-id">{task.id}</div>
                <p>{ task.title }</p> 
                <div className = {`task-footer ${selectedGrouping == 'priority' ? 'remove-column-gap' : ''}`}>
                    <div>{(selectedGrouping != 'priority') && svg }</div>
                    <div class = "task-footer-tags">
                        { task.tag.map((tag) => <p>{tag}</p>) }
                    </div>
                </div>
            </div>
            {(selectedGrouping != 'userId') && <div className = "task-user-profile">
                <ProfilePic userId = {task.userId}/>
            </div>}
        </div>
    )
}

export default Task