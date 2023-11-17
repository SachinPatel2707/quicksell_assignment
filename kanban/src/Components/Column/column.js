import React, { Component } from 'react'
import "./column.css"
import Task from '../Task/task'
import { AlertCircle } from 'react-feather'

const Column = () => {

    return (
        <div className = "column-container">
            <div className = "column-title">
                <p><AlertCircle /></p>
                <p id = "title">Title</p>
                <p>C</p>
                <p>+</p>
                <p>...</p>
            </div>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    )
}

export default Column