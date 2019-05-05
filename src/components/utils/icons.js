import React from 'react';
import { Link } from 'react-router-dom';

import virtusLogo from '../../resources/images/logos/virtus_logo.png';

export const Logo = (props) => {
    const template = 
        <div
            className="img_cover"
            style={{
                width: props.width,
                height: props.height,
                background: `url(${virtusLogo}) no-repeat`
            }}
        ></div>

    if (props.link) {
        return (
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
    } else {
        return template
    }
}