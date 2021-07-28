import { AppBar, List, makeStyles, Toolbar, IconButton, Drawer, Divider, ListItem, ListItemIcon } from '@material-ui/core'
import logo from "../Images/logo.jfif"
import { Link, animateScroll as scroll } from "react-scroll"
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import CancelIcon from "@material-ui/icons/Cancel"
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ComputerIcon from '@material-ui/icons/Computer';
import AndroidIcon from '@material-ui/icons/Android';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';



const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    const links = [
    
        {
            id: "about",
            text: "Sobre mi",
            icon: <AssignmentIndIcon fontSize = "large" className={classes.color}/>,
          
        },
        {
            id: "skills",
            text: "Habilidades",
            icon: <ComputerIcon fontSize = "large" className={classes.color}/>
         
        },
        {
            id: "mywork",
            text: "Mi experiencia",
            icon: <AndroidIcon fontSize = "large" className={classes.color}/>
        },
        {
            id: "contact",
            text: "Contacto",
            icon: <AlternateEmailIcon fontSize = "large" className={classes.color}/>
        }
    ]


    return (
        <>
        <AppBar position = "sticky" className = {classes.root2}>
           <Toolbar className = {classes.toolbar}>
                <img src= {logo} className = {classes.logo} alt = "Logo"/>
                <List className = {classes.menu}>
                    {
                        links.map(({id,text},index)=>(
                            <Link key={index} 
                                to = {id} 
                                spy = {true} 
                                activeClass="active" 
                                smooth = {true} 
                                duration= {500} 
                                offset={-70}> 
                                {text} 
                            </Link>
                        ))
                    }
                </List>
                <IconButton edge= "end" 
                    className = {classes.menuButton}
                    onClick ={()=>setOpen(!open)}>
                    <MenuIcon fontSize= "large"/>
                </IconButton>
                
           </Toolbar>
        </AppBar>
        <Drawer anchor= "right" open = {open} onClose={()=>setOpen(false)}>
            <IconButton onClick={()=>setOpen(false)} className={classes.cancelicon}>
                <CancelIcon/>
            </IconButton>
            <Divider/>
            {
                        links.map(({id, text,icon},index)=>(
                            <Link key={index} 
                                className={classes.sidebar}
                                to = {id} 
                                spy = {true} 
                                activeClass="active" 
                                smooth = {true} 
                                duration= {500} 
                                offset={-70}>
                                <ListItem component = "h5">
                              
                                    <span> 
                                        <ListItemIcon>
                                            {icon}
                                        </ListItemIcon>                                  
                                    </span>{text}
                                </ListItem>
                                <Divider/>
                             </Link>
                        ))
                    }
        </Drawer>
        </>
    )
}






const useStyles = makeStyles((theme) => ({
    root2:{
        backgroundColor: "#ffffff",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    toolbar:{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    
    logo:{
      height: "4.5rem",
      objectFit : "contain",
      "&:hover":{
          cursor: "pointer"
      }
    },
    menu: {
        [theme.breakpoints.down("sm")]:{
            display:"none"
        },
        "& a": {
            color: "#333",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3),
        },
        "& a:hover":{
            cursor: "pointer",
            color: "slateBlue",
        }, 
    },
    menuButton: {
        display: "none",
        [theme.breakpoints.down("sm")]:{
            display:"block",
            color: "black",
            position: "absolute",
            top: 0,
            right: 10,
        }
    },
    sidebar:{
        [theme.breakpoints.down("sm")]:{
            width: "70vw",
        },
        "& h5": {
            margin: theme.spacing(7,0,7,4),
            fontSize: "1.3rem",
        },
        "& h5:hover": {
            color:"slateBlue",
            cursor:"pointer",
        }
        

    },
    cancelicon:{
        color: "slateBlue",
        position: "absolute",
        top: 0,
        right: 10,
    },
    color: {
        color: "#000000"
    } ,

      
    
    
    }))

export default Navbar


