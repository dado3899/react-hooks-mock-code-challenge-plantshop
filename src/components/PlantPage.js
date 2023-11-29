import React, {useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants,setPlants] = useState([])
  const [search,setSearch] = useState("")
  // console.log(search)

  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(r=>r.json())
    .then(data=>setPlants(data))
  },[])

  function addPlant(newPlant){
    fetch('http://localhost:6001/plants',{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(r=>r.json())
    .then(data=>setPlants([...plants,data]))
  }

  function patchName(newName,id){
    fetch(`http://localhost:6001/plants/${id}`,{
      method:"PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newName
      })
    })
    .then(r=>r.json())
    .then(data=>{
      const newPlant = plants.map((plant)=>{
        if(plant.id===id){
          return data
        }
        return plant
      })
      setPlants(newPlant)
    })
  }

  function deletePlant(id){
    fetch(`http://localhost:6001/plants/${id}`,{
      method: "DELETE"
    })
    .then(placeholder=>{
      const deleteArr = plants.filter((plant)=>{
        return plant.id !== id
      })
      setPlants(deleteArr)
    })
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearch={setSearch}/>
      <PlantList plants={plants} search={search} patchName={patchName} deletePlant={deletePlant}/>
    </main>
  );
}

export default PlantPage;
