import React from 'react';
import PromotionTitle from './PromotionTitle';
import Enroll from './Enroll';

const Promotion = () => {
    return (
        <div className="promotion_wrapper">
            <div className="container">
                <PromotionTitle/>
                <Enroll/>
            </div>
        </div>
    );
};

export default Promotion;