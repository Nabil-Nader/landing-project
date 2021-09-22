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
 * Define Global Variables
 * 
*/

/**
 * We name this Global Variavles according to its name in index.html
 * so, user will know each variavle related to what.
 * In real world app number of section [in navbarMenu] won't change dynamically,
 * that's why I did the numberOfSections const [unless I want to add section dynamic we need to make it let not const]
 * 
 * 
*/

const navbarMenu = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const numberOfSections = sections.length;

 

 
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * Function to add Navgation bar menu
 * 
*/


function addSectionToMenu(){
    console.log(sections);
    for(container of sections){
        console.log(container);
        // get elementName [e short for element]
        eName = container.getAttribute('data-nav');

        // get elementId [e short for element]
        eId= container.getAttribute('id');

        //create element[li] for each one 
        ordedList = document.createElement('li')
        ordedList.innerHTML =  `<a class='menu_link' href='#${eId}'> ${eName} </a>`;
        console.log(ordedList);
        navbarMenu.appendChild(ordedList);
    }
}

/**
 * Function to view which section we are in it
 * 
*/
function viewSection(section){
    whichSection = section.getBoundingClientRect();
    return whichSection.top>=0;
}


/**
 * Function to highligh the active section
 * 
*/

function highlighSection(){
    for(section of sections){
        
        // we check if we in the active section by using function viewSection 
        // if so, we highligt section from active-class which found in css file
        if(viewSection(section)){

            section.classList.add('your-active-class');
        
        // if we are not in the active section we remove it
        }else{
            section.classList.remove('your-active-class');
        }

    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
 

// build the nav
addSectionToMenu();


// Add class 'active' to section when near top of viewport



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener('scroll',highlighSection)

// Build menu 

// Scroll to section on link click

 

// Set sections as active


