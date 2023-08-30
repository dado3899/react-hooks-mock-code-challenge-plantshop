import React, {useState} from "react";

function PlantCard({plant}) {
  const {name,image,price} = plant
  //I can mark a plant as "sold out".
  const [inStock,setInStock] = useState(false)
  function consoleLog(word){
    console.log(word)
  }
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={()=>{setInStock(!inStock)}} className="primary">In Stock</button>
      ) : (
        <button onClick={()=>{setInStock(!inStock)}}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
