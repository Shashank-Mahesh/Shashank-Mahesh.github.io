import React from 'react';

import { Layout, Header, Navigation, Content } from 'react-mdl';
import About from './components/about';
import Projects from './components/projects';

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
          <h1>Hello World</h1>
            <About />
            <Projects />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
