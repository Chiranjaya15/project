import Additem from "./Components/Additem"
import Header from "./Components/Header"
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div >
      <h1>WELCOME TO FURNITURE SEGMENT</h1>
      <Header/>

      <Routes>
      <Route path="/add" exact Component={Additem}/>
      </Routes> 
      
 
    </div>
    </Router>
  );
}


export default App;