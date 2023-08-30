import React, {useState} from "react";

function PlantCard({plant,updatePlants,deletePlants}) {
  const [inStock,setInStock] = useState(true)
  const [updatePrice, setUpdatePrice] = useState(false)
  const [newPrice,setNewPrice] = useState(plant.price)
  // <input
  //       type="text"
  //       id="search"
  //       placeholder="Type a name to search..."
  //       value = {search}
  //       onChange={(e) => setSearch(e.target.value)}
  //     />
  function handleUpdate(e){
    e.preventDefault()
    updatePlants(newPrice,plant.id)
    setUpdatePrice(!updatePrice)
  }
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {/* {<p>Price: {plant.price}</p>} */}
      {updatePrice ? (
        <form onSubmit={handleUpdate}>
          <input type="text" value={newPrice} onChange={(e)=>setNewPrice(e.target.value)}></input>
        </form>
      ) : (
        <p onClick={()=>setUpdatePrice(!updatePrice)}>Price: {plant.price}</p>
      )}
      {inStock ? (
        <button className="primary" onClick={()=>setInStock(!inStock)}>In Stock</button>
      ) : (
        <button onClick={()=>setInStock(!inStock)}>Out of Stock</button>
      )}
      <button onClick={()=>deletePlants(plant.id)}>deletePlant</button>
    </li>
  );
}

export default PlantCard;
