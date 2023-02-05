const hamburger=document.querySelector(".hamburger")
const navMenu=document.querySelector(".nav-menu")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=>
    n.addEventListener("click",()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))


const phone=document.querySelector('#contact-phone');
phone.addEventListener("click",()=>{
    console.log("Funkcja w budowie")
})

const hiddenElements=document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})

hiddenElements.forEach(el=>observer.observe(el));