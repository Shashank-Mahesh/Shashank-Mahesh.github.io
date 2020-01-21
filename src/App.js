import React from 'react';

import { Layout, Header, Navigation, Content } from 'react-mdl';

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
            <div className="page-content" />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
