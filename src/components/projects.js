import React, { Component } from 'react-mdl';
import SingleProject from './singleProject';

class Projects extends Component {

    render() {
        return (
            <div>
                <h1>projects</h1>
                <SingleProject />
                <SingleProject />
                <SingleProject />
            </div>
        )
    }

}

export default Projects;