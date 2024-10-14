const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

//"Show the dialog" button opents the dialog modally

openButton1.addEventListener("click", () =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = "the information is the page working with modals  "
});

openButton2.addEventListener("click", () =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = "for location call me "
});

openButton3.addEventListener("click", () =>{ 
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Its all about "
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () =>{
    dialogBox.close();
});