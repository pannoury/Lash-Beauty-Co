function systemSettings(){
    loadNavbar();
    loadFooter();

    document.getElementById('nav-hamburger').addEventListener('click', function(){
        hamburgerEventListener()
    })

    function hamburgerEventListener(){
        var hamburger = document.getElementById('nav-hamburger')
        var toggled = hamburger.getAttribute('aria-label');
        var mobileNav = document.getElementById('navbar-list-mobile')
        var navList = document.getElementById('navbar-list-mobile').querySelectorAll('.nav-list');
        if(toggled == "untoggled"){
            hamburger.setAttribute('aria-label', 'toggled')
            hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>`
            mobileNav.setAttribute('aria-label', 'toggled')
            document.body.style.cssText = "overflow: hidden;"
            let i = 0; 
            
            myLoop();
            function myLoop() {          
                console.log(i);                
                if (i < navList.length) {  
                    navList[i].classList.add('fade') 
                    i++;          
                    setTimeout(function() {                    
                        myLoop();               
                    }, 100)    
                }                       
            }
        }
        else{
            setTimeout(() => {
                hamburger.setAttribute('aria-label', 'untoggled')
            }, 400);
            hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>`
            mobileNav.setAttribute('aria-label', 'untoggled')
            document.body.style.cssText = "overflow: inherit;"
            for(let i=0; i<navList.length; i++){
                navList[i].classList.remove('fade');
            }
        }
    }
}

function loadNavbar(){
    var header = document.getElementsByTagName('header')[0];
    header.innerHTML = 
    `
    <nav>
        <a id="nav-hamburger" class="hover" aria-label="untoggled"><svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg></a>
        <a class="navbar-logo hover" href="https://lashbeautyco.se">
            <img src="./Assets/logo_v3_alternative.svg" id="navbar_logo">
        </a>
        <div id="navbar-list-desktop">
            <ul>
                <li class="nav-list"><a class="hover nav-link" data-index="Tidsbokning" href="https://www.bokadirekt.se/places/lash-beauty-%26-co-35083">Tidsbokning</a></li>
                <li class="nav-list"><a class="hover nav-link" href="https://lashbeautyco.se/galleri" data-index="Bildgalleri">Bildgalleri</a></li>
                <li class="nav-list"><a class="hover nav-link" href="https://lashbeautyco.se/services" data-index="Prislista">Prislista</a></li>
                <li class="nav-list"><a class="hover nav-link" href="https://lashbeautyco.se/contact" data-index="Kontakta oss">Kontakta oss</a></li>
                <li class="nav-list"><a class="hover nav-link" href="https://lashbeautyco.se/about" data-index="Om oss">Om oss</a></li>
            </ul>
        </div>
        <div id="navbar-list-mobile" aria-label="untoggled">
            <ul>
            <li class="nav-list"><a class="hover nav-link" data-index="Tidsbokning" href="https://www.bokadirekt.se/places/lash-beauty-%26-co-35083">Tidsbokning</a></li>
            <li class="nav-list"><a class="hover nav-link" href="https://lashbeautyco.se/galleri" data-index="Bildgalleri">Bildgalleri</a></li>
            <li class="nav-list"><a class="hover nav-link" href="https://lashbeautyco.se/services" data-index="Prislista">Prislista</a></li>
            <li class="nav-list"><a class="hover nav-link" href="https://lashbeautyco.se/contact" data-index="Kontakta oss">Kontakta oss</a></li>
            <li class="nav-list"><a class="hover nav-link" href="https://lashbeautyco.se/about" data-index="Om oss">Om oss</a></li>
            </ul>
        </div>
    </nav>
    `
}

