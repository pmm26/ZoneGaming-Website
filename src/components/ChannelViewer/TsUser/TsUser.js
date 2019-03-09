import React from 'react';


import classes from './TsUser.css';

const Button = (props) => {

    
    
    return (
        <div className={props.classNamed} onClick={() => props.action(props.memberId)}>{props.children}</div>
    );

}

const ts3User = (props) => {
    
    let key = 1;

    switch (key) {
        case 1:
            break;

        case 2:
            break;

        case 3:
            break;
    
        default:
            break;
    }
    // console.log(props)

    return (
        <div>    
           <p className={classes.TsUser}>{props.children}</p>
           <img className={classes.Image} src="https://www.wonderplugin.com/videos/demo-image0.jpg" alt="Permission"/>

            <Button memberId={props.memberId} classNamed={classes.Promote} action={props.promote}>Promote</Button>
            <Button memberId={props.memberId} classNamed={classes.Demote} action={props.demote}>Demote</Button>
           
           {/* <div className={classes.Promote} clicked={() => props.Promote} >Promote</div> */}
           
        </div>
    );

}

export default ts3User;