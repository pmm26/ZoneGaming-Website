import React from 'react';


import classes from './TsUser.css';

const Button = (props) => {


    return (
        <div className={props.classNamed} onClick={() => props.action(props.memberId)}>{props.children}</div>
    );

}


const ts3User = (props) => {

    let userPermission = props.permission(props.memberId);
    let loginUserPermission = props.permission(props.loginMemberId);


    const generateRank = (props, userPermission) => {

        let img = "";

        // console.log(props.permission(props.memberId))
        switch (userPermission) {
            case 1:
                img = "https://img.icons8.com/dusk/64/000000/teamspeak-new-logo.png";    //Channel Admin
                break;
            case 2:
                img = "https://img.icons8.com/dusk/64/000000/teamspeak-new-logo.png";     //Channel Admin
                break;

            case 3:
                img = "https://img.icons8.com/ios/50/000000/teamspeak-new-logo-filled.png";        //Mod
                break;

            case 4:
                img = "https://img.icons8.com/nolan/64/000000/teamspeak.png";        //Member
                break;

            default:
                img = "";       //Guest
                break;
        }
        // console.log()
        let rank = (<div></div>);

        // console.log(props.client)

        if (props.client.registered & userPermission <= 4) {

            rank = (<img className={classes.Image} src={img} alt="Permission"/>);
        }

        return (rank);

    }


    const generatePromoteButton = (props, userPermission, loginUserPermission) => {
        let promote = (<div></div>);

        if (loginUserPermission == 1) {
            loginUserPermission = 2;
        }


        if (userPermission > loginUserPermission) {
            promote = (
                <Button memberId={props.memberId} classNamed={classes.Promote} action={props.promote}>Promote</Button>);
        }
        return promote;

    }

    const generateDemoteButton = (props, userPermission, loginUserPermission) => {
        let demote = (<div></div>);

        if ((userPermission > loginUserPermission) & userPermission <= 4) {
            demote = (
                <Button memberId={props.memberId} classNamed={classes.Demote} action={props.demote}>Demote</Button>);

        }
        return (demote)
    }


    return (
        <div>
            <p className={classes.TsUser}>{props.children}</p>

            {generateRank(props, userPermission, loginUserPermission)}
            {generatePromoteButton(props, userPermission, loginUserPermission)}
            {generateDemoteButton(props, userPermission, loginUserPermission)}


        </div>
    );

}

export default ts3User;