import Additem from "./Components/Additem"
import Update from  "./Components/Update"
import Updated from "./Components/Updated"
import Header from "./Components/Header"
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Furniturelist from "./Components/Furniturelist";
import Delete from "./Components/Delete"
import Deleted  from "./Components/Deleted";
import Deliverylist from "./Components/Deliverylist";

function App() {
  return (
    <Router>
    <div >
      <h1>WELCOME TO FURNITURE SEGMENT</h1>
      <Header/>

      <Routes>
      <Route path="/add" exact Component={Additem}/>
      
     
      <Route path="/Furniturelist" exact Component={Furniturelist}/>
      
      <Route path="/Furniturelist/delete" exact Component={Delete}/>
     
      <Route path="/Furniturelist/deleted" exact Component={Deleted}/>
      
      <Route path="/Furniturelist/updated" exact Component={Updated}/>
      
      <Route path="/Furniturelist/update" exact Component={Update}/>
      
     <Route path="/Deliverytable" exact Component={Deliverylist}/>

      </Routes>
   
      
 
    </div>
    </Router>
  );
}


export default App;