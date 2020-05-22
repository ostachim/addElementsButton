const button = document.querySelector("button");
let number = 1;
function addElement(){
    const div = document.createElement("div");
    div.textContent = number;
    document.body.appendChild(div);  
    if(number % 5 == 0){
        div.setAttribute("class","circle");
    }
    number++;
      
   
  
}



button.addEventListener("click", addElement);

