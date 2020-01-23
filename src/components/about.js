import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {

    render() {
        return (
            <div>
                <Grid className="about">
                    <Cell col={4}>
                        <div style={{height: 'auto'}}>
                            <img
                                src="me.png"
                                alt="Shashank"
                                className="shashank-pic"
                            />
                        </div>
                    </Cell>

                    <Cell col={8}>
                
                        <div className="my-header">
                            <h2 className="name"><font>SHASHANK&nbsp;&nbsp;MAHESH</font></h2>
                            <h4 className="university"><font>University of Illinois at Urbana-Champaign</font></h4>
                            <hr />                            
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/shashank-mahesh-5a7708193/"
                                    rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                <a href="https://github.com/Shashank-Mahesh"
                                    rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                <a href="mailto:smahesh3@illinois.edu"
                                    rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-envelope-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>

                <div className="bio">
                    <p><font>
                    Hi, I'm Shashank!
                    I am a freshman at UIUC studying computer engineering, and am fast-tracked to graduate in 3 years.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    </font></p>
                </div>
            </div>            
        )
    }

}

export default About;