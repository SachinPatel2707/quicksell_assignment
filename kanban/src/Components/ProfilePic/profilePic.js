import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './profilePic.css'

const ProfilePic = (props) => {
    const [initials, setInitials] = useState('')
    const [isActive, setIsActive] = useState(false)
    const users = useSelector((store) => store.board.users)

    useEffect(() => {
        const getInitials = (id) => {
            let user = users.filter((user) => user.id === id)
            if (user.length == 0) return

            user = user[0]
            setIsActive(user.available)
            const names = user.name.split(' ');
            const firstInitial = names[0].charAt(0).toUpperCase();
          
            if (names.length > 1) {
              const lastInitial = names[names.length - 1].charAt(0).toUpperCase();
              return `${firstInitial}${lastInitial}`;
            }
          
            return firstInitial;
        }

        setInitials(getInitials(props.userId))
    }, [props])

    return (
        <div className = "profile-pic">
            <span className = "initials">{initials}</span>
            <span className = {`online-dot ${isActive ? 'green' : ''}`}></span>
        </div>
    )
}

export default ProfilePic