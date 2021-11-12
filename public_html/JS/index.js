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
    resizeImage(window.innerWidth);
    automaticSlider();

    function slider(event){
        if(event === undefined){
            var sliderButtons = document.querySelectorAll('.slider-buttons');
            var slideTrackerBtn = document.querySelectorAll('.slide-tracker-btn')
            for(let i=0; i<sliderButtons.length; i++){
                sliderButtons[i].addEventListener('click', function(){
                    slider(sliderButtons[i]);
                })
            }
            for(let i=0; i<slideTrackerBtn.length; i++){
                slideTrackerBtn[i].addEventListener('click', function(){
                    slideButtonClick(slideTrackerBtn[i]);
                })
            }
            window.addEventListener('resize', function(){
                resizeImage(window.innerWidth);
            })
        }
        else{
            var button = event.getAttribute('aria-label')
            var carouselPosition = document.getElementsByClassName('slider-wrapper')[0].getAttribute('aria-label');
            var sliderWrapper = document.querySelectorAll('.slider-wrapper')[0];
            var slideTrackerBtn = document.querySelectorAll('.slide-tracker-btn')
            if(button === "right"){
                if(carouselPosition === "1"){
                    sliderWrapper.setAttribute('aria-label', '2')
                    slideButton(2);
                }
                else if(carouselPosition === "2"){
                    sliderWrapper.setAttribute('aria-label', '3')
                    slideButton(3);
                }
                else{
                    sliderWrapper.setAttribute('aria-label', '1')
                    slideButton(1);
                }
            }
            else{
                if(carouselPosition === "1"){
                    sliderWrapper.setAttribute('aria-label', '3')
                    slideButton(3);
                }
                else if(carouselPosition === "3"){
                    sliderWrapper.setAttribute('aria-label', '2')
                    slideButton(2);
                }
                else{
                    sliderWrapper.setAttribute('aria-label', '1')
                    slideButton(1);
                }
            }
        }
    }

    function slideButtonClick(event){
        var btn = event.getAttribute('aria-label');
        slideButton(parseInt(btn))
        document.querySelectorAll('.slider-wrapper')[0].setAttribute('aria-label', `${btn}`)
    }

    function slideButton(value){
        var slideTrackerBtn = document.querySelectorAll('.slide-tracker-btn')
        for(let i=0; i<slideTrackerBtn.length; i++){
            slideTrackerBtn[i].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`
        }
        slideTrackerBtn[value - 1].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z"/></g></g></svg>`
    }
    function resizeImage(size){
        if(size > 1000){
            var slider = document.getElementById('slider');
            var sliderWidth = slider.getBoundingClientRect().width
            var images = document.querySelectorAll('.slide-page');
            for(let i=0; i<images.length; i++){
                images[i].children[0].style.width = `${sliderWidth}px`
                images[i].children[0].style.height = `${sliderWidth}px`
            }
        }
    }

    function automaticSlider(value){
        if(value === 1){
            var carouselPosition = document.getElementsByClassName('slider-wrapper')[0].getAttribute('aria-label');
            var slideTrackerBtn = document.querySelectorAll('.slide-tracker-btn')
            if(carouselPosition === "3"){
                document.getElementsByClassName('slider-wrapper')[0].setAttribute('aria-label', `1`)
                for(let i=0; i<slideTrackerBtn.length; i++){
                    slideTrackerBtn[i].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`
                }
                slideTrackerBtn[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z"/></g></g></svg>`
            }
            else{
                document.getElementsByClassName('slider-wrapper')[0].setAttribute('aria-label', `${parseInt(carouselPosition) + 1}`)
                for(let i=0; i<slideTrackerBtn.length; i++){
                    slideTrackerBtn[i].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`
                }
                slideTrackerBtn[parseInt(carouselPosition)].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z"/></g></g></svg>`
            }
        }
        else{
            setInterval(function(){
                automaticSlider(1)
            }, 15000);
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