import React from 'react';

const PlayerCard = (props) => {
    return (
        <div className="player_card_wrapper">
            <div 
                className="player_card_thumbnail" 
                style={{
                    background: `#2B2B2B url(${props.bg})`
                }}></div>
            <div className="player_card_info">
                <div className="player_card_nickname">
                    {props.nickname}
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;