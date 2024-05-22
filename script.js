const nextbtn=document.getElementById("nextbtn");
const backbtn=document.getElementById("backbtn");
const gallary=document.querySelector(".gallary");


gallary.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    gallary.scrollLeft += evt.deltaY;
})


backbtn.addEventListener("click",()=>{
    gallary.scrollLeft -=600;
    gallary.style.scrollBehavior="smooth";
})

nextbtn.addEventListener("click",()=>{
    gallary.scrollLeft +=600;
    gallary.style.scrollBehavior="smooth";
})