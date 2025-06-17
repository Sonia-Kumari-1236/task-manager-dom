let btn = document.querySelector("button");

//let btn = document.querySelector("button");
btn.addEventListener("click" , function(){
  let input = document.querySelector("input");
  let ul = document.querySelector("ul");
  let item = document.createElement("li");
  let del = document.createElement("button");
  item.innerText = input.value;
  del.innerText = "delete";
  del.classList.add("delete");
  item.appendChild(del);  
  ul.appendChild(item);
  //console.log(lis)
  input.value = "";

})