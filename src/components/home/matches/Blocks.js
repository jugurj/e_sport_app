import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper } from '../../utils/misc';

import MatchesBlock from '../../utils/matches_block';
import Slide from 'react-reveal/Slide';

class Blocks extends Component {

    state = {
        matches: [

        ]
    }

    componentDidMount() {
        firebaseMatches.limitToLast(6).once('value').then((snapshot) => {
            const matches = firebaseLooper(snapshot);

            this.setState({
                matches: matches.reverse()
            })
        });
    }

    showMatches = (matches) => {
        if (matches) {
            return (
                matches.map((match) => (
                    <Slide left key={match.id}>
                        <div className="item">
                            <MatchesBlock match={match} />
                        </div>
                    </Slide>
                ))
            )
        } else {
            return false;
        }
    }

    render() {
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Blocks;