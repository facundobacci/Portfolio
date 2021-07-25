import { makeStyles } from '@material-ui/core';
import React from 'react'

const MyWork = ({id,title}) => {
    const classes = useStyles();
    return (
        <div className= {classes.section}>
           My work 
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
    }
    
    }))

export default MyWork
