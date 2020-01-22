import React, { Component } from 'react';
import { Grid, Card, CardTitle, CardText, CardActions, Button, Cell } from 'react-mdl';

class Projects extends Component {

    render() {
        return (
            <div className="projects">

                <div>
                    <h1 className="projects-title"><font>Projects</font></h1>
                </div>

                <div style={{margin: '5em'}}></div>

                <Grid>
                    <Cell col={12}>
                        <div className="projects-grid">
                            {this.genCard('url("sifa-app.jpg") center / cover', "SIFA Android app",
                            "Designed an Android app for SIFA (South India Fine Arts); webiste-southindiafinearts.org",
                            "https://github.com/Shashank-Mahesh/SIFA-app")}

                            {this.genCard('url("emergenspeech.png") center / cover', "Emergenspeech",
                            "An Android app that uses speech-recognition to provide medical help for someone who has just had a medical emergency before Medical help arrives.",
                            "https://github.com/Shashank-Mahesh/Emergenspeech")}

                            {this.genCard('url("factorfiction.png") center / cover', "Fact or Fiction?",
                            "An Android app that uses AI and other algorithms to help users determine the credibility of a news source.",
                            "https://github.com/Shashank-Mahesh/Emergenspeech")}
                        </div>
                    </Cell>
                    <Cell>
                        <div style={{margin: '4em'}}></div>
                    </Cell>
                    <Cell col={12}>
                        <div className="projects-grid">
                            {this.genCard('url("towerdefense.jpg") center / cover', "Tower Defense 2.0",
                            "A game much like Bloons Tower Defense reddesigned in JavaFX",
                            "https://github.com/Shashank-Mahesh/TowerDefense")}

                            {this.genCard('url("automation.jpg") center / cover', "Home Automation Model",
                            "Developed a home automation system to control various home appliances using machine learning algorithms. Used a Raspberry Pi to model home appliances.",
                            "/site")}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

    genCard(src, projName, txt, link) {
        return (
            <Card shadow={5} style={{minWidth: '320px', margin: 'auto'}}>
                <CardTitle style={{background: src, color: 'black', height: '350px'}}>
                </CardTitle>
                <CardText style={{height: '150px'}}>
                    <h4 style={{color: 'black', fontFamily:'verdana'}}>{projName}</h4>
                    {txt}
                </CardText>
                <CardActions border>
                    <Button colored target="_blank" href={link}>GitHub</Button>
                </CardActions>
            </Card>
        )
    }

}

export default Projects;