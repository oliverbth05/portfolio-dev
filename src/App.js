import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Main from './views/Main';
import Forum from './views/Forum';
import Streamer from './views/Streamer';
import NewsAggregator from './views/NewsAggregator';

class App extends Component {
  render() {
    return (
      <div id = 'app'>
        

        <BrowserRouter>
          <Switch>
          <Route component = {Main} exact path = '/'></Route>
          <Route component = {Forum} exact path = '/forum'></Route>
          <Route component = {Streamer} exact path = '/streamer'></Route>
          <Route component = {NewsAggregator} exact path = '/news-aggregator'></Route>
          </Switch>
          
        </BrowserRouter>

        
            

          </div>
          

      

    );
  }
}

export default App;
