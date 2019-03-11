import React from 'react';
import TsSala from './TsSala/TsSala';
import TsUser from './TsUser/TsUser';
import Aux from '../../hoc/Aux/Aux'


const channelViewer = (props) => {


    // console.log(props)

    let generateUsers = (channel) => {


        return channel.clients.map(client => {
            return (

                <TsUser key={client.clid} permission={props.permission} memberId={client._id}
                        loginMemberId={props.loginMemberId} promote={props.promote}
                        demote={props.demote} client={client}>{client.client_nickname}</TsUser>
            );
        });
    }

    let generateSalas = () => {
        return props.channels.map(channel => {
            return (
                <Aux key={channel.cid}>

                    <TsSala channel={channel}>{channel.channel_name}</TsSala>
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