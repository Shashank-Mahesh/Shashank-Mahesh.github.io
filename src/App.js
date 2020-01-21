import React from 'react';

import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="Shashank Mahesh" scroll>
            <Navigation>
                <a href="/">Resume</a>
                <a href="/">Projects</a>
                <a href="/">About Me</a>
            </Navigation>
        </Header>
        <Content>
            <h1>hi</h1>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
