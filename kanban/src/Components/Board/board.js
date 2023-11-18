import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./board.css"
import Column from '../Column/column'

const Board = () => {
    const [view, setView] = useState({})
    const tickets = useSelector((store) => store.board.tickets)
    const filters = useSelector((store) => store.filters.selectedFilters)
    let selectedGrouping = useSelector((store) => store.filters.selectedFilters.Grouping.toLowerCase())
    const selectedOrdering = useSelector((store) => store.filters.selectedFilters.Ordering.toLowerCase())
    selectedGrouping = selectedGrouping == "user" ? "userId" : selectedGrouping

    useEffect(() => {
        const groupAndOrderTickets = () => {
            let view = tickets.reduce((acc, ticket) => {
                acc[ticket[selectedGrouping]] = acc[ticket[selectedGrouping]] || [];
                acc[ticket[selectedGrouping]].push(ticket)
                return acc
            }, {})
            
            for (const attr in view) {
                if (selectedOrdering == 'title') {
                    view[attr].sort((a, b) => a[selectedOrdering].toLowerCase().localeCompare(b[selectedOrdering].toLowerCase()))
                }
                else
                    view[attr].sort((a, b) => a[selectedOrdering] - b[selectedOrdering])
            }
            return view
        }

        const view = groupAndOrderTickets()
        setView(view)
        console.log(view)
    }, [tickets, filters])

    return (
        <div className = "board-container">
            { Object.entries(view).map(([key, value]) => (
                <Column key = {key} colName = {key} tasks = {value}/>
            )) }
        </div>
    )
}

export default Board