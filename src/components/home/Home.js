import React from 'react';
import Thumbnail from './thumbnail/Thumbnail';
import Matches from './matches/Matches';
import Players from './players/Players';
import Promotion from './promotion/Promotion';

const Home = () => {
    return (
        <div className="bg_gray">
            <Thumbnail/>
            <Matches/>
            <Players/>
            <Promotion/>
        </div>
    );
};

export default Home;