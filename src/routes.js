import React from 'react';
import Layout from './hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoutes from './components/authRoutes/privateRoutes';

import Home from './components/home/Home';
import SignIn from './components/authorization/SignIn';

import Dashboard from './components/admin/Dashboard';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoutes {...props} path='/dashboard' exact component={Dashboard}/>
        {/* <Route exact component={Dashboard} path="/dashboard"/> */}
        <Route exact component={SignIn} path="/sign_in"/>
        <Route exact component={Home} path="/"/>
      </Switch>
    </Layout>
  );
};

export default Routes;
