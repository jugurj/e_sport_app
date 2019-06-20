import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Enroll from './Enroll';
import merch_image from '../../../resources/images/merch_image.png';
import merch_image2 from '../../../resources/images/merch_image_2.png';

const PromotionTitle = () => {
    return (
        <div>
            <div className="promotion_title">Win a T-Shirt</div>
            <div className="promotion_animation">
                <div className="left">
                <Zoom>
                        <div className="secondary_image" style={{ background: `url(${merch_image}) no-repeat`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="main_image" style={{ background: `url(${merch_image2}) center no-repeat`}}></div>
                    </Zoom>
                    
                </div>
                <div className="right">
                    <Enroll/>
                </div>
            </div>
        </div>
    );
};

export default PromotionTitle;