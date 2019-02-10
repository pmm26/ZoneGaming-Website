import React from 'react';
import Aux from '../../../hoc/Aux/Aux'


import classes from './TeamLogo.css';




const teamLogo = (props) => {
    return (
        <Aux>    

            <img className={classes.Logo} src={props.logoUrl} alt={props.children} />
        </Aux>
    );


}

export default teamLogo;