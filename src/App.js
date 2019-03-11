import React, {Component} from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout';
import Page from './containers/Page/Page';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <Layout>
                  <Page/>
              </Layout>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
