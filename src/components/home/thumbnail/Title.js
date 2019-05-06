import React, { Component } from 'react';
import { easePolyOut, easeLinear } from 'd3-ease';
import Animate from 'react-move/Animate';

import thumbnail_image from '../../../resources/images/thumb_image_bright.png';

class Title extends Component {

    animateNumber = () => {
        return(
            <Animate
                show={true}

                start={{
                    opacity: 0,
                    rotate: 0
                }}

                enter={{
                    opacity: [1],
                    rotate: [360],
                    timing: {duration: 300, delay: 0, ease: easeLinear }
                }}
            >
                {({opacity, rotate}) => {
                    return (
                        <div className="thumbnail_title_number"
                            style={{
                                opacity,
                                transform: `translate(240px, 140px) rotate(-25deg)`
                            }}>
                            4
                        </div>
                    )
                }}
            </Animate>
        )
    }

    animateFirstTitle = () => {
        return(
            <Animate
                show={true}

                start={{
                    opacity: 0,
                    x: -300,
                    y: 450
                }}

                enter={{
                    opacity: [1],
                    x: [225],
                    y: [450],
                    timing: {duration: 1000, delay: 1000, ease: easePolyOut }
                }}
            >
                {({opacity, x, y}) => {
                    return (
                        <div className="thumbnail_first_title"
                            style={{
                                opacity,
                                transform: `translate(${x}px, ${y}px)`
                            }}>
                            League
                        </div>
                    )
                }}
            </Animate>
        )
    }

    animateSecondTitle = () => {
        return(
            <Animate
                show={true}

                start={{
                    opacity: 0,
                    x: 500,
                    y: 580
                }}

                enter={{
                    opacity: [1],
                    x: [270],
                    y: [580],
                    timing: {duration: 1000, delay: 1000, ease: easePolyOut }
                }}
            >
                {({opacity, x, y}) => {
                    return (
                        <div className="thumbnail_second_title"
                            style={{
                                opacity,
                                transform: `translate(${x}px, ${y}px)`
                            }}>
                            Championships
                        </div>
                    )
                }}
            </Animate>
        )
    }

    animateImage = () => {
        return(
            <Animate
                show={true}

                start={{
                    opacity: 0
                }}

                enter={{
                    opacity: [1],
                    timing: {duration: 1000, delay: 700, ease: easePolyOut }
                }}
            >
                {({opacity}) => {
                    return (
                        <div className="thumbnail_image"
                            style={{
                                opacity,
                                background: `url(${thumbnail_image})`,
                                transform: `translate(445px, 150px)`
                            }}>
                        </div>
                    )
                }}
            </Animate>
        )
    }

    render() {

        return (
            <div className="thumbnail_title">
                {this.animateImage()}
                {this.animateNumber()}
                {this.animateFirstTitle()}
                {this.animateSecondTitle()}
            </div>
        );
    }
}

export default Title;