// navbar

let menuicon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuicon.onclick =() => {
    menuicon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};



// sticky navbar

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
  
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');

            });    
        };
    });
let  header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100 );
};

// Dark Mode

var darkmode = document.querySelector("#darkmode");
var darkbody = document.querySelector("body");
var header = document.querySelector(".header");
var projectbox = document.querySelector(".project-box");
var contact = document.querySelectorAll("input");
var textarea = document.querySelector("textarea");


var darkfunction = 0;
darkmode.addEventListener("click" , function (){

    if(darkfunction == 0){
    darkbody.style.backgroundColor = "black";
    darkbody.style.color ="grey";
   
    header.style.backgroundColor = "black";
    header.style.color = "#fff";
    darkmode.style.color = "#fff";
    textarea.style.backgroundColor = "black";
    for( let i=0; i < contact.length; i++){
             contact[i].style.backgroundColor = "black";
            };
    //  for(let i= 0; i<projectbox.length; i++){
    //      projectbox[i].style.backgroundColor="black";
    //  };

    darkfunction = 1;
            
    }
    else {
        darkbody.style.backgroundColor = "#fff";
        darkbody.style.color ="";
        projectbox.style.backgroundColor = "#fff";
         header.style.backgroundColor = "";
         header.style.color = "black";
         darkmode.style.color = "black";
         textarea.style.backgroundColor = "#fff";
         
        for( let i=0; i < contact.length; i++){
                contact[i].style.backgroundColor = "#fff";
                     };
        // for( let i=0; i<projectbox.length; i++){
        //      projectbox[i].style.backgroundColor= "#fff";
        //  };
        
         darkfunction = 0;
    }

});
