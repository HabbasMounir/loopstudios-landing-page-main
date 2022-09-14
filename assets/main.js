let creations__Gallery=document.querySelector(".creations__Gallery")
function getcards() {

   let myReauest = new XMLHttpRequest();

myReauest.onreadystatechange=function () {

   if(myReauest.status===200 && myReauest.readyState===4){
               let cards= JSON.parse(this.responseText)
               let cardsCounter=cards.length
               

   creations__Gallery.innerHTML=""
          

   for (let i= 0; i < cards.length; i++) {
      
let card =document.createElement("div") 
      card.className="card__Gallery"
console.log(cards[i].title)
card.innerHTML=`
<img class="desktop" src="./assets/images/desktop/${cards[i].src}.jpg" alt="">
<img class="mobile" src="./assets/images/mobile/${cards[i].src}.jpg" alt="">
  <div class="card__title"> ${cards[i].title} </div>

`
     creations__Gallery.appendChild(card) 
   }


   
   
   
   }
}

 myReauest.open("GET","./assets/urcreations.json",true);
 myReauest.send();
 }
 getcards()















let humburgerIcon=document.querySelector("#humburgerIcon")

let nav= document.querySelector(".nav__wrapper")

 humburgerIcon.addEventListener("click",function (){ 
     humburgerIcon.classList.toggle("humburger--active");
     nav.classList.toggle("nav__wrapper--click");
    
   //  nav.classList.toggle("nav1")
    
    
   
 }
 )

 







/////////////////////////////////////////

// 



