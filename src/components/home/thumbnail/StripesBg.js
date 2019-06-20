import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

class StripesBg extends Component {

    state = {
        stripes: [
            {
                background: '#FE5000',
                left: 450,
                rotate: -25,
                top: -30,
                delay: 0,
                zIndex: 5
            },
            {
                background: '#111821',
                left: 660,
                rotate: 25,
                top: -500,
                delay: 500,
                zIndex: 0
            },
            {
                background: '#FE5000',
                left: 870,
                rotate: 25,
                top: -600,
                delay: 250,
                zIndex: 0
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
                            top: 0,
                            zIndex: 0
                        }}

                        enter={{
                            background: `${stripe.background}`,
                            opacity: [1],
                            left: [stripe.left],
                            rotate: [stripe.rotate],
                            top: [stripe.top],
                            timing: { delay: stripe.delay, duration: 200, ease: easePolyOut },
                            zIndex: [stripe.zIndex]
                        }}
                    >
                        {({ opacity, left, rotate, top, background, zIndex }) => {
                            return (
                                <div className="stripe" style={{
                                    background,
                                    opacity,
                                    zIndex,
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