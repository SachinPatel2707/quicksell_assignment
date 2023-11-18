import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./board.css"
import Column from '../Column/column'

const Board = () => {
    const [view, setView] = useState({})
    const [cols, setCols] = useState([])
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
                    view[attr].sort((a, b) => b[selectedOrdering] - a[selectedOrdering])
            }
            return view
        }
        
        // order of groups as shown in the requirements
        const orderCols = (cols) => {
            if (selectedGrouping == 'priority') {
                cols = ['0', '4', '3', '2', '1']
            }
            else if (selectedGrouping == 'status') {
                cols = ['Backlog', 'Todo', 'In progress', 'Done', 'Canceled']
            }
            return cols;
        }

        const view = groupAndOrderTickets()
        setView(view)
        const cols = orderCols(Object.keys(view))
        setCols(cols)
    }, [filters, tickets])

    return (
        <div className = "board-container">
            { cols.map((col) => {
                return <Column key = {col} colName = {col} tasks = {view[col]}/>
            }) }
        </div>
    )
}

export default Board