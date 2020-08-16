import React, {useState} from 'react'
import db from '../firebase-config'
import { useStateValue } from '../StateProvider'
import firebase from "firebase"
import './ChatInput.css'


function ChatInput({channelName, channelId}) {

    const [input, setInput] = useState()
    const [{user}] = useStateValue()

    const sendMessage = (e) => {
        e.preventDefault()

        if(channelId){
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestone.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL

            })

        }
        setInput('')
    }

    return (
        <div className='chatInput'>
            <form>
                <input 
                    value={input}
                    placeholder={`Message to #${channelName?.toLowerCase()}`}
                    onChange = {e=>setInput(e.target.value)}
                />
                <button type='submit' onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}

export default ChatInput
