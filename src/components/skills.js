import { Grid, Cell, Card, CardTitle, CardText } from 'react-mdl';
import React, { Component } from 'react';

class Skills extends Component{
    render() {
        return (
            <div>
                <h1 className="projects-title"><font>Skills</font></h1>

                <div className="skills-grid">
                    <Grid>
                        <Cell col={6}>
                            <Card shadow={5} style={{minWidth: '320px', height: 'auto', marginRight: '5eem'}}>
                                <CardTitle expand style={{color: '#5a4'}}>
                                    Hardware & ML
                                </CardTitle>
                                <CardText style={{color: 'black'}}>
                                    PyTorch
                                </CardText>
                                <CardText style={{color: 'black'}}>
                                    Raspberry Pi, Arduino
                                </CardText>
                                <CardText style={{color: 'black'}}>
                                    OpenCV
                                </CardText>
                            </Card>
                        </Cell>

                        <Cell col={6}>
                            <Card shadow={5} style={{minWidth: '320px', height: 'auto', marginLeft: '5em'}}>
                                <CardTitle expand style={{color: '#5a4', textAlign: 'center'}}>
                                    App Development
                                </CardTitle>
                                <CardText style={{color: 'black'}}>
                                    Java, Python, C, Swift, SQL, Scheme
                                </CardText>
                                <CardText style={{color: 'black'}}>
                                    Android App Development
                                </CardText>
                                <CardText style={{color: 'black'}}>
                                    iOS App Development
                                </CardText>
                                <CardText style={{color: 'black'}}>
                                    Web Dev– HTML/CSS
                                </CardText>
                                <CardText style={{color: 'black'}}>
                                    React, Angular, Node JS
                                </CardText>
                                <CardText style={{color: 'black'}}>
                                    MySQL, Firebase
                                </CardText>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Skills;