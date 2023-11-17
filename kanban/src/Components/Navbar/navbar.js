import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./navbar.css"
import { ChevronDown, Sliders } from 'react-feather'
import { updateGrouping, updateOrdering } from './navbarSlice'

const Navbar = () => {
    const [showModal, setShowModal] = useState(false)
    const openFilterModal = () => { setShowModal(true) }

    const filterOptions = useSelector((store) => store.filters.filters)
    const selectedGrouping = useSelector((store) => store.filters.selectedFilters.Grouping)
    const selectedOrdering = useSelector((store) => store.filters.selectedFilters.Ordering)
    const dispatch = useDispatch()

    // closes the filter modal if mouse click detected outside the modal
    const closeOnOutsideClick = (event) => {
        if (showModal && !event.target.closest('.navbar-container')) { setShowModal(false) }
    }

    // updates state when filters are changed and,
    // closes the filter modal after ordering is changed
    const handleChange = (filter, e) => {
        if (filter == "Grouping") dispatch(updateGrouping(e.target.value))
        else if (filter == "Ordering") {
            dispatch(updateOrdering(e.target.value))
            setShowModal(false)
        }
    }
    
    useEffect(() => {
        document.addEventListener('click', closeOnOutsideClick);
        return () => {
          document.removeEventListener('click', closeOnOutsideClick);
        };
    }, [showModal]);

    return (
        <div className = "navbar-container">
            <div className = "navbar-dropdown" onClick = {() => openFilterModal()}>
                <Sliders />
                <p>Display</p>
                <ChevronDown />
            </div>
            {showModal && <div className = "navbar-filter-modal">
                <div className = "navbar-filter">
                    <p>Grouping</p>
                    <select value = {selectedGrouping} onChange = {(e) => {handleChange('Grouping', e)}}>
                        {filterOptions.Grouping.map((f) => {
                            return <option key = {f} value = {f}>{f}</option>
                        })}
                    </select>
                </div>
                <div className = "navbar-filter">
                    <p>Ordering</p>
                    <select value = {selectedOrdering} onChange = {(e) => {handleChange('Ordering', e)}}>
                        {filterOptions.Ordering[selectedGrouping].map((f) => {
                            return <option key = {f} value = {f}>{f}</option>
                        })}
                    </select>
                </div>
            </div>}
        </div>
    )
}

export default Navbar

