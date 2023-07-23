let select = document.getElementById("colorSelect");
let btn =  document.querySelector("input[type=button]")
btn.addEventListener("click", removeColor(color);

          function removeColor(value){      
    for (const child of select.children) {
        if(child.value === select.value){
                child.remove();
         }
      }
	}




