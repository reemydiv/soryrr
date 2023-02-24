let btn=document.querySelector("button");
window.onscroll=function(){
    if(window.scrollY>500){
        btn.style.display="block";
    }else{
        btn.style.display="none";
    }
};

btn.onclick=function(){
    window.scrollTo({left:0,
        top:0,
        behavior:"smooth",

    }); 
    
};
    

let basc=document.querySelector(".inp");

basc.addEventListener("click",function(){
    let desc= this.nextElementSibling;
    if(desc.style.display =="block"){
        desc.style.display="none"}
        else{
           desc.style.display="block"
        }

     
       

});







var sliderImages = Array.from(document.querySelectorAll(".ime img"));
var slidesCount =  sliderImages.length;
var currentSlide = 1;
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");
nextButton.onclick =  nextSlide;
prevButton.onclick =  prevSlide;

var bascElement =document.createElement("ul");
bascElement.setAttribute("id","basc-ul");
for (var i=1;  i<=slidesCount;  i++){
var bascItem =document.createElement("li");

bascItem.setAttribute("data-index",i);
bascItem.appendChild(document.createTextNode(i));
bascElement.appendChild(bascItem);
}

document.getElementById("indi").appendChild(bascElement);

var  createdList = document.getElementById("bacs-ul");

var createdBullents = Array.from(document.querySelectorAll("#basc-ul li"));
console.log(createdBullents);
for(var i=0; i< createdBullents.length; i++){
    createdBullents[i].onclick = function(){
        currentSlide =parseInt(this.getAttribute('data-index'));
        theCheaker();

    }

}



theCheaker();
function nextSlide(){
    if( nextButton.classList.contains("disabled")){
        
    }else{
             currentSlide++; 
                theCheaker();
            }

}

function prevSlide(){

if(prevButton.classList.contains("disabled")){

}else{
    currentSlide--;
    theCheaker();
}

}

function theCheaker(){
    removeAllActive();
     
    sliderImages[currentSlide-1].classList.add("active");
    createdBullents[currentSlide-1].classList.add("active");
    if(currentSlide==1) {
        prevButton.classList.add("disabled")

    }else{
        prevButton.classList.remove("disabled") 
    }

    if(currentSlide==5) {
        nextButton.classList.add("disabled")

    }else{
        nextButton.classList.remove("disabled") 
    }
}


function removeAllActive() {

sliderImages.forEach(function (img){
 img.classList.remove('active');
});
   
    createdBullents.forEach(function (li){
    li.classList.remove('active');
    
    
});
}
setInterval( nextSlide ,3000);


