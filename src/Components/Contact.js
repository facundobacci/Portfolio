import { makeStyles } from '@material-ui/core';
import React from 'react'

const Contact = ({id,title}) => {
    const classes = useStyles();
    return (
        <div className= {classes.section}>
           Contact 
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
      
    }
    
    }))

export default Contact
