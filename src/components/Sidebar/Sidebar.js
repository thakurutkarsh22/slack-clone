import React from 'react'
import './Sidebar.css';
import FibreManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption/SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Ut Programmer</h2>
                    <h3>
                        <FibreManualRecordIcon />
                        Utkarsh Thakur
                    </h3>
                </div>
                <CreateIcon />
            </div>                          
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption title="Threads"/>
        </div>
    )
}

export default Sidebar;
