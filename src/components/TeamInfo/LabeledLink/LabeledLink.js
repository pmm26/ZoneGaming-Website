import React from 'react';

import classes from './LabeledLink.css'


const labeledLink = (props) => {
    return (
        <div className={classes.LabeledLink}>
            <div className={classes.Value} onClick={props.action}>{props.children}</div>
        </div>
    );

}

export default labeledLink;