import React from 'react'
import { Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpIcon from '@material-ui/icons/Help';
import { useStateValue } from '../StateProvider'

import "./Header.css"

function Header() {

    const [{user}, dispatch] = useStateValue()

    return (
        <div className='header'>
            {/* Header left */}
            <div className='header__left'>
                    <Avatar         //Avatar for logged in user
                        className='header__avatar'
                        src={user?.photoURL}
                        alt={user?.displayName}
                    />
                    <AccessTimeIcon />      {/* time icon */}
            </div>

            {/* Header center */}
            <div className='header__center'>
                <SearchIcon />      {/* search icon */}
                <input  placeholder='enter the search'/>       {/* input */}
            </div>

            {/* Header right */}
            <div className='header__right'>
                <HelpIcon />        {/* help icon */}
            </div>
        </div>
    )
}

export default Header
