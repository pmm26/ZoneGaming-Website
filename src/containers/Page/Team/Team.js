import React, {Component} from 'react';

import axios from '../../../axios';

import Aux from '../../../hoc/Aux/Aux';
import TeamInfo from '../../../components/TeamInfo/TeamInfo'
import ChannelViewer from '../../../components/ChannelViewer/ChannelViewer'
import _ from 'lodash';


import './Team.css';


class Team extends Component {

    state = {
        team: {
            _id: this.props.match.params.teamId,
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
            numberOfMember: 0
        },
        teamUrl: 'teamUrl',
        channels: [],
        user: {
            _id: 1
        }

    }

    calculateNumberOfMember(responseData) {
        return Object.assign({numberOfMember: responseData.members.length}, responseData);
    }

    componentDidMount() {
        // console.log(this.props)
        //GET Team TODO move to higher component
        axios.put('/auth/me')
            .then(response => {

                let memberId = response.data.memberId;
                let responseData = response.data.server;


                // console.log(memberId);
                this.setState({
                    user: {_id: memberId}
                })
                // this.setState({teams: updatedPosts});
                // console.log(this.state);


            })
            .catch(error => {
                console.log(error);
            });

        //get Team
        axios.get('/team/team/' + this.state.team._id)
            .then(response => {

                let responseStatus = response.data.status;
                let responseData = response.data.server;

                if (_.isEqual(responseStatus, "success")) {
                    this.setState({
                        team: this.calculateNumberOfMember(responseData)
                    })


                    //Get Users in the Channel
                    axios.get('/teamspeak/channelview/' + this.state.team.mainChannelId)
                        .then(response => {

                            let responseStatus = response.data.status;
                            let responseData = response.data.server;

                            if (_.isEqual(responseStatus, "success")) {
                                this.setState({channels: responseData})
                                // console.log(this.state);
                                console.log(this.props.loginMemberId)
                            } else {
                                // Error handling
                            }

                            // console.log(this.state);
                        })
                        .catch(error => {
                            console.log(error);
                            // this.setState({error: true});
                        });

                } else {
                    // Error handling
                }

            })
            .catch(error => {
                console.log(error);
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
                    this.setState({team: this.calculateNumberOfMember(responseData)})
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
        if (this.state.team.members) {
            let member = this.state.team.members.filter(member => _.isEqual(member.memberId, memberId));


            if (_.isEmpty(member)) {
                this.changeUserPermissions(memberId, 4)
            } else {
                this.changeUserPermissions(memberId, member[0].permissions - 1)
            }
        }
    }

    demoteUser(memberId) {
        //Get the member that we want to add in question
        if (this.state.team.members) {
            let member = this.state.team.members.filter(member => _.isEqual(member.memberId, memberId));

            if (!_.isEmpty(member)) {
                this.changeUserPermissions(memberId, member[0].permissions + 1)
            }
        }
    }

    createServerGroup() {

        console.log(this.props)
        if (_.isNull(this.state.team.serverGroupId)) {
            // Get Users in the Channel
            axios.patch('/team/servergroup/' + this.state.team._id)
                .then(response => {
                    console.log(response)

                    let responseStatus = response.data.status;
                    let responseData = response.data.server;

                    if (_.isEqual(responseStatus, "success")) {
                        this.setState({team: this.calculateNumberOfMember(responseData)})
                    } else {
                        // Error handling
                    }

                })
                .catch(error => {
                    console.log(error);
                    // this.setState({error: true});
                });
            // console.log()
        } else {
            //Team already has a group Disable Button
        }
    }

    getUserPermission(memberId) {

        let member = this.state.team.members.filter(member => _.isEqual(member.memberId, memberId));

        if (_.isEmpty(member)) {
            return 5
        }

        return member[0].permissions;

    }

    render() {

        return (
            <Aux>
                <h1>Channel Manage</h1>
                <h1>{this.state.team.teamName}</h1>
                <TeamInfo createServerGroup={this.createServerGroup.bind(this)} team={this.state.team}></TeamInfo>
                <ChannelViewer channels={this.state.channels} users={this.state.team.members}
                               demote={this.demoteUser.bind(this)}
                               promote={this.promoteUser.bind(this)}
                               loginMemberId={this.props.loginMemberId}
                               permission={this.getUserPermission.bind(this)}>{this.state.team.teamName}</ChannelViewer>
            </Aux>
        );
    }

}

export default Team;