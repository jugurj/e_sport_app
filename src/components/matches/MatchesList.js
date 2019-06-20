import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';

class MatchesList extends Component {

    state = {
        matchesList: []
    }

    static getDerivedStateFromProps(props, state) {
        return state = {
            matchesList: props.matches
        }
    }

    dateFormat = (matchDate) => {
        let date = new Date(matchDate).toDateString().split(' ');
        return `${parseInt(date[2], 10)} ${date[1]} ${date[3]}`
    }

    showMatches = () => {
        return (
            this.state.matchesList ?
                <NodeGroup
                    data={this.state.matchesList}
                    keyAccessor={(d) => d.id}

                    start={() => ({
                        opacity: 0,
                        x: -200
                    })}

                    enter={(d, i) => ({
                        opacity: [1],
                        x: [0],
                        timing: {duration: 500, delay: i*100, ease: easePolyOut}
                    })}

                    update={(d, i) => ({
                        opacity: [1],
                        x: [0],
                        timing: {duration: 500, delay: i*100, ease: easePolyOut}
                    })}

                    leave={(d, i) => ({
                        opacity: [0],
                        x: [-200],
                        timing: {duration: 500, delay: i*5, ease: easePolyOut}
                    })}
                >
                    {(nodes) => (
                        <div>
                            {nodes.map(({key, data, state:{ x, opacity }})=>(
                                <div
                                    key={key}
                                    className="match_box_big"
                                    style={{
                                        opacity,
                                        transform: `translate(${x}px)`
                                    }}    
                                >
                                    <div className="match_container">
                                        <div className="team_wrapper">
                                            <div className="block">
                                                <div
                                                    className="icon"
                                                    style={{background:`url(/images/team_icons/${data.localThmb}.png) center no-repeat`}}></div>
                                                <div className="team">{data.local}</div>
                                                <div className="result">{data.resultLocal}</div>
                                            </div>
                                            <div className="block">
                                                <div
                                                    className="icon"
                                                    style={{background:`url(/images/team_icons/${data.awayThmb}.png) center no-repeat`}}></div>
                                                <div className="team">{data.away}</div>
                                                <div className="result">{data.resultAway}</div>
                                            </div>
                                        </div>

                                        <div className="block_wrapper">
                                            <div className="stadium">{data.stadium}</div>
                                            <div className="referee">{data.referee}</div>
                                            <div className="date">{this.dateFormat(data.date)}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </NodeGroup>
                : null
        )
    }

    render() {
        return (
            <div>
                {this.showMatches()}
            </div>
        );
    }
}

export default MatchesList;