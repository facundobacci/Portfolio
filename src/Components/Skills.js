import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const Skills = ({id,title}) => {
    const classes = useStyles();
    return (
        <div className = {classes.sectionContent} id = {id}>
               <Typography variant = "h3">
                   {title}
               </Typography>
           </div>
    )
}
const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
      
    }
    
    }))

export default Skills
