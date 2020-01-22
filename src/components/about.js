import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div className="about">
                <img
                    src="https://webstockreview.net/images/male-clipart-masculine-16.png"
                    alt="Shashank"
                    className="shashank-pic"
                />
            
                <div className="my-header">
                    <h1 className="name"><font>SHASHANK&nbsp;&nbsp;MAHESH</font></h1>
                    <h4 className="university"><font>University of Illinois at Urbana-Champaign</font></h4>
                    <hr />
                    <h4 className="skills"><font>Java &nbsp;|&nbsp; Python &nbsp;|&nbsp; C &nbsp;|&nbsp; SQL &nbsp;|&nbsp; HTML / CSS &nbsp;|&nbsp; ReactJS &nbsp;|&nbsp; Swift</font></h4>
                    
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

                <div className="bio">
                    <p><font>
                    Hi I'm Shashank!
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