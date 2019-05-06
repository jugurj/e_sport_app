import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

class StripesBg extends Component {

    state = {
        stripes: [
            {
                background: '#ff9000',
                left: 320,
                rotate: -25,
                top: -150,
                delay: 0
            },
            {
                background: '#353535',
                left: 360,
                rotate: 25,
                top: -400,
                delay: 500
            },
            {
                background: '#ff9000',
                left: 605,
                rotate: 25,
                top: -500,
                delay: 250
            }
        ]
    }

    render() {
        return (
            <div className="thumbnail_stripes">
                {this.state.stripes.map((stripe, i) => (
                    <Animate
                        key={i}
                        show={true}

                        start={{
                            background: '#ffffff',
                            opacity: 0,
                            left: 0,
                            rotate: 0,
                            top: 0
                        }}

                        enter={{
                            background: `${stripe.background}`,
                            opacity: [1],
                            left: [stripe.left],
                            rotate: [stripe.rotate],
                            top: [stripe.top],
                            timing: { delay: stripe.delay, duration: 200, ease: easePolyOut }
                        }}
                    >
                        {({ opacity, left, rotate, top, background }) => {
                            return (
                                <div className="stripe" style={{
                                    background,
                                    opacity,
                                    transform: `rotate(${rotate}deg) translate(${left}px, ${top}px)`
                                }}></div>
                            )
                        }}
                    </Animate>
                ))}
            </div>
        );
    }
}

export default StripesBg;