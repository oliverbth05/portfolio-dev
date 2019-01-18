import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './views/Main';
import Forum from './views/Forum';
import Streamer from './views/Streamer';
import NewsAggregator from './views/NewsAggregator';

import ScrollHelper from './components/ScrollHelper';

class App extends Component {
  render() {
    return (
      <div id = 'app'>
        <BrowserRouter>
          <Switch>
           <ScrollHelper>
              <Route component = {Main} exact path = '/'></Route>
              <Route component = {Forum} exact path = '/forum'></Route>
              <Route component = {Streamer} exact path = '/streamer'></Route>
              <Route component = {NewsAggregator} exact path = '/news-aggregator'></Route>
        </ScrollHelper>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
