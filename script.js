let heart_btn = document.getElementsByClassName("heart_btn") 
let plus_btn = document.getElementsByClassName("plus_btn") 
let Quant = document.getElementsByClassName("Quant") 
let minus_btn =document.getElementsByClassName("minus_btn") 
let finalPrice = document.getElementById("finalPrice") 
let delete_btn = document.getElementById("delete") 
let item=document.getElementsByClassName("Item") 
let prices =[1379, 176 , 249] 
console.log(plus_btn)
for (let i=0; i< heart_btn.length; i++) {
    //Heart Button 
    heart_btn[i].addEventListener("click", function (){
        if (heart_btn[i].style.color == "red" ) {
            heart_btn[i].style.color = "black";
        } else{
            heart_btn[i].style.color = "red";
 }
});

//plus button 
plus_btn[i].addEventListener("click" , function() {
    Quant[i].value = Number(Quant[i].value)+1; 
    finalPrice.value = Number(finalPrice.value)+prices[i] 
}
) 
//minus button 
minus_btn[i].addEventListener("click") , function() {
    Quant[i].value = Number(Quant[i].value)-1; 
    finalPrice.value = Number(finalPrice.value)-prices
}
}