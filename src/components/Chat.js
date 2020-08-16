import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import InfoIcon from '@material-ui/icons/Info'
import db from '../firebase-config'
import Messages from './Messages'
import ChatInput from './ChatInput'
import './Chat.css'

function Chat() {

    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] =  useState(null)
    const [messageDetails, setMessageDetails] = useState([])

    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot((snapshot)=>(
                setRoomDetails(
                    snapshot.data()
                )
            ))
        }

        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => (
                setMessageDetails( 
                    snapshot.docs.map(doc => doc.data())
                )
            ))

    },[roomId])

    return (
        <div className='chat'>
            <div className='chat__header'>
                <div className='chat__headerLeft'>
                    <h4 className='chat__channelName'>
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderIcon />
                    </h4>
                </div>
                <div className='chat__headerRight'>
                    <p>
                        <InfoIcon/> Details
                    </p>
                </div>
            </div>
            <div className='chat__messages'>
                {
                    messageDetails.map(({ message, timestamp, user , userImage }) => (
                        <Messages 
                            message = {message}
                            timestamp={timestamp}
                            user={user}
                            userImage={userImage}
                        />
                    ))
                }
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
        </div>
    )
}

export default Chat
