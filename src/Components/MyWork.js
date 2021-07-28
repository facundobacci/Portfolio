import { makeStyles, Typography } from '@material-ui/core';


const MyWork = ({id,title}) => {
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
    sectionContent:{
        maxWidth: "60vw",
        margin: "0 auto",
        "& h3":{
            color: "black",
            fontSize: "3rem",
            fontWeight: "bold",
            
        }
    }
    
    
    }))

export default MyWork
