import React, { Component } from 'react';

import axios from '../../axios';

import Aux from '../../hoc/Aux/Aux';
import TeamInfo from '../../components/TeamInfo/TeamInfo'
import ChannelViewer from '../../components/ChannelViewer/ChannelViewer'
import teamInfo from '../../components/TeamInfo/TeamInfo';
// import Modal from '../../components/Ui/Modal/Modal'
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'



class ChannelManager extends Component {

    state =  {
        team: {
            _id: "5c49d00df75a5222e5051ff3",
            serverGroupId: null,
            status: "",
            teamName: "",
            ownerID: "",
            channelOrder: 0,
            spacerNumber: 0,
            areaId: "",
            mainChannelId: 939,
            spacerEmptyId: 0,
            spacerBarId: 0,
            members: [],
        },
        teamUrl: 'teamUrl',
        channels: []
    }


    componentDidMount () {
        //get Team
        axios.get('/team/team/' + this.state.team._id)
            .then(response => {

                // if (response === 'ok') {

                // } else {
                //  Error handling
                // }

                let data = response.data.server
                this.setState({team: data})
                // this.setState({teams: updatedPosts});
                // console.log(this.state);
            } )
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });

        //Get Users in the Channel
        axios.get('teamspeak/channelview/' + this.state.team.mainChannelId)
        .then(response => {

            // if (response === 'ok') {

            // } else {
            //  Error handling
            // }

            let data = response.data.server
            this.setState({channels: data})

            // console.log(this.state);
        } )
        .catch(error => {
            console.log(error);
            // this.setState({error: true});
        });
    }

    // state = {
    // }


    render () {



        return (
            <Aux> 
                <h1></h1>
                   <h1>{this.state.team.teamName}</h1>
                    <TeamInfo team={this.state.team}></TeamInfo>
                    <ChannelViewer channels={this.state.channels} users={this.state.team.members} >{this.state.team.teamName}</ChannelViewer> 
                </Aux>
        );
    }

}

export default ChannelManager;