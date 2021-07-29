import { Card, CardContent, CardMedia, CardActions, Divider } from '@material-ui/core';
import { makeStyles, Typography, Button } from '@material-ui/core';
import React from 'react'
import foto from '../Images/Facu.jpg'
import TypeWriterEffect from 'react-typewriter-effect';
import cv from '../Images/CV-FACUNDO BACCI.pdf'

const About = ({id,title}) => {
    const classes = useStyles();
    return (
        <div className= {classes.section}>
           <div className = {classes.sectionContent} id = {id}>
               <Typography variant = "h3" align="center">
                   {title}
               </Typography>
               <Card className= {classes.card}>
                   <CardMedia image= {foto} className = {classes.media} title="picture"/>
                   <CardContent className={classes.cardcontent}>
                       <TypeWriterEffect
                        text= "Hola! Mi nombre es Facundo Bacci"
                        textStyle={{fontSize: "1.5rem", fontWeight:"700px",color:"black"}}
                        startDelay= {100}
                        cursorColor = "black"
                        typeSpeed= {100}
                        />
                        <Divider/>
                       <TypeWriterEffect
                        text= "Soy desarrollador de software"
                        textStyle={{fontSize: "1.2rem", fontWeight:"500px",color:"black"}}
                        startDelay= {3000}
                        cursorColor = "black"
                        typeSpeed= {100}
                        />
                        <Typography variant="h6" color= "textSecondary">
                            - Naci en La Plata, Buenos Aires
                       </Typography>
                       <Typography variant="h6" color= "textSecondary">
                            - Estudio en la Universidad Nacional de La Plata desde el 2018
                       </Typography>
                       <Typography variant="h6" color= "textSecondary">
                            - Me apasionan las tecnologias y el mundo de la informatica
                       </Typography>
                       <Typography variant="h6" color= "textSecondary">
                            - Me considero con una gran capacidad de aprendizaje ante desafios nuevos para seguir formandome como profesional
                       </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained"className={classes.pdf}>
                        <a href={cv}download> Descarga mi CV   </a>              
                        </Button>
                    </CardActions>
               </Card>
           </div>
                    
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
      
    },
    sectionContent:{
        maxWidth: "90vw",
        margin: "0 auto",
        marginTop: 20,
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
    },   
    media:{
        width: "300px",
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(3),

        
        
    },
    card:{
        height:"70vh",
        display: "flex",
        marginTop: theme.spacing(4),
        position: "relative",
        
    },
    pdf:{
        position: "absolute",
        bottom: "2.5rem",
        right: "3rem",
        [theme.breakpoints.down("sm")]:{

            bottom: "2rem",
            right:"1rem",
        },
        backgroundColor: "#25DFE8",
        padding: theme.spacing(3),
        "&:hover":{
            backgroundColor: "slateBlue",
        },
        "& a ":{
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
        },
    },
    cardcontent:{
        marginTop: theme.spacing(2),
        "& h6":{
            marginTop: theme.spacing(3),
            color: "black",
            fontSize: "1.4rem",
            fontWeight: "bold",
            [theme.breakpoints.down("sm")]:{
                display: "none",
            },
            
        },
        
    }
    

    
    }))

export default About
