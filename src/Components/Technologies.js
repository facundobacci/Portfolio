import React from 'react'
import c from '../Images/net.png'
import html from '../Images/descarga.png'
import css from '../Images/CSS.png'
import js from '../Images/javascript.png'
import react from '../Images/React.png'
import sql from '../Images/sql.png'
import { Timeline, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineSeparator, } from '@material-ui/lab'
import TimeLineItem from '@material-ui/lab/TimelineItem'
import { makeStyles, Paper, Typography } from '@material-ui/core'
import { classes } from 'istanbul-lib-coverage'
import StarRating from './StarRating'
    const Technologies = () => {

    const skills = [
        {
            year:"2020",
            src:c,
            title: ".net"

        },
        {
            year:"2020",
            src:html,
            title: "Html"

        },
        {
            year:"2020",
            src:css,
            title: "Css"

        },
        {
            year:"2021",
            src:js,
            title: "JavaScript"

        },
        {
            year:"2021",
            src:react,
            title: "React"

        },
        {
            year:"2021",
            src:sql,
            title: "Sql"

        },


    ]
    const classes = useStyles();
    return (
        <Timeline align="left">
            {
                skills.map(({year,src,title,stars},index)=>(
                    <TimeLineItem key = {index}>
                        <TimelineOppositeContent>
                            <Typography variant= "h6" color= "textSecondary">
                                {year}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                           
                            <img src={src} alt= {title}className={classes.customlogo}/>
                           
                        <TimelineConnector/> 
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation ={5} className = {classes.paper}>
                                <Typography variant ="h6" component= "h1">
                                {title}
                                </Typography>
                                <StarRating stars={stars}/>   
                            </Paper>
                        </TimelineContent>
                    </TimeLineItem>
                ))
            }
        </Timeline>
    )
}

const useStyles = makeStyles((theme) => ({
    customlogo:{
            width:"40px"
    }
    
    }))

export default Technologies
