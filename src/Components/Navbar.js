import { AppBar, List, makeStyles, Toolbar } from '@material-ui/core'
import logo from "../Images/logo.jfif"
import { Link, animateScroll as scroll } from "react-scroll"
import { InfoTwoToneIcon } from '@material-ui/icons/InfoTwoTone'
import { EmojiObjectsTwoToneIcon } from '@material-ui/icons/EmojiObjectsTwoTone'
import { BuildTwoToneIcon } from '@material-ui/icons/BuildTwoTone'
import { ContactMailTwoToneIcon } from '@material-ui/icons/ContactMailTwoTone'

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
    return (
        <AppBar position = "sticky" className = {classes.root}>
           <Toolbar className = {classes.toolbar}>
                <img src= {logo} className = {classes.logo} alt = "Logo"/>
                <List className = {classes.menu}>
                    {
                        links.map(({id,text},index)=>(
                            <Link key={index} to = {id} spy = {true} smoot = {true} duration= {500} offset={-70}> {text} </Link>
                        ))
                    }
                </List>
           </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles((theme) => ({
    root:{
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
      height: "6.5rem",
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
        }    
    },

      
    
    
    }))

export default Navbar


