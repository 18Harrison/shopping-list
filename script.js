const inputTag = document.getElementsByClassName("input")[0]
const ShoppingListTag= document.querySelector(".ShoppingList")
counter=0
const aa= "delete"
const handle =(event)=>{
   
counter+=1.
const inputLetter = counter+". "+event.target.value
const productcontainer = document.createElement("div")
const trashCOn = document.createElement("div")
trashCOn.classList.add('a')
const parentTag  = document.createElement("div")
const spanTag= document.createElement("span")
productcontainer.classList.add("pd")
parentTag.classList.add("productContainer")
spanTag.append(inputLetter)
parentTag.append(spanTag)
const trash = document.createElement("i");
trash.classList.add("fas", "fa-trash-alt")
trashCOn.append(trash)
productcontainer.append(trashCOn,parentTag)
;
ShoppingListTag.append(productcontainer);
trashCOn.addEventListener("click",()=>{
   productcontainer.remove()
})
spanTag.addEventListener("click",()=>{
   if(parentTag.classList.contains("line")){
    parentTag.classList.remove("line")
   }else{
    parentTag.classList.add("line")
   }
 
})
inputTag.value=""

}

inputTag.addEventListener("change",handle)