import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebaseMatches } from '../../firebase';
import { firebaseLooper } from '../utils/misc';
import MatchesList from './MatchesList';

class Matches extends Component {

    state = {
        loading: true,
        matches: [],
        filterMatches: [],
        playerFilter: 'All',
        resultFiler: 'All'
    }

    onComponentMount() {
        firebaseMatches.once('value').then((snapshot) => {
            const matches = firebaseLooper(snapshot);

            this.setState({
                loading: false,
                matches: matches.reverse(),
                filterMatches: matches.reverse()
            })
        })
    }

    render() {

        const { filterMatches } = this.state;

        return (
            <div className="matches_container">
                <div className="matches_wrapper">
                    <div className="left">
                        <div className="match_filters">

                        </div>
                        <MatchesList matches={filterMatches}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Matches;