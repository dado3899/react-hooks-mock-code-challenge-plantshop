import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import {useState,useEffect} from 'react'

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  // Get all the plants
  useEffect(
    () => {
      fetch('http://localhost:6001/plants')
      .then(r=>r.json())
      .then(data=>setPlants(data))
    },[])

  function postPlants(newPlant){
    setPlants([...plants,newPlant])
  }

  function updatePlants(newNum,id){
    fetch(`http://localhost:6001/plants/${id}`,
    {
      method: "PATCH",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({"price": parseFloat(newNum)})
    }
    )
    .then(r=>r.json())
    .then(data=>{
      const newPlantsArr = plants.map((individualPlant)=>{
        if(individualPlant.id == id){
          return data
        }
        return individualPlant
      })
      setPlants(newPlantsArr)
    })
  }
  
  function deletePlants(id){
    fetch(`http://localhost:6001/plants/${id}`,
    {
      method: "DELETE"
    })
    const newPlantsArr = plants.filter((individualPlant)=>individualPlant.id!=id)
    setPlants(newPlantsArr)
  }
  return (
    <main>
      <NewPlantForm postPlants={postPlants}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={plants} search={search} updatePlants={updatePlants} deletePlants={deletePlants}/>
    </main>
  );
}

export default PlantPage;
