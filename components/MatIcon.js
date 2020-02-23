import React, { Component } from 'react'
import Home from '@material-ui/icons/Home';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Notifications, Message, Settings } from '@material-ui/icons';
import ContactsIcon from '@material-ui/icons/Contacts';

export class MatIcon extends Component {
    render() {
        return (
            <div>
                <AppBar className="mrg" position="static">
                    <Toolbar>
                        <Home />
                        <Notifications />
                        <ContactsIcon />
                        <Message/>
                        <Settings/>
                        <div style={{ 'paddingLeft': "600px" }}>   Material UI Icons</div>
                    </Toolbar>
                </AppBar>

                <Home /> Home Icon <br></br>
                <Notifications /> Notification Icon<br></br>
                <ContactsIcon /> Contact <br/><br/>
                <Message/> Message <br/><br/>
                <Settings/> Settings <br/><br/>
            </div>
        )
    }
}

export default MatIcon