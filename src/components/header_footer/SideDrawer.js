import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { NavLink  } from 'react-router-dom';

const SideDrawer = (props) => {

    const handlePressed = () => {
        props.onClose(false)
    }

  return (
    <div>
      <Drawer
        anchor="right"
        open={props.open}
        onClose={() => props.onClose(false)}
        className="custom_drawer"
      >
          <List component="nav">

            <NavLink to="/" exact activeClassName="active_drawer_item">
                <ListItem button onClick={() => handlePressed()}>
                    <ListItemText primary="HOME"/>
                </ListItem>
            </NavLink>

            <NavLink to="/team" activeClassName="active_drawer_item">
                <ListItem button onClick={() => handlePressed()}>
                    <ListItemText primary="TEAM" />
                </ListItem>
            </NavLink>

            <NavLink to="/matches" activeClassName="active_drawer_item">
                <ListItem button onClick={() => handlePressed()}>
                    <ListItemText primary="MATCHES" />
                </ListItem>
            </NavLink>
              
            <NavLink to="/sign_in" activeClassName="active_drawer_item">
                <ListItem button onClick={() => handlePressed()}>
                    <ListItemText primary="ADMIN" />
                </ListItem>
            </NavLink>

          </List>
      </Drawer>
    </div>
  )
}

export default SideDrawer;