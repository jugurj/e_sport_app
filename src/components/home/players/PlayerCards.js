import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import playerImage from '../../../resources/images/players/vegi.png';
import PlayerCard from '../../utils/player_card';

class PlayerCards extends Component {

    state = {
        cards: [
            {
                bottom: 180,
                left: 230,
                rotate: 10,
                zIndex: 30
            },
            {
                bottom: 150,
                left: 130,
                rotate: -5,
                zIndex: 20
            },
            {
                bottom: 120,
                left: 30,
                rotate: -15,
                zIndex: 10
            }
        ]
    }

    showAnimateCards = () => {
        return (
            this.state.cards.map((card, i) => (
                <Animate
                    key={i}
                    show={this.props.show}

                    start={{
                        left: 0,
                        bottom: 0,
                        rotate: 0,
                        zIndex: [card.zIndex]
                    }}

                    enter={{
                        left: [card.left],
                        bottom: [card.bottom],
                        rotate: [card.rotate],
                        zIndex: [card.zIndex],
                        timing: {duration: 500, ease: easePolyOut}
                    }}
                >
                    {({ left, bottom, rotate, zIndex }) => {
                        return (
                            <div style={{
                                position: 'absolute',
                                left,
                                bottom,
                                transform: `rotate(${rotate}deg)`,
                                zIndex
                            }}>
                                <PlayerCard
                                    nickname="Vegi"
                                    bg={playerImage}
                                    player={{}}
                                />
                            </div>
                        )
                    }}
                </Animate>
            ))
        )
    }

    render() {
        return (
            <div>
                {this.showAnimateCards()}
            </div>
        );
    }
}

export default PlayerCards;