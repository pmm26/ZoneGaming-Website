import React from 'react';


import classes from './TsUser.css';

const Button = (props) => {

    
    
    return (
           <div className={props.classNamed} clicked={() => props.Promote} >{props.children}</div>
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
    

    return (
        <div>    
           <p className={classes.TsUser}>{props.children}</p>
           <img className={classes.Image} src="https://www.wonderplugin.com/videos/demo-image0.jpg" alt="Permission"/>
           <Button classNamed={classes.Promote}>Promote</Button>
           <Button classNamed={classes.Demote}>Demote</Button>
           
           {/* <div className={classes.Promote} clicked={() => props.Promote} >Promote</div> */}
           
        </div>
    );

}

export default ts3User;