import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import myData from '../json/static-data.json';
import Home from './home';
import Me from './me';
import Collection from './collection';
import Yo from './yo';

console.log('myData', myData);

class Content extends React.Component {

  render() {
    return (
      <div className="row">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/me" component={Me} />
          <Route path="/collection" component={Collection} />
          <Route path="/yo" component={Yo} />
          <Redirect to ="/" />
        </Switch>
      </div>
    );
  }
}

export default Content;
