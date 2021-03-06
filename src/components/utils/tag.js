import React from 'react';
import { Link } from 'react-router-dom';

export const Tag = (props) => {
    const template = 
        <div
            style={{
                background: props.bg,
                fontSize: props.size,
                color: props.color,
                padding: '15px 15px',
                display: 'inline-block',
                fontFamily: 'Montserrat',
                border: props.border,
                ...props.add
            }}
        >
            {props.children}
        </div>

    if(props.link) {
        return (
            <Link to={props.linkTo} className="tag_link" style={{cursor: 'pointer'}}>
                {template}
            </Link>
        )
    } else {
        return template
    }
}