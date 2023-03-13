/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// Glopal Variables
let nav_List=document.getElementById("navbar__list");
let sec=Array.from (document.querySelectorAll("section"));


// Build the navigation menu
function menuLinks(){
    nav_List.innerHTML="";
    for(s of sec){
        secName=s.getAttribute("data-nav")
        lstItem=document.createElement("li");
        lstItem.innerHTML=`<a href="#${s.id}" data-nav="${s.id}" class="menu__link">${secName}<\a>`;
        nav_List.appendChild(lstItem);
        
        

    }
    
}

menuLinks();

// When clicking an item from the navigation menu, the link should scroll to the appropriate section.

const goToSection = nav_List.addEventListener("click",(event) => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    const section = document.querySelector(target);
    section.scrollIntoView({ behavior: "smooth" });
});



/**
 * active section onscroll with getBoundingClientRect
 * Add class 'active' to section when near top of viewport
*/
document.addEventListener("scroll",function () {
    document.querySelectorAll("section").forEach (function (act){
        if (act.getBoundingClientRect().bottom >= 150 && act.getBoundingClientRect().top <= 150) {
            act.classList.add("your-active-class");
        }
        else {
            act.classList.remove("your-active-class"); 
        }
    });

}
 );




// clicking on button2(Go Up) to go to the top   
let toTop=document.getElementById("bttn2");
window.onscroll=function () {
    
    if( window.scrollY > 250 ){
    toTop.style.display = "block";

}
    else {
    toTop.style.display = "none";
}

}

toTop.addEventListener("click",() => {
    window.scrollTo({top:0,left:0,behavior:"smooth"});
});




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

