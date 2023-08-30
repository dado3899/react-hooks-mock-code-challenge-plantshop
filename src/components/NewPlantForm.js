import React from "react";

function NewPlantForm({addPlant}) {
  //I can add a new plant to the page by submitting the form.
  function submitForm(e){
    e.preventDefault()
    console.log(e.target)
    const newPlant = {
      "name": e.target.name.value,
      "image": e.target.image.value,
      "price": e.target.price.value
    }
    addPlant(newPlant)
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      {/* <form onSubmit={submitForm}></form> */}
      <form onSubmit={(e)=>submitForm(e)}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
