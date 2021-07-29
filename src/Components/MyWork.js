import { Card, CardContent, CardMedia, Grid, makeStyles, Typography, Link, Divider } from '@material-ui/core';
import mockData from "../mockData"

const MyWork = ({id,title}) => {
    const classes = useStyles();
    return (
        <div className= {classes.section}>
            <div className = {classes.sectionContent} id = {id}>
               <Typography variant = "h3" align="center">
                   {title}
               </Typography>
               <Grid container className={classes.grid}>
                   {
                       mockData.map(({title,image,link},index)=>(
                           <Grid item key={index} xs={12} sm={6} md={4}>
                               <Card className={classes.card}>
                                   <CardMedia className={classes.caratula} image= {image} titulo= "caratula"/>
                                   <CardContent className={classes.contenido}>
                                      <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                                          {title}
                                      </Link>
                                   </CardContent>
                               </Card>
                           </Grid>

                       ))
                   }
               </Grid>
           </div>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
    },
    sectionContent:{
        maxWidth: "75vw",
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
    },
    grid:{
        marginTop: theme.spacing(6),
    },
    card:{
        maxWidth:345,
        minHeight:275,
        margin: theme.spacing(3),
        
    },
    caratula:{    
            heigth: 0,
            paddingTop: '56.25%', //16:9
        
    },
    contenido:{
       
        "& a": {
            color: "#333",
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3),          
        },
        "& a:hover":{
            cursor: "pointer",
            color: "slateBlue",
            textDecoration: "none",
        }, 
    },

    
    
    }))

export default MyWork
