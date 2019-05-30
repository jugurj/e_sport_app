import React, { Component } from 'react';
import Thumbnail from './thumbnail/Thumbnail';
import Matches from './matches/Matches';
import Players from './players/Players';
import Promotion from './promotion/Promotion';

class Home extends Component {

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="bg_gray">
                <Thumbnail/>
                <Matches/>
                <Players/>
                <Promotion/>
            </div>
        );
    }
};

export default Home;