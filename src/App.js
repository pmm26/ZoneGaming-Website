import React, { Component } from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout';
import ChannelManager from './containers/ChannelManager/ChannelManager';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <ChannelManager></ChannelManager>
        </Layout>
      </div>
    );
  }
}

export default App;
