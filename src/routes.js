import React from 'react';
import Layout from './hoc/Layout';
import { Switch } from 'react-router-dom';

import PrivateRoute from './components/authRoutes/privateRoutes';
import PublicRoute from './components/authRoutes/publicRoutes';

import Home from './components/home/Home';
import SignIn from './components/authorization/SignIn';

import Dashboard from './components/admin/Dashboard';
import AdminMatches from './components/admin/matches/AdminMatches';
import AddMatch from './components/admin/matches/AddMatch';
import AdminPlayers from './components/admin/players/AdminPlayers';
import AddPlayer from './components/admin/players/AddPlayer';
import Team from './components/team/Team';
import Matches from './components/matches/Matches';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path='/admin_players/add_player' exact component={AddPlayer}/>
        <PrivateRoute {...props} path='/admin_players/add_player/:id' exact component={AddPlayer}/>
        <PrivateRoute {...props} path='/admin_players' exact component={AdminPlayers}/>
        <PrivateRoute {...props} path='/admin_matches/add_match' exact component={AddMatch}/>
        <PrivateRoute {...props} path='/admin_matches/add_match/:id' exact component={AddMatch}/>
        <PrivateRoute {...props} path='/admin_matches' exact component={AdminMatches}/>
        <PrivateRoute {...props} path='/dashboard' exact component={Dashboard}/>
        <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
        <PublicRoute {...props} restricted={false} path="/team" exact component={Team}/>
        <PublicRoute {...props} restricted={false} path="/matches" exact component={Matches}/>
        <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
      </Switch>
    </Layout>
  );
};

export default Routes;
