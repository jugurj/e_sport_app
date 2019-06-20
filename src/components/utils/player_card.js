import React from 'react';

const PlayerCard = (props) => {

    return (
        <div className={
            props.active ? "player_card_wrapper active_player_card" : "player_card_wrapper"
        }
        onClick={props.handleClick}>
            <div 
                className="player_card_thumbnail" 
                style={{ background: `url(${props.bg})` }}>
                    <div className="player_card_info_container">
                        <p>{props.nickname ? props.nickname : props.player.nickname}</p>
                        <p className="player_card_extended_info fullname">{props.player.name} {props.player.lastname}</p>
                        <p className="player_card_extended_info age">{props.player.age} years</p>
                        <p className="player_card_extended_info country">{props.player.country}</p>
                    </div>
            </div>
        </div>
    );
};

export default PlayerCard;