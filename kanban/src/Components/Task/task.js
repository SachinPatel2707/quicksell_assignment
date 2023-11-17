import React, { Component } from 'react'
import "./task.css"
import { MoreHorizontal } from 'react-feather'

const Task = () => {

    return (
        <div className = "task-container">
            <div className = "task-main">
                <div className = "task-id">Task ID</div>
                <p>
                    hello dfsdfdfads  dflsajd  jldflskdjf lk  dslfjslfjdsl dslj fldskjls jl jdlfjs
                </p> 
                <div className = "task-footer">
                    <MoreHorizontal />
                    <p>Feature-type</p>
                </div>
            </div>
            <div className = "task-user-profile">
                dp
            </div>
        </div>
    )
}

export default Task