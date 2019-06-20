import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import thumbnail_image from '../../../resources/images/thumbnail_image.png';

class Title extends Component {

    animateFirstTitle = () => {
        return(
            <Animate
                show={true}

                start={{
                    opacity: 0,
                    x: -300,
                    y: 380
                }}

                enter={{
                    opacity: [1],
                    x: [530],
                    y: [380],
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
                            League<span className="number">4</span>
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
                    left: 2000,
                    top: 580
                }}

                enter={{
                    opacity: [1],
                    left: [600],
                    top: [580],
                    timing: {duration: 1000, delay: 1000, ease: easePolyOut }
                }}
            >
                {({opacity, left, top}) => {
                    return (
                        <div className="thumbnail_second_title"
                            style={{
                                opacity,
                                left,
                                top
                            }}>
                            Championship
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
                                // transform: `translate(235px, 80px)`
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
                {this.animateFirstTitle()}
                {this.animateSecondTitle()}
                <span className="background_overlay_title">VIRTUS PRO ©</span>
            </div>
        );
    }
}

export default Title;