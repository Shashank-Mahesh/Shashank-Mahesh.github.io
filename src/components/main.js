import React from 'react';
import About from "./about";
import Projects from './projects';

import { Layout, Header, Navigation, Content, HeaderRow } from 'react-mdl';
import Skills from './skills';

const Main = () => (
    <Layout>
        <Header waterfall hideTop className="header">
            <HeaderRow title="Shashank Mahesh">
                <h5 style={{textAlign: "right"}}>Written in ReactJS</h5>
            </HeaderRow>
            <HeaderRow>
                <Navigation>
                    <a href="#about">About Me</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                </Navigation>
            </HeaderRow>
        </Header>
        <Content className="main-div">
        <div>
            <a id="about"></a>
            <About />
            <a id="skills"></a>
            <Skills />
            <a id="projects"></a>
            <Projects />
        </div>
        </Content>
    </Layout>

    
)
  
export default Main;