import React, {Component} from 'react';

import axios from '../../axios';

import classes from './Page.css';

import {NavLink, Route, Switch} from 'react-router-dom'
import Home from './Home/Home'
import Teams from './Teams/Teams'
import Team from './Team/Team'
import Groups from './Groups/Groups'
import ManageTeam from "./ManageTeam/ManageTeam";
import CreateTeam from "./CreateTeam/CreateTeam";
import Member from "./Member/Member";
import Members from "./Members/Members";
import MemberDashboard from "./MemberDashboard/MemberDashboard";
import AdminPage from "./AdminPage/AdminPage";


class Page extends Component {

    state = {
        member: {
            _id: 1
        }

    }

    componentDidMount() {
        //GET Team TODO move to higher component
        axios.put('/auth/me')
            .then(response => {

                let memberId = response.data.memberId;
                let responseData = response.data.server;


                // console.log(memberId);
                this.setState({
                    member: {_id: memberId}
                })
                // this.setState({teams: updatedPosts});
                // console.log(this.state);


            })
            .catch(error => {
                console.log(error);
            });


    }

    render() {

        return (
            <div className={classes.PageSize}>
                <header className={classes.Page}>
                    <nav>
                        <ul>
                            {/*Main Routes*/}

                            <li><NavLink to="/admin" exact>Admin</NavLink></li>
                            <li><NavLink to="/" exact>Home</NavLink></li>

                            {/*TeamRoutes*/}
                            <li><NavLink to="/team/create" exact>Create Team</NavLink></li>
                            <li><NavLink to="/team">Teams</NavLink></li>
                            <li><NavLink to="/team" exact>Your Team</NavLink></li>
                            <li><NavLink to="/team/dashboard/1" exact>ManageTeam</NavLink></li>


                            {/*MemberRoutes*/}
                            <li><NavLink to="/member" exact>Members</NavLink></li>
                            <li><NavLink to="/member" exact>Member</NavLink></li>
                            <li><NavLink to="/member/dashboard" exact>Member Settings</NavLink></li>

                            {/*Groups*/}
                            <li><NavLink to="/groups" exact>Groups</NavLink></li>

                        </ul>
                    </nav>
                </header>
                <Switch className={classes.PageContent}>
                    {/*Main Routes*/}
                    <Route path="/admin" exact component={AdminPage}/>
                    <Route path="/" exact component={Home}/>

                    {/*TeamRoutes*/}
                    <Route path="/team/create" exact component={CreateTeam}/>
                    <Route path="/team" exact component={Teams}/>
                    <Route path="/team/dashboard/:teamId/" component={ManageTeam}/>
                    <Route path="/team/:teamId"
                           render={(props) => <Team {...props} loginMemberId={this.state.member._id}/>}/>


                    {/*MemberRoutes*/}
                    <Route path="/member" exact component={Members}/>
                    <Route path="/member/dashboard" exact component={MemberDashboard}/>
                    <Route path="/member/:memberId" component={Member}/>

                    {/*Groups*/}
                    <Route path="/groups" exact component={Groups}/>
                </Switch>


            </div>
        );
    }

}

export default Page;