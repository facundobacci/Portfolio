import { Card, CardContent, Grid, makeStyles,  TextField, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';

const Contact = ({id,title}) => {
    const classes = useStyles();
    return (
        <div className= {classes.section}>
            <div className = {classes.sectionContent} id = {id}>
               <Typography variant = "h3" align="center">
                   {title}
               </Typography>
                    <Card style={{maxWidth:"450",margin: "0 auto", padding:"20px 5 px",marginTop:"2.5rem"}}>
                        <CardContent>
                        
                            <form>
                            <Grid container spacing={1}>
                                <Grid xs={12}sm={6} item >
                                    <TextField label= "Nombre" placeholder= "ingresa tu nombre " variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12}sm={6} item >
                                    <TextField label= "Apellido" placeholder= "ingresa tu apellido " variant="outlined" fullWidth required/>
                                </Grid>
                                <Grid xs={12} item >
                                    <TextField type="email" label= "Mail" placeholder= "ingresa tu Mail " variant="outlined" fullWidth required/>
                                </Grid>
                                <Grid xs={12} item >
                                    <TextField type="number" label= "Telefono" placeholder= "ingresa tu numero de telefono " variant="outlined" fullWidth required/>
                                </Grid>
                                <Grid xs={12} item >
                                    <TextField label= "Mensaje" multiline rows={4} placeholder= "Escribe tu mensaje" variant="outlined" fullWidth required/>
                                </Grid>
                                <Grid xs={12} item >
                                <Button type="submit" variant="contained" className={classes.pdf}>  
                                    Enviar
                                </Button>  
                                </Grid>
                            </Grid>
                            </form>
                        </CardContent>
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
        maxWidth: "60vw",
        margin: "0 auto",
        "& h3":{
            color: "black",
            fontSize: "3rem",
            fontWeight: "bold",
            
        },
        "& h3:hover":{
            cursor: "pointer",
            color: "black",
            textDecoration: "none",
        },
    }, 
    pdf:{
        backgroundColor: "#25DFE8",
        padding: theme.spacing(1.5),
        "&:hover":{
            backgroundColor: "black",
        },
        "&":{
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
        },
    },
    }))

export default Contact
