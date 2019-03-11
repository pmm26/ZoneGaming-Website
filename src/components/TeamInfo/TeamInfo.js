import React from 'react';

import TeamLogo from './TeamLogo/TeamLogo';
import LabeledInfo from './LabeledInfo/LabeledInfo';
import LabeledLink from './LabeledLink/LabeledLink';
import classes from './TeamInfo.css';


const teamInfo = (props) => {
    return (
        <div>
            <h2 className={classes.TeamName}>Team Info</h2>
            <TeamLogo logoUrl={props.team.logoUrl}>{props.team.teamName}</TeamLogo>

            <LabeledInfo name="Channel Name">{props.team.teamName}</LabeledInfo>

            {/* <LabeledLink name="Channel Owner">{props.owner.name}</LabeledLink> */}
            <LabeledInfo name="Channel Name">{props.team.teamName}</LabeledInfo>
            <LabeledInfo name="Area"> {props.team.gameArea} </LabeledInfo>

            <LabeledInfo name="Numero do Canal">{props.team.channelOrder}</LabeledInfo>
            <LabeledInfo name="Numero de Membros">{props.team.numberOfMember}</LabeledInfo>

            <LabeledLink action={props.createServerGroup}>Criar Group</LabeledLink>


        </div>
    );

}

export default teamInfo;