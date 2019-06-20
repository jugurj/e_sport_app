import React from 'react';

const MatchesBlock = ({match}) => {

    const dateFormat = (matchDate) => {
        let date = new Date(matchDate).toDateString().split(' ');
        return `${parseInt(date[2], 10)} ${date[1]} ${date[3]}`
    }

    return (
        <div className="match_block">

            {   !JSON.parse(match.final) ?
                    <div className="upcoming_tag">Upcoming</div>
                    : null
            }
            <div className="match_stadium">{match.stadium}</div>
            <div className="match_date">{dateFormat(match.date)}</div>
            <div className="match_wrapper">

                <div className="left">
                    <div className="icon" style={{
                        background: `url(/images/team_icons/${match.localThmb}.png)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}></div>
                    <div className="team_name">
                        {match.local}
                    </div>
                </div>

                <div className="right">
                    <div className="icon" style={{
                        background: `url(/images/team_icons/${match.awayThmb}.png)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}></div>
                    <div className="team_name">
                        {match.away}
                    </div>
                </div>

                <div className="match_result">
                    {match.resultLocal}<span className="divider">vs</span>{match.resultAway}
                </div>
                
            </div>
        </div>
    );
};

export default MatchesBlock;