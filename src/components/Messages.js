import React from 'react'
import './Messages.css'

function Messages({ message, user, userImage, timestamp}) {
    return (
        <div className='message'>
            <img src={userImage} />
            <div className='message__info'>
                <h4>{user}  
                <span className='message__timestamp'>{new Date(timestamp).toDateString()}
                </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Messages
