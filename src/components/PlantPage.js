import React, {useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  //When the app starts, I can see all plants
  const [plants, setPlants] = useState([])
  const [currentSearch, setCurrentSearch] = useState("")
  console.log(currentSearch)
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r=>r.json())
    .then(data=>setPlants(data))
  },[])


  function addPlant(newPlant){
    fetch("http://localhost:6001/plants",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant) 
    })
    .then(r=>r.json())
    .then(data => setPlants([...plants,data]))
  }

  const filteredPlants = plants.filter((plant)=>{
    return plant.name.toLowerCase().includes(currentSearch.toLowerCase())
  })
  // console.log(filteredPlants)
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setCurrentSearch={setCurrentSearch}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
