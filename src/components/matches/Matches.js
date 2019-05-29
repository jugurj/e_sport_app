import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebaseMatches } from '../../firebase';
import { firebaseLooper } from '../utils/misc';
import MatchesList from './MatchesList';

class Matches extends Component {

    state = {
        loading: true,
        matches: [],
        matchesFilter: [],
        finishedFilter: 'All',
        resultFiler: 'All'
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        firebaseMatches.once('value').then((snapshot) => {
            const matches = firebaseLooper(snapshot);

            this.setState({
                loading: false,
                matches: matches.reverse(),
                matchesFilter: matches.reverse()
            })
        })
    }

    filterMatches = (played) => {
        const list = this.state.matches.filter((match) => {
            return match.final === played
        });

        this.setState({
            matchesFilter: played === 'All' ? this.state.matches : list,
            finishedFilter: played,
            resultFiler: 'All'
        })
    }

    filterResult = (result) => {
        const list = this.state.matches.filter((match) => {
            return match.result === result
        });

        this.setState({
            matchesFilter: result === 'All' ? this.state.matches : list,
            finishedFilter: 'All',
            resultFiler: result
        })
    }

    render() {

        const { matchesFilter, finishedFilter, resultFiler } = this.state;

        return (
            <div className="matches_container">
                <div className="the_matches_wrapper">
                    <div className="left">
                        <div className="match_filters">
                            <div className="match_filters_box">
                                <div className="tag">
                                    Show Match
                                </div>
                                <div className="match_filters_container">
                                    <div className={`option ${finishedFilter === 'All' ? 'active' : ''}`}
                                        onClick={() => this.filterMatches('All')}>
                                        All
                                    </div>
                                    <div className={`option ${finishedFilter === true ? 'active' : ''}`}
                                        onClick={() => this.filterMatches(true)}>
                                        Finished
                                    </div>
                                    <div className={`option ${finishedFilter === false ? 'active' : ''}`}
                                        onClick={() => this.filterMatches(false)}>
                                        Not Finished
                                    </div>
                                </div>
                            </div>

                            <div className="match_filters_box">
                                <div className="tag">
                                    Result
                                </div>
                                <div className="match_filters_container">
                                    <div className={`option ${resultFiler === 'All' ? 'active' : ''}`}
                                        onClick={() => this.filterResult('All')}>
                                        All
                                    </div>
                                    <div className={`option ${resultFiler === 'W' ? 'active' : ''}`}
                                        onClick={() => this.filterResult('W')}>
                                        W
                                    </div>
                                    <div className={`option ${resultFiler === 'L' ? 'active' : ''}`}
                                        onClick={() => this.filterResult('L')}>
                                        L
                                    </div>
                                    <div className={`option ${resultFiler === 'D' ? 'active' : ''}`}
                                        onClick={() => this.filterResult('D')}>
                                        D
                                    </div>
                                </div>
                            </div>
                        </div>

                        {   this.state.loading ?
                                <div className="matches_progress">
                                    <CircularProgress color="inherit"/>
                                    <h3>Loading...</h3>
                                </div>
                                : !this.state.matchesFilter.length ?
                                    <h4 style={{
                                        color: '#eb9324',
                                        textAlign: 'center',
                                        paddingTop: '40px'
                                    }}>
                                        No results found...
                                    </h4>
                                    : null
                        }
                        <MatchesList matches={matchesFilter}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Matches;