import React from 'react';
import { Tag } from '../../utils/tag';
import Blocks from './Blocks';

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

                    <Blocks/>

                <Tag
                    size="20px"
                    color="#ffffff"
                    link={true}
                    linkTo="/matches"
                    border="2px solid #ffffff"
                >
                    See More Matches
                </Tag>
            </div>
        </div>
    );
};

export default Matches;