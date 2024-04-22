import React,{ useState ,useEffect } from "react";
import axios from "axios";


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
                        <th>Furniture Name </th>
                        <th>Type</th>
                        <th>Purchase price</th>
                        <th>Status</th>
                        <th>Quantity</th>
                        <th>Selling Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        furniture.map((furniture,index)=>{
                            return <tr key={index}>
                                      <td>{furniture.name}</td>
                                      <td>{furniture.type}</td>
                                      <td>{furniture.pprice}</td>
                                      <td>{furniture.status}</td>
                                      <td>{furniture.quantity}</td>
                                     <td>{furniture.sprice}</td>
                                     <td>{furniture.description}</td>
                                     <td>
                                     <li>
                                      <a className="nav-link" href={`/Furniturelist/update?name=${furniture.name}`} 
                                      onClick={() => handleUpdateClick(furniture.name)}>
                                         Update</a></li>
                                     <li>
                                      <a className="nav-link" href={`/Furniturelist/delete?name=${furniture.name}`} 
                                      onClick={() => handleUpdateClick(furniture.name)}>
                                       Delete</a></li>
                                       <li>
                                      <a className="nav-link" href={`/Furniturelist/stock?name=${furniture.name}`} 
                                      onClick={() => handleUpdateClick(furniture.name)}>
                                       Add Stock</a></li>
                                       
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
