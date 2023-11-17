import React, { Component } from 'react'
import "./board.css"
import Column from '../Column/column'

const Board = () => {

    return (
        <div className = "board-container">
            <Column />
            <Column />
            <Column />
            <Column />
        </div>
    )
}

export default Board