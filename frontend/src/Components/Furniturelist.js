import React,{ useState ,useEffect } from "react";
import axios from "axios";
import styles from "./styles.css";


 function Updateitems(){

    const[furniture,setfurniture]=useState([]);
    const[furnituren,setfurnituren]=useState([]);
    


  useEffect(()=>{
    axios.get("http://localhost:8090/furniture/")
    .then(res=>setfurniture(res.data))
    .catch((err)=>{console.log(err)})
  },[])

  const handleUpdateClick=(name)=>{

    setfurnituren(name);
    console.log(name);
  }


   
    return(

        <div className="container">
            <form>

            <div className="mt-3">  
            <h3>
                <table className="table">
                <thead>
                    <tr>
                       <th>Number </th>
                        <th>Furniture Name </th>
                        <th>Type</th>
                        <th>Purchase price</th>
                        <th>Status</th>
                        <th>Quantity</th>
                        <th>Selling Price</th>
                        <th>Description</th>
                        <th>Profit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        furniture.map((furniture,index)=>{
                            return <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>{furniture.name}</td>
                                      <td>{furniture.type}</td>
                                      <td>{furniture.pprice}</td>
                                      <td>{furniture.status}</td>
                                      <td>{furniture.quantity}</td>
                                     <td>{furniture.sprice}</td>
                                     <td>{furniture.description}</td>
                                     <td>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <a 
                                                className="nav-link" 
                                                href={`/Furniturelist/update?name=${furniture.name}`} 
                                                onClick={() => handleUpdateClick(furniture.name)}
                                                style={{ textDecoration: "none", color: "#007BFF" }}
                                            >
                                                Update
                                            </a>
                                        </li>
                                        <br/>
                                        <br/>
                                        <li>
                                            <a 
                                                className="nav-link" 
                                                href={`/Furniturelist/delete?name=${furniture.name}`} 
                                                onClick={() => handleUpdateClick(furniture.name)}
                                                style={{ textDecoration: "none", color: "#DC3545" }}
                                            >
                                                Delete
                                            </a>
                                        </li>
                                    </ul>
                                </td>

                                </tr>
                        })
                    }
                </tbody>
                </table>
            </h3>       
           </div>        
         </form>
    </div>
    )
}

export default Updateitems;
