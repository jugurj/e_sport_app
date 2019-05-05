import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import { Logo } from '../utils/icons';

const Header = () => {
    return (
        <AppBar
            position="fixed"
            style={{
                background: '#353535',
                boxShadow: 'none',
                padding: '10px 0px',
                borderBottom: '2px solid #ff9000'
            }}
        >
            <Toolbar style={{ display: 'flex' }}>
                <div style={{ flexGrow: '1' }}>
                    <div className="header_logo">
                        <Logo
                            link="true"
                            linkTo="/"
                            width="70px"
                            height="70px"
                        />
                    </div>
                </div>
                <Link to="/team">
                    <Button color="inherit">TEAM</Button>
                </Link>
                <Link to="/matches">
                    <Button color="inherit">MATCHES</Button>
                </Link>
                <Link to="/sign-in">
                    <Button color="inherit">SIGN IN</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;