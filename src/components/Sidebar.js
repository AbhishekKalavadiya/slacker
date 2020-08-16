import React, { useState, useEffect } from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from './SidebarOption'
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FilterIcon from '@material-ui/icons/Filter';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddBoxIcon from '@material-ui/icons/AddBox'
import db from '../firebase-config'
import { useStateValue } from '../StateProvider'

import './Sidebar.css'

function Sidebar() {

    const [channels, setChannels] = useState([])
    const [{user}] = useStateValue()

    //run this when the sidebar component load
    useEffect(() => {
        db.collection("rooms").onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ))
    }, [])

    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__info'>
                    <h2>{user?.displayName}</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.email}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & Reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
            <SidebarOption Icon={BookmarksIcon} title="Channel Browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & User groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FilterIcon} title="File Browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show Less"/>
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr />
            <SidebarOption Icon={AddBoxIcon} addChannelOption title='Add Channel' />
            
            {
                channels.map(channel => (
                    <SidebarOption title={channel.name} id={channel.id}/>    
                ))
            }
        </div>
    )
}

export default Sidebar
