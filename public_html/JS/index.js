import * as navbar from './Components/navbar.js';

window.onload = () =>{
    navbar.systemSettings();
    loadPageSettings();
}

function loadPageSettings(){
    var path = window.location.pathname;
    console.log(path)
    if(path === "" || path === "/public_html/index.html" || path === "/"){
        indexFunctions();
    }
    else if(path === "/services" || path === "/public_html/services.html"){
        servicesFunctions();
    }
    else{
        console.log("error")
    }
}
//////////////////////////////////////////////////////////
//Index                                                //
////////////////////////////////////////////////////////

function indexFunctions(){
    slider()

    function slider(event){
        if(event === undefined){
            var sliderButtons = document.querySelectorAll('.slider-buttons');
            for(let i=0; i<sliderButtons.length; i++){
                sliderButtons[i].addEventListener('click', function(){
                    slider(sliderButtons[i]);
                })
            }
        }
        else{
            var button = event.getAttribute('aria-label')
            var carouselPosition = document.getElementsByClassName('slider-wrapper')[0].getAttribute('aria-label');
            var sliderWrapper = document.querySelectorAll('.slider-wrapper')[0];
            var slideTrackerBtn = document.querySelectorAll('.slide-tracker-btn')
            if(button === "right"){
                if(carouselPosition === "1"){
                    sliderWrapper.setAttribute('aria-label', '2')
                    slideTrackerBtn[1].innerHTML = ``
                }
                else if(carouselPosition === "2"){
                    sliderWrapper.setAttribute('aria-label', '3')
                }
                else{
                    sliderWrapper.setAttribute('aria-label', '1')
                }
            }
            else{
                if(carouselPosition === "1"){
                    sliderWrapper.setAttribute('aria-label', '3')
                }
                else if(carouselPosition === "3"){
                    sliderWrapper.setAttribute('aria-label', '2')
                }
                else{
                    sliderWrapper.setAttribute('aria-label', '1')
                }
            }

            function slideButton(){
                
            }
        }
    }
}

//////////////////////////////////////////////////////////
//SERVICES                                             //
////////////////////////////////////////////////////////
function servicesFunctions(){
    var categories = document.querySelectorAll('.category_header');
    for(let i = 0; i<categories.length; i++){
        categories[i].addEventListener('click', function(){
            serviceCategories(categories[i]);
        })
    }

    function serviceCategories(event){
        var attribute = event.parentElement.getAttribute('aria-label');
        if(attribute === "extended"){
            event.parentElement.setAttribute('aria-label', 'collapsed');
        }
        else{
            event.parentElement.setAttribute('aria-label', 'extended');
        }
    }
}