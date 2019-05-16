import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import playerImage from '../../../resources/images/players/Vegi.png';
import PlayerCard from '../../utils/player_card';

class PlayerCards extends Component {

    state = {
        cards: [
            {
                bottom: 180,
                left: 300
            },
            {
                bottom: 150,
                left: 200
            },
            {
                bottom: 120,
                left: 100
            },
            {
                bottom: 90,
                left: 0
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
                        bottom: 0
                    }}

                    enter={{
                        left: [card.left],
                        bottom: [card.bottom],
                        timing: {duration: 500, ease: easePolyOut}
                    }}
                >
                    {({ left, bottom }) => {
                        return (
                            <div style={{
                                position: 'absolute',
                                left,
                                bottom
                            }}>
                                <PlayerCard
                                    nickname="Vegi"
                                    bg={playerImage}
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