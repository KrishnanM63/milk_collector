const fname=document.querySelector("#farmername")
const vlags=document.querySelector("#village")
const addfbtn=document.querySelector("#addformer")
const collectionbtn=document.querySelector("#Add_collection")
const liters=document.querySelector("#liter")
const selections=document.querySelector("#value")
const fats=document.querySelector("#fat")
addfbtn.addEventListener("click",()=>{
   if (fname.value.trim() !== "" && vlags.value.trim() !== ""){

    const result=document.querySelector("#farmersBody").innerHTML+=`<tr><td>${fname.value}</td><td>${vlags.value}</td></tr>`
    const options=document.querySelector("#value").innerHTML+=`<option>${fname.value}</option>`
    fname.value=""
    vlags.value=""
    }else{
        alert("Fill all fields")
    }
  
})
collectionbtn.addEventListener("click",()=>{
    if (selections.value.trim() !== "" && liters.value.trim() !== ""&& fats.value !==""){
    
    const now=new Date()
    const c_table=document.querySelector("#Collectiontable").innerHTML+=`<tr><td>${selections.value}</td><td>${liters.value}</td><td>${fats.value}</td><td>${now.toString()}</td></tr>`
    selections.value=""
    liters.value=""
    fats.value=""
    }else{
         alert("Fill all fields")
    }
})
