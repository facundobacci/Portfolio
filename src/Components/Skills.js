import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Technologies from './Technologies';

const Skills = ({id,title}) => {
    const classes = useStyles();
    return (
        <div className= {classes.section}>
            <div className = {classes.sectionContent} id = {id}>
               <Typography variant = "h3" align="center">
                   {title}
               </Typography>            
               <Technologies/>
           </div>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
      margin:"auto",
    },
    sectionContent:{
        maxWidth: "60vw",
        margin: "0 auto",
        "& h3":{
            color: "black",
            fontSize: "3rem",
            fontWeight: "bold",         
            
        },
        "& h3:hover":{
            cursor: "pointer",
            color: "slateBlue",
            textDecoration: "none",
        },
    }
    
    
    }))

export default Skills
