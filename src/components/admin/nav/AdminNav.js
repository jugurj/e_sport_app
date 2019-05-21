import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { firebase } from '../../../firebase';

const AdminNav = () => {
    
    const links = [
        {
            title: 'Matches',
            linkTo: '/admin_matches'
        },
        {
            title: 'Add Match',
            linkTo: '/admin_matches/add_match'
        },
        {
            title: 'Players',
            linkTo: '/admin_players'
        },
        {
            title: 'Add Player',
            linkTo: '/admin_players/add_player'
        }
    ]

    const renderItems = () => {
        return (
            links.map(link => (
                <Link to={link.linkTo} key={link.title}>
                    <ListItem button className="list_item">
                        {link.title}
                    </ListItem>
                </Link>
            ))
        )
    }

    const logOutHandler = () => {
        firebase.auth().signOut().then(() => {
            console.log("Log out successfull.")
        },(error) => {
            console.log("Error when logged out.")
        })
    }
    
    return (
        <div>
            {renderItems()}
            <ListItem button className="list_item" onClick={() => logOutHandler()}>
                Log Out
            </ListItem>
        </div>
    );
};

export default AdminNav;