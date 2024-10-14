import {temples} from "../data/temples.js"
//console.log(temples)

import {url} from "../data/temples.js"
//console.log(url)

//-------------GRAB A REFERENCE TO THE DIVISION WHERE WE DISPLAY THE ITEMS
const showHere = document.querySelector("#showHere")

//--------------GET A REFERENCE TO THE HTML DIALOG ELEMENT
const mydialog = document.querySelector("#mydialog")
const mytitle = document.querySelector("#mydialog h2")
const myinfo = document.querySelector("#mydialog p")
const myclose = document.querySelector("#mydialog button")
myclose.addEventListener("click", () => mydialog.close())

//---------------------LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(data) {
    console.log(data)
    data.forEach(x => {
       console.log(x) 
       const photo = document.createElement("img")
       photo.src="${url}${x.path}"
       photo.alt=x.name
        photo.addEventListener("click", () => showStuff(x));
       showHere.appendChild(photo)
    });//end loop
    } // end function

    //START DISPLAYING ALL ITEMS IN THE JSON FILE
displayItems(temples)