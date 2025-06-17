let btn = document.querySelector("button");
 let ul = document.querySelector("ul");
//let btn = document.querySelector("button");
btn.addEventListener("click" , function(){
  let input = document.querySelector("input");
 
  let item = document.createElement("li");
  let del = document.createElement("button");
  item.innerText = input.value;
  del.innerText = "delete";
  del.classList.add("delete");
  item.appendChild(del);  
  ul.appendChild(item);
  //console.log(lis)
  input.value = "";

});
ul.addEventListener("click", function(event){
  if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
  }

});
// let dels = document.querySelectorAll(".delete");
// for(del of dels){
//  delBtn.addEventListener("click", function () {
//   this.parentElement.remove();
// });
// }