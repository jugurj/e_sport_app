import React, { Component } from 'react';
import { Tag } from '../../utils/tag';
import Reveal from 'react-reveal/Reveal';
import PlayerCards from './PlayerCards';

class Players extends Component {

    state = {
        show: false
    }

    render() {
        return (
                <div className="home_players" style={{
                    background:`linear-gradient(315deg, rgba(17, 24, 33, 0.81) 0%, rgba(64, 77, 93, 0.81) 50.52%, rgba(17, 24, 33, 0.81) 100%)`
                }}>
                    <Reveal
                        fraction={0.5}
                        onReveal={() => {
                            this.setState({
                                show: true
                            })
                        }}
                    >
                        <div className="container">
                            <div className="home_players_wrapper">
                                <div className="home_card_wrapper">
                                    <PlayerCards
                                        show={this.state.show}
                                    />
                                </div>
                                <div className="home_text_wrapper">
                                    <div>
                                        <Tag size="90px" color="#FFFFFF"
                                            add={{
                                                display:'inline-block',
                                                fontFamily: 'Fugaz One',
                                                textShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
                                                lineHeight: '120px',
                                                userSelect: 'none',
                                                padding: '0'
                                            }}
                                        >
                                            MEET
                                        </Tag>
                                    </div>
                                    <div>
                                        <Tag size="90px" color="#FFFFFF"
                                            add={{
                                                display:'inline-block',
                                                fontFamily: 'Fugaz One',
                                                textShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
                                                lineHeight: '120px',
                                                userSelect: 'none',
                                                padding: '0'
                                            }}
                                        >
                                            THE
                                        </Tag>
                                    </div>
                                    <div>
                                        <Tag size="90px" color="#FFFFFF"
                                            add={{
                                                display:'inline-block',
                                                fontFamily: 'Fugaz One',
                                                textShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
                                                lineHeight: '120px',
                                                userSelect: 'none',
                                                padding: '0'
                                            }}
                                        >
                                            PLAYERS
                                        </Tag>
                                    </div>
                                    <div>
                                    <Tag bg="#FE5000" size="14px" color="#ffffff"
                                        link={true}
                                        linkTo="/team"
                                        add={{
                                            display:'inline-block',
                                            margin: '20px 0',
                                            padding: '15px 40px',
                                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                            textTransform: 'uppercase',
                                            fontFamily: 'Montserrat',
                                            fontWeight: '500',
                                            textAlign: 'center'
                                        }}
                                    >
                                        Show Teams
                                    </Tag>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            
        );
    }
}

export default Players;