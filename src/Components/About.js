import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const About = ({id,title}) => {
    const classes = useStyles();
    return (
        <div className= {classes.section}>
           <div className = {classes.sectionContent} id = {id}>
               <Typography variant = "h3">
                   {title}
               </Typography>
           </div>
                    
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
      
    },
    sectionContent: {
        maxWidth: "80vh",
        margin: "0 auto",
    }

    
    }))

export default About
