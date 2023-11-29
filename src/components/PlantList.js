import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const plantsComponent = plants.map((plant=>{
    return <PlantCard key={plant.id} plant={plant}/>
  }))
  return (
    <ul className="cards">
      {plantsComponent}
    </ul>
  );
}

export default PlantList;
