import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants,search,updatePlants, deletePlants}) {
  const filteredPlants = plants.filter((individualPlant)=>individualPlant.name.toLowerCase().includes(search.toLowerCase()))

  const mappedPlants = filteredPlants.map((individualPlant)=>
    <PlantCard key={individualPlant.id} updatePlants={updatePlants} plant={individualPlant} deletePlants={deletePlants}/>
  )
  return (
    <ul className="cards">{mappedPlants}</ul>
  );
}

export default PlantList;
