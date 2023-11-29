import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search,patchName,deletePlant}) {
  const filteredPlants = plants.filter((plant)=>{
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  const mappedPlants = filteredPlants.map((plant)=>{
    return <PlantCard key={plant.id} plant={plant} patchName={patchName} deletePlant={deletePlant}/>
  })

  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {mappedPlants}
    </ul>
  );
}

export default PlantList;
