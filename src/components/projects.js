import React, { Component } from 'react';
import SingleProject from './singleProject';

class Projects extends Component {

    render() {
        return (
            <div className="projects">
                <h1>projects</h1>
                <SingleProject />
                <SingleProject />
                <SingleProject />
            </div>
        )
    }

}

export default Projects;