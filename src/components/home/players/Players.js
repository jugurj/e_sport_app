import React, { Component } from 'react';
import stripes from '../../../resources/images/stripes.png';
import { Tag } from '../../utils/tag';
import Reveal from 'react-reveal/Reveal';
import PlayerCards from './PlayerCards';

class Players extends Component {

    state = {
        show: false
    }

    render() {
        return (
            <Reveal
                fraction={0.7}
                onReveal={() => {
                    this.setState({
                        show: true
                    })
                }}
            >
                <div className="home_players" style={{
                    background:`#353535 url(${stripes})`
                }}>
                    <div className="container">
                        <div className="home_players_wrapper">
                            <div className="home_card_wrapper">
                                <PlayerCards
                                    show={this.state.show}
                                />
                            </div>
                            <div className="home_text_wrapper">
                                <div>
                                    <Tag bg="#EC9424" size="100px" color="#2B2B2B"
                                        add={{
                                            display:'inline-block',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        MEET
                                    </Tag>
                                </div>
                                <div>
                                    <Tag bg="#EC9424" size="100px" color="#2B2B2B"
                                        add={{
                                            display:'inline-block',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        THE
                                    </Tag>
                                </div>
                                <div>
                                    <Tag bg="#EC9424" size="100px" color="#2B2B2B"
                                        add={{
                                            display:'inline-block',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        PLAYERS
                                    </Tag>
                                </div>
                                <div>
                                <Tag  size="27px" color="#ffffff"
                                    link={true}
                                    linkTo="/team"
                                    add={{
                                        display:'inline-block',
                                        margin: '30px 0',
                                        border:'2px solid #ffffff'
                                    }}
                                >
                                    Show Teams
                                </Tag>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        );
    }
}

export default Players;