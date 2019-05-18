import React from 'react';
import Zoom from 'react-reveal/Zoom';
import merch_image from '../../../resources/images/merch_image.png';

const PromotionTitle = () => {
    return (
        <div className="promotion_animation">
            <div className="left">
                <Zoom>
                    <div>
                        <span>Win a</span>
                        <span>T-Shirt</span>
                    </div>
                </Zoom>
            </div>
            <div className="right">
                <Zoom>
                    <div style={{ background: `url(${merch_image}) no-repeat`}}></div>
                </Zoom>
            </div>
        </div>
    );
};

export default PromotionTitle;