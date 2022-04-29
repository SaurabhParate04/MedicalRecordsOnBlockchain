import React, { useState } from 'react'
import UserContext from './UserContext'

const UserState = ({ children }) => {
    const [loggedIn, setloggedIn] = useState(localStorage.getItem('') ? true : false);

    return (
        <UserContext.Provider value={{ loggedIn, setloggedIn }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserState