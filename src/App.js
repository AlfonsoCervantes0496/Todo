import react, { useEffect, useState } from "react";
// importacion de compnentes
import Header from "./Components/Header";
import { Component } from "react";
import Container from "./Components/container";
import './App.css'


function App() {
//state
const [data,SetData]=useState([])
const[DarkMode,SetDarkmode]=useState(false)

const[mostrar,SetMostrar]=useState("all")
const[all,setAll]=useState([])


//Efect
useEffect(()=>{
  const handleData=async()=>{
const response = await fetch("https://jsonplaceholder.typicode.com/todos")
const result =await response.json();
console.log(result)

setAll(result.slice(0,20))
  SetData(result.slice(0,20))

  }
  handleData()},[]



)
//funciones


const Darkstatus=()=>{
  DarkMode?SetDarkmode(false):SetDarkmode(true)
}
const filterdata=(val)=>{
if(val==="complete"){
  SetData(all.filter(filtro=>filtro.completed===true))
}
if(val==="incomplete"){
  SetData(all.filter(filtro=>filtro.completed===false))
}
if(val==="all"){
  SetData(all)
}
}
const ChangeBTN=(ide)=>{
  const indice=all.map(identificador=>identificador.id).indexOf(ide)
  if(all[indice].completed===false)
  {
    all[indice].completed=true
   
  }
else{
  all.splice(indice,1)

}

  SetData(all.map(recorrido=>( recorrido )))
  console.log(data)
 } 
  


  return (<>
  <Header funcion={Darkstatus} Dark={DarkMode} filtro={filterdata}/>
  <div className={DarkMode?"w":"b"}>
  
  {
    
   
  data.map((element)=>(
    <Container key={element.id} id={element.id} title={element.title } status={element.completed} Dark={DarkMode}  BTN={ChangeBTN}/>

  ))
  }




  </div>
  </>
    
  );
}

export default App;
