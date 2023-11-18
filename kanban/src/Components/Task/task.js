import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./task.css"
import ProfilePic from '../ProfilePic/profilePic'
import { CheckCircle, Circle, Flag } from 'react-feather'
import { toggleStatus } from '../Board/boardSlice'

const Task = (props) => {
    const [task, setTask] = useState(props.data)
    const [svg, setSvg] = useState('')
    
    let selectedGrouping = useSelector((store) => store.filters.selectedFilters.Grouping.toLowerCase())
    selectedGrouping = selectedGrouping == "user" ? "userId" : selectedGrouping
    const priorities = useSelector((store) => store.common.priorities)
    const dispatch = useDispatch()

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
                <div className = "task-title">
                    <div className = "task-title-svg" onClick = {() => {
                            dispatch(toggleStatus(task.id))}
                        }>
                        { (task.status == 'Done' && selectedGrouping != 'status') && <CheckCircle color = "green" size = {12}/> }
                        { (task.status != 'Done' && selectedGrouping != 'status') && <Circle color = "grey" size = {12}/> }
                    </div>
                    <p>{ task.title }</p> 
                </div>
                <div className = {`task-footer ${selectedGrouping == 'priority' ? 'remove-column-gap' : ''}`}>
                    <div>{(selectedGrouping != 'priority') && svg }</div>
                    <div className = "task-footer-tags">
                        { task.tag.map((tag) => <p key = {tag}>{tag}</p>) }
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