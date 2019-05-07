import React from 'react';
import { Tag } from '../../utils/tag';

const Matches = () => {
    return (
        <div className="matches_wrapper">
            <div className="container">
                <Tag
                    bg="#ffffff"
                    size="52px"
                    color="#2B2B2B"
                >
                    Matches
                </Tag>

                BLOCKS

                <Tag
                    bg="#EC9424"
                    size="20px"
                    color="#ffffff"
                    link={true}
                    linkTo="/team"
                >
                    See More Matches
                </Tag>
            </div>
        </div>
    );
};

export default Matches;