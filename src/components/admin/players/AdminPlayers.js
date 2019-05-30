import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebasePlayers } from '../../../firebase';
import { firebaseLooper } from '../../utils/misc';
import AdminLayout from '../../../hoc/AdminLayout';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import EditIcon from '@material-ui/icons/Edit';

class AdminPlayers extends Component {

    state = {
        isloading: true,
        players: [],
        sortedPlayers: [],
        orderBy: 'asc',
        sortProperty: ''
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        firebasePlayers.once('value').then((snapshot) => {
            const players = firebaseLooper(snapshot);
            this.setState({
                isloading: false,
                players: players.reverse(),
                sortedPlayers: players.reverse()
            })
        })
    }

    desc = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
          return -1;
        }
        if (b[orderBy] > a[orderBy]) {
          return 1;
        }
        return 0;
    }

    stableSort = (array, cmp) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
          const order = cmp(a[0], b[0]);
          if (order !== 0) return order;
          return a[1] - b[1];
        });
        return stabilizedThis.map(el => el[0]);
      }
      
    getSorting = (order, orderBy) => {
        return order === 'desc' ? (a, b) => this.desc(a, b, orderBy) : (a, b) => -this.desc(a, b, orderBy);
    }

    handleOnSort = async (property) => {
        if (!this.state.isloading) {

            if (this.state.sortProperty === property) {
                this.state.orderBy === 'desc' ?
                    await this.setState({orderBy: 'asc'})
                    : await this.setState({orderBy: 'desc'})
            } else {
                await this.setState({orderBy: 'asc', sortProperty: property});
            }

            const sortedPlayers = this.stableSort(this.state.players, this.getSorting(this.state.orderBy, property));
            await this.setState({ sortedPlayers});
        }
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
                                    <TableCell className="admin_table_head">
                                        <TableSortLabel
                                            active={this.state.sortProperty === 'name'}
                                            direction={this.state.orderBy}
                                            onClick={() => this.handleOnSort('name')}
                                        > First Name
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell className="admin_table_head">
                                        <TableSortLabel
                                            active={this.state.sortProperty === 'lastname'}
                                            direction={this.state.orderBy}
                                            onClick={() => this.handleOnSort('lastname')}
                                        > Last Name
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell className="admin_table_head">
                                        <TableSortLabel
                                            active={this.state.sortProperty === 'nickname'}
                                            direction={this.state.orderBy}
                                            onClick={() => this.handleOnSort('nickname')}
                                        > Nickname
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell className="admin_table_head">
                                        <TableSortLabel
                                            active={this.state.sortProperty === 'age'}
                                            direction={this.state.orderBy}
                                            onClick={() => this.handleOnSort('age')}
                                        > Age
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell className="admin_table_head">
                                        <TableSortLabel
                                            active={this.state.sortProperty === 'game'}
                                            direction={this.state.orderBy}
                                            onClick={() => this.handleOnSort('game')}
                                        > Game
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell className="admin_table_head">
                                        <TableSortLabel
                                            active={this.state.sortProperty === 'country'}
                                            direction={this.state.orderBy}
                                            onClick={() => this.handleOnSort('country')}
                                        > Country
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell className="admin_table_head"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {   this.state.sortedPlayers ?
                                    this.state.sortedPlayers.map((player, i) => (
                                        <TableRow key={i} className="admin_table_row">
                                            <TableCell>
                                                {player.name}
                                            </TableCell>
                                            <TableCell>
                                                {player.lastname}
                                            </TableCell>
                                            <TableCell>
                                                {player.nickname}
                                            </TableCell>
                                            <TableCell>
                                                {player.age}
                                            </TableCell>
                                            <TableCell>
                                                {player.game}
                                            </TableCell>
                                            <TableCell>
                                                {player.country}
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

                    {!this.state.sortedPlayers ? <div className="admin_nomatches_msg">There are no players</div> : null}

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