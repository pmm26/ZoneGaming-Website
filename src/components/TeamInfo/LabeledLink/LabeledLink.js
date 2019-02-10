import React from 'react';

import classes from './LabeledLink.css'


const labeledLink = (props) => {
    return (
        <div className={classes.LabeledLink}>    
            <p className={classes.Label}>{props.name}: </p>
            <p className={classes.Value}>{props.children}</p>
        </div>
    );

}

export default labeledLink;