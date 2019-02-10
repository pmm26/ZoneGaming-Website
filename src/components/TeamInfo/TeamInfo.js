import React from 'react';

import TeamLogo from './TeamLogo/TeamLogo';
import LabeledLink from './LabeledLink/LabeledLink';
import classes from './TeamInfo.css';



const teamInfo = (props) => {
    return (
        <div>
            <h2 className={classes.TeamName}>Team Info</h2>
            <TeamLogo logoUrl={props.team.logoUrl}>{props.team.teamName}</TeamLogo>

            <LabeledLink name="Channel Name">{props.team.teamName}</LabeledLink>

            {/* <LabeledLink name="Channel Owner">{props.owner.name}</LabeledLink> */}
            <LabeledLink name="Channel Name">{props.team.teamName}</LabeledLink>
            <LabeledLink name="Area"> {props.team.gameArea} </LabeledLink>

            <LabeledLink name="Numero do Canal">{props.team.channelOrder}</LabeledLink>

            {/* <LabeledLink name="Numero de Membros">{props.members.lenght}</LabeledLink> */}


        </div>
    );

}

export default teamInfo;