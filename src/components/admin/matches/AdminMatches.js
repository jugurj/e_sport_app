import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseMatches } from '../../../firebase';
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

class AdminMatches extends Component {

    state = {
        isloading: true,
        matches: [],
        sortedMatches: [],
        orderBy: 'desc',
        sortProperty: ''
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        firebaseMatches.once('value').then((snapshot) => {
            const matches = firebaseLooper(snapshot);
            this.setState({
                isloading: false,
                matches: matches.reverse(),
                sortedMatches:  matches.reverse()
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
                await this.setState({orderBy: 'desc', sortProperty: property});
            }

            const sortedMatches = this.stableSort(this.state.matches, this.getSorting(this.state.orderBy, property));
            await this.setState({ sortedMatches});
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
                                    <TableCell className="admin_table_head" >
                                        <TableSortLabel
                                            active={this.state.sortProperty === 'date'}
                                            direction={this.state.orderBy}
                                            onClick={() => this.handleOnSort('date')}
                                        > Date
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell className="admin_table_head">Match</TableCell>
                                    <TableCell className="admin_table_head">
                                        <TableSortLabel
                                            active={this.state.sortProperty === 'resultAway'}
                                            direction={this.state.orderBy}
                                            onClick={() => this.handleOnSort('resultAway')}
                                        > Result
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell className="admin_table_head">
                                        <TableSortLabel
                                            active={this.state.sortProperty === 'final'}
                                            direction={this.state.orderBy}
                                            onClick={() => this.handleOnSort('final')}
                                        > Final
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell className="admin_table_head"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {   this.state.sortedMatches ?
                                    this.state.sortedMatches.map((match, i) => (
                                        <TableRow key={i} className="admin_table_row">
                                            <TableCell>
                                                {match.date}
                                            </TableCell>
                                            <TableCell>
                                                {match.local} <strong style={{padding:'0 10px'}}>vs</strong> {match.away}
                                            </TableCell>
                                            <TableCell>
                                                {match.resultLocal} <strong style={{padding:'0 10px'}}>vs</strong> {match.resultAway}
                                            </TableCell>
                                            <TableCell>
                                                {   JSON.parse(match.final) ?
                                                    <span className="matches_tag_red">Final</span>
                                                    : <span className="matches_tag_green">Not Played yet</span>
                                                }
                                            </TableCell>
                                            <TableCell>
                                                <Link className="edit_link" to={`/admin_matches/add_match/${match.id}`}>
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

                    {!this.state.sortedMatches ? <div className="admin_nomatches_msg">There are no matches</div> : null}

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

export default AdminMatches;