function loadFooter(){
    var footer = document.getElementsByTagName('footer')[0];
    footer.innerHTML = 
    `
    <div id="footer">
        <ul>
            <li class="footer-row">
                <a href="https://lashbeautyco.se">
                    <img src="./Assets/logo_v3_alternative.svg" id="navbar_logo">
                </a>
                <div class="footer-row-content">
                    <p class="company-description">
                        Lash & Beauty's vision är att erbjuda kunden en skräddarsydd, personlig och trygg upplevelse.
                        Här involveras du som kund i processen till dina drömfransar och bryn!
                        Produktkännedom, hållbarhet, teknik och kunskap är av största prioritet för oss. 
                    </p>
                    <div class="social-media">
                        <a class="social-media-link" href="https://www.instagram.com/lashbeautyandco/">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 95 95">
                                <path class="st0" d="M47.5,95c-7.8-0.2-15.6-0.4-23.3-0.8C11.8,93.5,1.6,83.8,0.9,71.5C0.3,59.8,0,48,0,36.2
                                c0-5.2,0.4-10.6,1.4-15.7C3.7,9.7,12.7,2.1,23.8,1.1C40-0.3,56.4-0.5,72.6,1.3c12,1.3,21.2,10.5,21.8,23.1
                                c0.7,13.8,0.6,27.7,0.5,41.6c-0.1,4.4-1,9-2.5,13.1C88.7,88.5,81,93.3,71,94.2C63.2,94.8,55.4,94.7,47.5,95z M47.6,8.7
                                C39.9,9,32,9.1,24.1,9.7c-6.8,0.5-12.6,5.1-14,11.8c-1,4.5-1.3,9.2-1.2,13.8c0,12,0.1,24.1,0.7,36.1c0.3,6.6,5.2,12.1,11.7,13.5
                                c4.5,1,9.2,1.3,13.9,1.3c11.6,0.1,23.1,0,34.7-0.5c8.7-0.3,14.5-5.6,15.9-14.1c0.6-3.8,0.8-7.7,0.8-11.5c0-11.5,0-23-0.5-34.5
                                c-0.4-9.1-6.5-15.3-15.6-16C62.9,9,55.4,9,47.6,8.7z"/>
                                <path class="st0" d="M47.7,23.4C61.4,23.4,72,34.1,72,48c0,13.3-10.9,23.9-24.5,23.8c-13.6,0-24.3-10.8-24.2-24.4
                                C23.3,34,34.1,23.4,47.7,23.4z M47.8,31.9c-8.8,0-15.9,6.9-15.9,15.6c0,8.7,7.1,15.8,15.8,15.8c8.8,0,15.8-7.1,15.8-15.7
                                C63.4,39,56.4,32,47.8,31.9z"/>
                                <path class="st0" d="M67.5,22.4c0-3.2,2.3-5.6,5.4-5.6c3.1,0,5.7,2.5,5.7,5.7c0,3.2-2.6,5.7-5.8,5.6
                                C69.7,27.9,67.4,25.6,67.5,22.4z"/>
                            </svg>
                        </a>
                        <a class="social-media-link">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1024 1024">
                            <path d="M1024,512C1024,229.2,794.8,0,512,0S0,229.2,0,512c0,255.6,187.2,467.4,432,505.8V660H302V512h130V399.2   C432,270.9,508.4,200,625.4,200c56,0,114.6,10,114.6,10v126h-64.6c-63.6,0-83.4,39.5-83.4,80v96h142l-22.7,148H592v357.8   C836.8,979.4,1024,767.6,1024,512z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </li>
            <li class="footer-row">
                <div class="container-separator"><h4><span class="footer">Navigation</span></h4></div>
                <div class="footer-row-content">
                    <ul class="footer-navigate-list">
                        <li><a href="https://www.bokadirekt.se/places/lash-beauty-%26-co-35083">Tidsbokning</a></li>
                        <li><a href="https://lashbeautyco.se/galleri">Bildgalleri</a></li>
                        <li><a href="https://lashbeautyco.se/services">Prislista</a></li>
                        <li><a href="https://lashbeautyco.se/contact">Kontakta oss</a></li>
                        <li><a href="https://lashbeautyco.se/about">Om oss</a></li>
                    </ul>
                </div>
            </li>
            <li class="footer-row">
            <div class="container-separator"><h4><span class="footer">Kontakta oss</span></h4></div>
                <div class="footer-row-content">
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                            <a href="https://www.google.com/maps/search/?api=1&query=Tegelv%C3%A4gen%201D,%20194%2039%20Upplands%20V%C3%A4sby">Tegelvägen 1D, 194 39, Upplands Väsby</a>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"/></svg>
                            <a href="tel: +46735030455">+4673-503 04 55</a>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"/></svg>
                            <a href="mailto:lashbeautyandco@gmail.com">lashbeautyandco@gmail.com</a>
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
                            Mån-Fre: 10:00 - 19:00
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
                            Lör-Sön: 10:00 - 16:00
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    <div class="copyright">
        <p>© 2021 - Lash & Beauty</p>
    </div>
    <div class="payment-footer">
        <img src="https://x.klarnacdn.net/payment-method/assets/badges/generic/white/klarna.svg">
        <figure class="swish">
            <img src="https://lashbeautyco.se/Assets/Swish_black.svg">
        </figure>
    </div>
    `
}

export { systemSettings }