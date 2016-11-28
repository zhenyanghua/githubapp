import React, { Component } from 'react';
import './App.css';
import Typology from './SalemMap_NE_light_compressed.jpg';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import {Link} from 'react-router'

class App extends Component {
  render() {
    const title = "Zhenyang Hua";
    return (
      <div className="App">
        <Layout style={{background: `url(${Typology}) center / cover`}} fixedHeader>
          <Header className="App-header" title={title}>
            <Navigation className="App-navigation">
              <Link to={`/`}>Home</Link>
              <Link to={`projects`}>Projects</Link>
            </Navigation>
          </Header>
          <Drawer title={title}>
            <Navigation>
              <Link to={`/`}>Home</Link>
              <Link to={`projects`}>Projects</Link>
            </Navigation>
          </Drawer>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
