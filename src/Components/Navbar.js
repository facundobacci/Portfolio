import { AppBar, List, makeStyles, Toolbar, IconButton, Drawer } from '@material-ui/core'
import logo from "../Images/logo.jfif"
import { Link, animateScroll as scroll } from "react-scroll"
import { InfoTwoToneIcon } from '@material-ui/icons/InfoTwoTone'
import { EmojiObjectsTwoToneIcon } from '@material-ui/icons/EmojiObjectsTwoTone'
import { BuildTwoToneIcon } from '@material-ui/icons/BuildTwoTone'
import { ContactMailTwoToneIcon } from '@material-ui/icons/ContactMailTwoTone'
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import CancelIcon from "@material-ui/icons/Cancel"

const links = [
    
    {
        id: "about",
        text: "About me",
        icon: <InfoTwoToneIcon/>
    },
    {
        id: "Skills",
        text: "Skills",
        icon: <EmojiObjectsTwoToneIcon/>
    },
    {
        id: "miWork",
        text: "My work",
        icon: <BuildTwoToneIcon/>
    },
    {
        id: "contact",
        text: "Get in touch",
        icon: <ContactMailTwoToneIcon/>
    }



]

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
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
                <IconButton edge= "end" className = {classes.menuButton}>
                    <MenuIcon fontSize= "large"/>
                </IconButton>
                
           </Toolbar>
        </AppBar>
        <Drawer anchor= "right" open = {open} onClose={()=>setOpen(false)}>
            <IconButton className={classes.menuButton} onClick={()=>setOpen(false)}>
                <CancelIcon/>
            </IconButton>
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
    }  

      
    
    
    }))

export default Navbar


