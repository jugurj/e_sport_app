import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';

import { NavLink  } from 'react-router-dom';
import { Logo } from '../utils/icons';

class Header extends Component {

    state =  {
        width: 0,
        height: 0,
        drawerOpen: false
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    toggleDrawer = (value) => {
        this.setState({
          drawerOpen: value
        })
    }

    render () {
        return (
            <AppBar
                position="fixed"
                style={{
                    background: '#111821',
                    height: '80px'
                }}
            >
                <Toolbar style={{padding: '0', height: '80px', display: 'flex'}}>
                    <div style={{flexGrow: '1'}}>
                        <Logo
                            link="true"
                            linkTo="/"
                            width="90px"
                            height="100px"
                            classTag="img_cover_header"
                        />
                    </div>
                    { this.state.width > 680 ?
                        <React.Fragment>
                            <div className="header_item_container">
                                <NavLink to="/team" activeClassName="active_item" className="header_item">
                                    <span>TEAM</span>
                                </NavLink>
                            </div>
                            <div className="header_item_container">
                                <NavLink to="/matches" activeClassName="active_item" className="header_item"> 
                                    <span>MATCHES</span>
                                </NavLink>
                            </div>
                            <div className="header_item_container">
                                <NavLink to="/sign_in" activeClassName="active_item" className="header_item">
                                    <span>ADMIN</span>
                                </NavLink>
                            </div>
                        </React.Fragment>
                        :   <MenuIcon
                                style={{marginRight: '20px'}}
                                onClick={() => this.toggleDrawer(true)}
                            />
                            
                    }
                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value) => this.toggleDrawer(value)}
                    />
                </Toolbar>
            </AppBar>
        );
    }
};

export default Header;