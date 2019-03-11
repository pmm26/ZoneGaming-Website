import React from 'react';

import classes from './LabeledInfo.css'


const labeledInfo = (props) => {
    return (
        <div className={classes.LabeledLink}>
            <p className={classes.Label}>{props.name}: </p>
            <p className={classes.Value}>{props.children}</p>
        </div>
    );

}

export default labeledInfo;