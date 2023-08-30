import React, {useState}  from "react";

function NewPlantForm({postPlants}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)

  function submitForm(e){
    e.preventDefault()
    const newPlant = {
      "name": name,
      "image": image,
      "price": parseFloat(price)
    }
    fetch('http://localhost:6001/plants',
    {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(newPlant)
    }
    )
    .then(r=>r.json())
    .then(data=>{
      postPlants(data)
      setName("")
      setImage("")
      setPrice("")
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitForm}>
        <input type="text" name="name" value={name} placeholder="Plant name" onChange={(e)=>setName(e.target.value)}/>
        <input type="text" name="image" value={image} placeholder="Image URL" onChange={(e)=>setImage(e.target.value)}/>
        <input type="number" name="price" value={price} step="0.01" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
