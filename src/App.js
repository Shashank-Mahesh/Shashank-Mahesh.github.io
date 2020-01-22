import React from 'react';
import './App.css';

import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="Shashank Mahesh" className=".header" scroll>
            <Navigation>
                <a href="/">Resume</a>
                <a href="/">Projects</a>
                <a href="/">About Me</a>
            </Navigation>
        </Header>
        <Content>
            <Main/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
