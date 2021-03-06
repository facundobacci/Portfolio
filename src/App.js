import {makeStyles} from "@material-ui/core";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import MyWork from "./Components/MyWork";
import Contact from "./Components/Contact";


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar/>
      <About title = "Sobre mi" id = "about"/>
      <Skills title = "Habilidades" id= "skills"/>
      <MyWork title = "Mis trabajos" id= "mywork"/>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
root:{
  background: 'beige'
  
},


}))

export default App;
