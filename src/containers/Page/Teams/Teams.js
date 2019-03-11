import React, {Component} from 'react';


import {Link} from 'react-router-dom'
import axios from "../../../axios";
import _ from "lodash";

class Teams extends Component {


    state = {
        teams: []
    };


    componentDidMount() {

        axios.get('/team/team/')
            .then(response => {

                let responseStatus = response.data.status;
                let responseData = response.data.server;

                if (_.isEqual(responseStatus, "success")) {
                    console.log(responseData)
                    this.setState({
                        teams: responseData
                    })


                } else {
                    // Error handling
                }
            })
            .catch(error => {
                console.log(error);
            });


    }

    generateTeams() {


        return this.state.teams.map(team => {


            return (
                <div key={team.mainChannelId}>
                    <Link to={"/team/" + team._id}><h2>{team.teamName}</h2></Link>

                </div>
            )

        })
    }


    render() {
        return (
            <div>
                Teams


                {this.generateTeams()}
            </div>
        );
    }
}

export default Teams;
