import React, { Component } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

export class Maticon1 extends Component {
    render() {
        return (
            <div>
                <AppBar className="mrg" position="static">
                    <Toolbar>
                        <div style={{ 'paddingLeft': "600px" }}>   Material UI Social media Icons</div>
                    </Toolbar>
                </AppBar>
                <FacebookIcon style={{ 'color': "White" }} /><br></br>
                <TwitterIcon /> <br></br>
                <LinkedInIcon /><br></br>
                <MailIcon /><br></br>
                <InstagramIcon /><br></br>
                <YouTubeIcon style={{ 'color': "Red" }} /><br></br>

            </div>
        )
    }
}

export default Maticon1 