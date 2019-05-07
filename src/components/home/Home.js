import React from 'react';
import Thumbnail from './thumbnail/Thumbnail';
import Matches from './matches/Matches';

const Home = () => {
    return (
        <div className="bg_gray">
            <Thumbnail/>
            <Matches/>
        </div>
    );
};

export default Home;