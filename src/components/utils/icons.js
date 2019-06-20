import React from 'react';
import { Link } from 'react-router-dom';

import virtusLogo from '../../resources/images/logos/home_icon_2.png';

export const Logo = (props) => {
    const template = 
    <div
        className={props.classTag}
        style={{
                width: props.width,
                height: props.height,
                background: `url(${virtusLogo}) center center no-repeat`,
                ...props.add
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