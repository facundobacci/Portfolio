import { makeStyles } from '@material-ui/core';
import React from 'react'

const Skills = ({id,title}) => {
    const classes = useStyles();
    return (
        <div className= {classes.section}>
           Skills 
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
      
    }
    
    }))

export default Skills
