import React, {Component} from 'react';

import axios from '../../axios';

import Aux from '../../hoc/Aux/Aux';
import TeamInfo from '../../components/TeamInfo/TeamInfo'
import ChannelViewer from '../../components/ChannelViewer/ChannelViewer'
import _ from 'lodash';
// import Modal from '../../components/Ui/Modal/Modal'
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'



class ChannelManager extends Component {

    state =  {
        team: {
            _id: "5c84106b29a6f931e2a1ae19",
            serverGroupId: null,
            status: "",
            teamName: "",
            ownerID: "",
            channelOrder: 0,
            spacerNumber: 0,
            areaId: "",
            mainChannelId: 190,
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

                let responseStatus = response.data.status;
                let responseData = response.data.server;

                if (_.isEqual(responseStatus, "success")) {
                    this.setState({team: responseData})
                    // this.setState({teams: updatedPosts});
                    // console.log(this.state);

                } else {
                    // Error handling
                }

            })
            .catch(error => {
                console.log(error);
            });


        //Get Users in the Channel
        axios.get('/teamspeak/channelview/' + this.state.team.mainChannelId)
        .then(response => {

            let responseStatus = response.data.status;
            let responseData = response.data.server;

            if (_.isEqual(responseStatus, "success")) {
                this.setState({channels: responseData})
                // console.log(this.state);

            } else {
                // Error handling
            }

            // console.log(this.state);
        } )
        .catch(error => {
            console.log(error);
            // this.setState({error: true});
        });
    }

    changeUserPermissions(memberId, permission) {
        // Get Users in the Channel
        axios.post('/team/member/' + this.state.team._id, {
            memberId: memberId,
            permission: permission
        })
            .then(response => {
                console.log(response)

                let responseStatus = response.data.status;
                let responseData = response.data.server;

                if (_.isEqual(responseStatus, "success")) {
                    console.log("Channel Group Assigned")
                    this.setState({team: responseData})
                    console.log(responseData);

                } else {
                    // Error handling
                }

                // console.log(this.state);
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
        // console.log()

    }

    promoteUser(memberId) {
        //Get the member that we want to add in question
        let member = this.state.team.members.filter(member => _.isEqual(member.memberId, memberId));


        if (_.isEmpty(member)) {
            this.changeUserPermissions(memberId, 4)
        } else {
            this.changeUserPermissions(memberId, member[0].permissions - 1)
        }

    }

    demoteUser(memberId) {
        //Get the member that we want to add in question
        let member = this.state.team.members.filter(member => _.isEqual(member.memberId, memberId));

        if (!_.isEmpty(member)) {
            this.changeUserPermissions(memberId, member[0].permissions + 1)
        }

    }

    render () {

        return (
            <Aux> 
                <h1></h1>
                   <h1>{this.state.team.teamName}</h1>
                    <TeamInfo team={this.state.team}></TeamInfo>
                <ChannelViewer channels={this.state.channels} users={this.state.team.members}
                               demote={this.demoteUser.bind(this)}
                               promote={this.promoteUser.bind(this)}>{this.state.team.teamName}</ChannelViewer>
                </Aux>
        );
    }

}

export default ChannelManager;