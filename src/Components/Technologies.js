import React from 'react'
import c from '../Images/net.png'
import html from '../Images/descarga.png'
import css from '../Images/CSS.png'
import python from '../Images/Python.png'
import git from '../Images/Git.png'
import java from '../Images/Java.png'
import react from '../Images/React.png'
import sql from '../Images/sql.png'
import { Timeline, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineSeparator, } from '@material-ui/lab'
import TimeLineItem from '@material-ui/lab/TimelineItem'
import { Card, CardContent, makeStyles, Paper, Typography, Tooltip } from '@material-ui/core'
import StarRating from './StarRating'
    const Technologies = () => {

    const skills = [
        {
            year:"2020",
            src:c,
            title: "C# / .Net",
            stars: 4,

        },
        {
            year:"2020",
            src:html,
            title: "Html",
            stars: 3,
        },
        {
            year:"2020",
            src:css,
            title: "Css",
            stars: 3,
        },
        {
            year:"2021",
            src:react,
            title: "React",
            stars: 2,
        },
        {
            year:"2021",
            src:sql,
            title: "Sql",
            stars: 4,
        },
        {
            year:"2021",
            src:java,
            title: "Java",
            stars: 3,
        },
        {
            year:"2021",
            src:git,
            title: "Git",
            stars: 3,
        },
        {
            year:"2021",
            src:python,
            title: "python",
            stars: 3,
        },
    ]
    const classes = useStyles();
    return (
        <Card className = {classes.card}> 
        <CardContent className = {classes.cardcontent}>
            <Timeline align="left">
                {
                    skills.map(({year,src,title,stars},index)=>(
                     <TimeLineItem key = {index}>
                         <TimelineOppositeContent>
                             <Typography variant= "h6" color= "textSecondary">
                                 {year}
                             </Typography>
                          </TimelineOppositeContent>
                           <TimelineSeparator className={classes.images}>
                           
                                <img src={src} alt= {title}className={classes.customlogo}/>
                           
                          <TimelineConnector/> 
                          </TimelineSeparator>

                          <TimelineSeparator className={classes.tooltip}>
                                <Tooltip title={title}>
                                    <img src={src} alt= {title}className={classes.customlogo}/>
                                </Tooltip>
                          <TimelineConnector/> 
                          </TimelineSeparator>
                          <TimelineContent>
                              <Paper elevation ={5} className = {classes.paper}>
                                  <Typography variant ="h5" component= "h1">
                                   {title}
                                   </Typography>
                                   <StarRating stars={stars}/>   
                             </Paper>
                          </TimelineContent>
                     </TimeLineItem>
                ))
            }
            </Timeline>
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles((theme) => ({
    customlogo:{
            width:"40px"
    },
    card:{
        width: "70vh",
        height:"86vh",
        display: "flex",
        margin:"auto",
        marginTop: theme.spacing(4),
        position: "relative",
        [theme.breakpoints.down("sm")]:{

            height:"86vh",
            width:"auto"
        },
        
    },
    cardcontent:{
        marginTop: theme.spacing(2),
        margin: "auto",
        "& h6":{
            marginTop: theme.spacing(0.5),
            color: "black",
            fontSize: "1rem",
            fontWeight: "bold",
            

            
            
        },
        
    },
    paper: {
        padding:"6px 16px",
        maxWidth:"200px",
        [theme.breakpoints.down("sm")]:{

            display:"none"
        },
        
    },
    images:{
        display:"flex",
        [theme.breakpoints.down("sm")]:{

            display:"none"
        },
    },
    tooltip:{
        display:"none",
        [theme.breakpoints.down("sm")]:{

            display:"flex",
            "&:hover":{
                cursor:'pointer',
            },
        },
    }
    
    }))

export default Technologies
