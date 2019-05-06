import React from 'react';
import StripesBg from './StripesBg';
import Title from './Title';

const Thumbnail = () => {
    return (
        <div className="thumbnail_wrapper">
            <StripesBg/>
            <Title/>
        </div>
    );
};

export default Thumbnail;