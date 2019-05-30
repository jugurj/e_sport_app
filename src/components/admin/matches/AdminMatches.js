import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseMatches } from '../../../firebase';
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

class AdminMatches extends Component {

    state = {
        isloading: true,
        matches: []
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        firebaseMatches.once('value').then((snapshot) => {
            const matches = firebaseLooper(snapshot);
            this.setState({
                isloading: false,
                matches: matches.reverse()
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
                                    <TableCell className="admin_table_head">Date</TableCell>
                                    <TableCell className="admin_table_head">Match</TableCell>
                                    <TableCell className="admin_table_head">Result</TableCell>
                                    <TableCell className="admin_table_head">Final</TableCell>
                                    <TableCell className="admin_table_head"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {   this.state.matches ?
                                    this.state.matches.map((match, i) => (
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

                    {!this.state.matches ? <div className="admin_nomatches_msg">There are no matches</div> : null}

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