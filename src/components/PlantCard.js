import React, {useState} from "react";

function PlantCard({plant,patchName,deletePlant}) {
  const [stock,setStock] = useState(true)
  const {id,image,name,price} = plant

  function handleSubmit(e){
    e.preventDefault()
    patchName(e.target.name.value,id)
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={()=>setStock(false)}>In Stock</button>
      ) : (
        <button onClick={()=>setStock(true)}>Out of Stock</button>
      )}
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input name="name"placeholder="New Name"></input>
      </form>
      <button onClick={()=>deletePlant(id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
