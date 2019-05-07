import React from 'react';
import { Link } from 'react-router-dom';

export const Tag = (props) => {
    const template = 
        <div
            style={{
                background: props.bg,
                fontSize: props.size,
                color: props.color,
                padding: '5px 10px',
                display: 'inline-block',
                fontFamily: 'Fugaz One',
                hover: {
                    color: 'red',
                }
            }}
        >
            {props.children}
        </div>

    if(props.link) {
        return (
            <Link to={props.linkTo} className="tag_link">
                {template}
            </Link>
        )
    } else {
        return template
    }
}