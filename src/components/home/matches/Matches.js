import React from 'react';
import { Tag } from '../../utils/tag';
import Blocks from './Blocks';

const Matches = () => {
    return (
        <div className="matches_wrapper">
            <div className="container">

                <Blocks/>

                <Tag
                    size="16px"
                    color="#FE5000"
                    link={true}
                    linkTo="/matches"
                    border="2px solid #FE5000"
                    add={{
                        boxShadow: '0px 0px 5px #FE5000',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        marginTop: '25px'
                    }}
                >
                    See More Matches
                </Tag>
            </div>
        </div>
    );
};

export default Matches;