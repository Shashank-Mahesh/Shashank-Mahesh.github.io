import React, { Component } from 'react';
import { Grid, Card, CardTitle, CardText, CardActions, Button, Cell } from 'react-mdl';

class Projects extends Component {

    render() {
        return (
            <div className="projects">

                <div style={{marginTop: '3em'}}>
                    <h1 className="projects-title"><font>Projects</font></h1>
                </div>

                <div style={{margin: '5em'}}></div>

                <Grid>
                    <Cell col={12}>
                        <div className="projects-grid">
                            {this.genCard('url("towerdefense.jpg") center / cover', "Tower Defense 2.0",
                            (<CardText>A game much like Bloons Tower Defense reddesigned in <b>JavaFX</b></CardText>),
                            "https://github.com/Shashank-Mahesh/TowerDefense")}

                            {this.genCard('url("site.png") center / cover', "My Portfolio",
                            (<CardText>This site! Used <b>React JS</b> and <b>react-mdl</b> to make a simple portfolio
                            to showcase my skills and projects</CardText>),
                            "https://github.com/Shashank-Mahesh/site/tree/master")}

                            {this.genCard('url("factorfiction.png") center / cover', "Fact or Fiction?",
                            (<CardText>An <b>Android app</b> that uses <b>AI</b> and <b>ML algorithms</b> to help users
                            determine the credibility of a news source.</CardText>),
                            "https://github.com/Shashank-Mahesh/Emergenspeech")}
                        </div>
                    </Cell>
                    <Cell>
                        <div style={{margin: '4em'}}></div>
                    </Cell>
                    <Cell col={12}>
                        <div className="projects-grid">
                            {this.genCard('url("emergenspeech.png") center / cover', "Emergenspeech",
                            (<CardText>An <b>Android app</b> that uses <b>speech-recognition</b> to provide medical help for someone
                                who has just had a medical emergency before Medical help arrives</CardText>),
                            "https://github.com/Shashank-Mahesh/Emergenspeech")}

                            {this.genCard('url("automation.jpg") center / cover', "Home Automation Model",
                            (<CardText>Developed a home automation system to control various home appliances
                                using <b>machine learning algorithms</b>. Used a <b>Raspberry Pi</b> to model home appliances.</CardText>),
                            "/site")}

                            {this.genCard('url("sifa-app.jpg") center / cover', "SIFA Android app",
                            (<CardText>Designed an <b>Android app</b> for SIFA (South India Fine Arts); webiste-southindiafinearts.org</CardText>),
                            "https://github.com/Shashank-Mahesh/SIFA-app")}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

    genCard(src, projName, txt, link) {
        return (
            <Card shadow={5} style={{minWidth: '15vw', marginRight: '5vw', marginLeft: '5vw'}}>
                <CardTitle style={{background: src, color: 'black', height: '350px'}}>
                </CardTitle>
                <CardText>
                    <h4 style={{color: 'black', fontFamily:'verdana'}}>{projName}</h4>
                </CardText>
                {txt}
                <CardActions border>
                    <Button colored target="_blank" href={link}>GitHub</Button>
                </CardActions>
            </Card>
        )
    }

}

export default Projects;