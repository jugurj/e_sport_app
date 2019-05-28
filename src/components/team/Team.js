import React, { Component } from 'react';
import PlayerCard from '../utils/player_card';
import Fade from 'react-reveal/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';

import stripes from '../../resources/images/stripes.png';
import { firebasePlayers, firebase } from '../../firebase';
import { firebaseLooper } from '../utils/misc';
import { Promise } from 'core-js';


class Team extends Component {

    state = {
        loading: true,
        players: []
    }

    componentDidMount() {
        firebasePlayers.once('value').then((snapshot) => {
            const players = firebaseLooper(snapshot);
            const promises = [];

            for (let player in players) {
                promises.push(
                    new Promise((resolve, reject) => {
                        firebase.storage().ref('players').child(players[player].image)
                            .getDownloadURL().then((url) => {
                                players[player].url = url;
                                resolve();
                            }).catch((err) => {
                                reject();
                            })
                    })
                )
            }

            Promise.all(promises).then(() => {
                this.setState({
                    loading: false,
                    players
                })
            })

        })
    }

    getCardsFromCategory = (category) => {
        return (
            this.state.players ?
                this.state.players.map((player, i) => (
                    player.game === category ?
                    <Fade left delay={i*30} key={i}>
                        <div className="item">
                            <PlayerCard
                                nickname={player.nickname}
                                bg={player.url}
                            />
                        </div>
                    </Fade>
                    : null
                ))
            : null
        )
    }

    render() {
        return (
            <div className="team_container"
                style={{
                    background:`#464646 url(${stripes})`
                }}
            >
                {   !this.state.loading ?
                        <div>
                            <div className="team_category_wrapper">
                                <div className="title">CS:GO</div>
                                <div className="team_cards">
                                    {this.getCardsFromCategory('CS:GO')}
                                </div>
                            </div>

                            <div className="team_category_wrapper">
                                <div className="title">Dota2</div>
                                <div className="team_cards">
                                    {this.getCardsFromCategory('Dota2')}
                                </div>
                            </div>

                            <div className="team_category_wrapper">
                                <div className="title">Artifact</div>
                                <div className="team_cards">
                                    {this.getCardsFromCategory('Artifact')}
                                </div>
                            </div>

                            <div className="team_category_wrapper">
                                <div className="title">Fortnite</div>
                                <div className="team_cards">
                                    {this.getCardsFromCategory('Fortnite')}
                                </div>
                            </div>

                            <div className="team_category_wrapper">
                                <div className="title">Paladins</div>
                                <div className="team_cards">
                                    {this.getCardsFromCategory('Paladins')}
                                </div>
                            </div>
                        </div>

                        :   <div className="team_progress">
                                { this.state.loading ?
                                    <div>
                                        <CircularProgress color="inherit"/>
                                        <h3>Loading...</h3>
                                    </div>
                                    : null
                                }
                            </div>
                }
            </div>
        );
    }
}

export default Team;