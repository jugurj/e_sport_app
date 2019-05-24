import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebasePlayers } from '../../../firebase';
import { firebaseLooper } from '../../utils/misc';
import AdminLayout from '../../../hoc/AdminLayout';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import EditIcon from '@material-ui/icons/Edit';

class AdminPlayers extends Component {

    state = {
        isloading: true,
        players: []
    }

    componentDidMount() {
        firebasePlayers.once('value').then((snapshot) => {
            const players = firebaseLooper(snapshot);
            this.setState({
                isloading: false,
                players: players.reverse()
            })
        })
    }

    render() {
        return (
            <AdminLayout>
                <div>
                    <Paper style={{
                        borderRadius: '0',
                        boxShadow: 'none'
                    }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="admin_table_head">First Name</TableCell>
                                    <TableCell className="admin_table_head">Last Name</TableCell>
                                    <TableCell className="admin_table_head">Number</TableCell>
                                    <TableCell className="admin_table_head">Position</TableCell>
                                    <TableCell className="admin_table_head"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {   this.state.players ?
                                    this.state.players.map((player, i) => (
                                        <TableRow key={i} className="admin_table_row">
                                            <TableCell>
                                                {player.name}
                                            </TableCell>
                                            <TableCell>
                                                {player.lastname}
                                            </TableCell>
                                            <TableCell>
                                                {player.number}
                                            </TableCell>
                                            <TableCell>
                                                {player.position}
                                            </TableCell>
                                            <TableCell>
                                                <Link className="edit_link" to={`/admin_players/add_player/${player.id}`}>
                                                    <EditIcon/>
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    : null
                                }
                            </TableBody>
                        </Table>
                    </Paper>

                    {!this.state.players ? <div className="admin_nomatches_msg">There are no players</div> : null}

                    <div className="admin_progress">
                        { this.state.isloading ?
                            <CircularProgress color="inherit"/>
                        : null
                        }
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default AdminPlayers;