import React from 'react';
import TsSala from './TsSala/TsSala';
import TsUser from './TsUser/TsUser';
import Aux from '../../hoc/Aux/Aux'

// import classes from './Burger.css';




const channelViewer = (props) => {


    console.log(props)

    let generateUsers = (channel) => {

        return channel.clients.map(client => {
            // console.log(client);
            return (
                <TsUser key={client.clid}>{client.po}</TsUser>
            );
        });
    }

    let generateSalas = () => {
        return props.channels.map(channel => {
            return (
                <Aux key={channel.cid}>
                
                    <TsSala key={channel.cid} channel={channel}>{channel.channel_name}</TsSala>
                    {generateUsers(channel)}
                </Aux>
                
            );
        });

    }


    return (
        <div>    
            <h2>{props.children}</h2>
            {generateSalas()}
            

        </div>
)

}

export default channelViewer;