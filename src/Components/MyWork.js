import { makeStyles, Typography } from '@material-ui/core';


const MyWork = ({id,title}) => {
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

export default MyWork
