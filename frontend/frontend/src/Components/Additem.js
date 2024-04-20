import React,{useState} from "react";

export default function AddStudent(){
    return(
        <div>
<h1>New Furniture</h1>
    <form action="/submit" method="post">
        <div>
            <label for="furnitureName">Furniture Name:</label>
            <input type="text" id="furnitureName" name="furnitureName" placeholder="Enter furniture name"/>
        </div>
        <div>
            <label for="furnitureType">Type:</label>
            <select id="furnitureType" name="furnitureType">
                <option value="Desks">Select</option>
                <option value="Desks">Desks</option>
                <option value="Chair">Chair</option>
                <option value="Container">Container</option>
                <option value="Beds">Beds</option>
            </select>
        </div>
        <div>
            <label for="purchasePrice">Purchase Price (LKR):</label>
            <input type="number" id="purchasePrice" name="purchasePrice" min="0.00" max="10000.00" step="0.01"/>
        </div>
        <div>
            <label for="status">Status:</label>
            <select id="status" name="status">
                <option value="Available">Available</option>
                <option value="Out of Stock">Out of Stock</option>
                <option value="Obsolete">Obsolete</option>
            </select>
        </div>
        <div>
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="0" max="10000" step="1"/>
        </div>
        <div>
            <label for="sellingPrice">Selling Price (LKR):</label>
            <input type="number" id="sellingPrice" name="sellingPrice" min="0.00" max="1000000000.00" step="0.01"/>
        </div>
        <input type="submit" value="Submit"/>
    </form>

    </div>


    )
    
}
