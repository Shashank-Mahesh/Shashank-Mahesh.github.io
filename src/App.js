import React from 'react';

import { Layout, Header, Navigation, Content } from 'react-mdl';
import About from './components/about';

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
            <About />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
