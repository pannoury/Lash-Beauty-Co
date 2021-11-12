function systemSettings(){
    loadNavbar();
    loadFooter();

    document.getElementById('nav-hamburger').addEventListener('click', function(){
        hamburgerEventListener()
    })

    function hamburgerEventListener(){
        var hamburger = document.getElementById('nav-hamburger')
        console.log("tja")
        var toggled = hamburger.getAttribute('aria-label');
        var mobileNav = document.getElementById('navbar-list-mobile')
        if(toggled == "untoggled"){
            hamburger.setAttribute('aria-label', 'toggled')
            hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>`
            mobileNav.setAttribute('aria-label', 'toggled')
        }
        else{
            setTimeout(() => {
                hamburger.setAttribute('aria-label', 'untoggled')
            }, 400);
            hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>`
            mobileNav.setAttribute('aria-label', 'untoggled')
        }
    }
}

function loadNavbar(){
    var header = document.getElementsByTagName('header')[0];
    header.innerHTML = 
    `
    <nav>
        <a id="nav-hamburger" class="hover" aria-label="untoggled"><svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg></a>
        <a class="navbar-logo hover" href="https://lashbeautyco.se"><img id="navbar_logo" src="./Assets/logo-alt-1.svg"></a>
        <div id="navbar-list-desktop">
            <ul>
                <li class="nav-list"><a class="hover">Tidsbokning</a></li>
                <li class="nav-list"><a class="hover">Tjänster</a></li>
                <li class="nav-list"><a class="hover">Bildgalleri</a></li>
                <li class="nav-list"><a class="hover" href="https://lashbeautyco.se/services">Prislista</a></li>
                <li class="nav-list"><a class="hover" href="https://lashbeautyco.se/contact">Kontakta oss</a></li>
                <li class="nav-list"><a class="hover" href="https://lashbeautyco.se/about">Om oss</a></li>
            </ul>
        </div>
        <div id="navbar-list-mobile" aria-label="untoggled">
            <ul>
                <li class="nav-list"><a class="hover">Tidsbokning</a></li>
                <li class="nav-list"><a class="hover">Tjänster</a></li>
                <li class="nav-list"><a class="hover">Bildgalleri</a></li>
                <li class="nav-list"><a class="hover" href="https://lashbeautyco.se/services">Prislista</a></li>
                <li class="nav-list"><a class="hover" href="https://lashbeautyco.se/contact">Kontakta oss</a></li>
                <li class="nav-list"><a class="hover" href="https://lashbeautyco.se/about">Om oss</a></li>
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
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 159.6 90">
                    <path class="st0" d="M29.4,63.1c0-0.1,0.1-0.2,0.2-0.2C29.6,63,29.6,63.1,29.4,63.1C29.4,63.1,29.4,63.1,29.4,63.1z"/>
                    <path class="st0" d="M6.7,30.9h12.1c5.1,0,7.7,3.1,7.7,6.8c0,1.8-0.6,4.2-3.7,5.6c1.8,0.7,5,2,5,6.6
                        c0,4.3-3.2,8-9.3,8H6.7V30.9z M10.4,42.4h6.7c3.5,0,5.7-1.1,5.7-4.4c0-2.5-1.6-3.9-5.7-3.9h-6.7V42.4z M10.4,54.8h7.9
                        c3.9,0,5.8-1.9,5.8-4.9c0-3.8-3.4-4.5-6.4-4.5h-7.3V54.8z"/>
                    <path class="st0" d="M52.8,57.9H32.6v-27h20v3.2H36.3v8.3h15v3.2h-15v9h16.5V57.9z"/>
                    <path class="st0" d="M62,50.1l-2.9,7.8h-3.8l10.3-27h4.2l9.9,27h-4L73,50.1H62z M71.6,46.8l-4-11.9h-0.1l-4.4,11.9
                        H71.6z"/>
                    <path class="st0" d="M103.6,30.9v17.5c0,5.5-3.6,10.2-11.5,10.2c-7.7,0-10.9-4.7-10.9-9.7v-18h3.8v17
                        c0,5.9,3.8,7.5,7.2,7.5c3.5,0,7.5-1.5,7.5-7.4v-17H103.6z"/>
                    <path class="st0" d="M106.4,30.9h22.2v3.2h-9.3v23.7h-3.7V34.2h-9.3V30.9z"/>
                    <path class="st0" d="M143.7,57.9H140V47.1l-10.3-16.1h4.3l7.9,13l7.9-13h4.3l-10.3,16.1V57.9z"/>
                    <g>
                        <path class="st0" d="M29.2,87h-4.5l-2.6-3.1c-1.9,2.1-4.1,3.6-8.2,3.6c-7,0-8.3-5-8.3-7.1c0-3.7,1.1-5.7,6.4-8.5
                            c-2-2.4-3-3.6-3-6c0-3.1,2.4-6,6.7-6c4.4,0,6.3,2.9,6.3,5.6c0,3.8-3,5.7-5.1,7.1l5.2,5.9c0.6-1.7,0.8-2.2,1.1-4.2h3.3
                            c-0.2,1.8-0.8,4.3-2.3,6.9L29.2,87z M13.8,74.2c-3,1.8-4.8,3.1-4.8,6c0,3.4,3.5,4.5,5.1,4.5c2.5,0,4.6-1.1,6.1-3L13.8,74.2z
                            M18.6,65.8c0-2.4-1.9-3-3-3c-2.9,0-3.3,2-3.3,2.9c0,1.8,1.7,3.7,2.8,4.7C16.6,69.5,18.6,68.1,18.6,65.8z"/>
                        <path class="st0" d="M52.9,68.1c-1.1-4.7-5.2-5.6-7.9-5.6c-5.1,0-9.3,3.6-9.3,10.7c0,6.3,2.4,11.2,9.4,11.2
                            c2.5,0,6.8-1.1,8.1-7.4h3.7c-1.6,10.2-10.2,10.6-12.4,10.6c-6.4,0-12.7-4-12.7-14.3c0-8.3,5-14,13.2-14c7.3,0,11.1,4.3,11.6,8.8
                            H52.9z"/>
                        <path class="st0" d="M73.8,87.7C63.3,87.7,60,79.3,60,73.5c0-5.8,3.2-14.2,13.8-14.2c10.6,0,13.8,8.4,13.8,14.2
                            C87.6,79.3,84.4,87.7,73.8,87.7z M73.8,62.5c-6.1,0-9.8,4.6-9.8,11c0,6.3,3.7,11,9.8,11c6.1,0,9.8-4.6,9.8-11
                            C83.6,67.1,79.9,62.5,73.8,62.5z"/>
                    </g>
                    <g>
                        <path class="st0" d="M10.6,25.7H25V29H6.8V2h3.8V25.7z"/>
                        <path class="st0" d="M33.1,21.1l-3,7.8h-3.9L36.9,2h4.3l10.2,27h-4.2l-2.8-7.8H33.1z M43.1,17.9L38.9,6h-0.1
                            l-4.5,11.9H43.1z"/>
                        <path class="st0" d="M72,9.9c-0.2-4.2-3.8-5.5-7-5.5c-2.4,0-6.5,0.6-6.5,4.7c0,2.3,1.7,3,3.3,3.4l8.1,1.8
                            c3.7,0.8,6.4,2.9,6.4,7.2c0,6.4-6.2,8.1-11.1,8.1c-5.2,0-7.3-1.5-8.5-2.6c-2.4-2.1-2.9-4.3-2.9-6.8h3.6c0,4.9,4.2,6.3,7.8,6.3
                            c2.8,0,7.4-0.7,7.4-4.5c0-2.8-1.4-3.7-6-4.8L60.8,16c-1.9-0.4-6-1.7-6-6.3c0-4.2,2.9-8.3,9.7-8.3c9.9,0,10.9,5.6,11,8.6H72z"/>
                        <path class="st0" d="M99.8,2h3.8v27h-3.8V16.4H85.1V29h-3.8V2h3.8v11.2h14.8V2z"/>
                    </g>
                    <line id="XMLID_4_" class="st1" x1="2.2" y1="87" x2="2.2" y2="2"/>
                    </svg>
                </a>
                <div class="footer-row-content">
                    <p class="company-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Expedita itaque corporis sint est. Id amet consectetur quod quae repellat dolorem atque, repellendus consequatur necessitatibus sed esse vel ducimus magnam illo?
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
                                <g>
                                    <path fill="#FFFFFF" d="M1024,512C1024,229.2,794.8,0,512,0S0,229.2,0,512c0,255.6,187.2,467.4,432,505.8V660H302V512h130V399.2   C432,270.9,508.4,200,625.4,200c56,0,114.6,10,114.6,10v126h-64.6c-63.6,0-83.4,39.5-83.4,80v96h142l-22.7,148H592v357.8   C836.8,979.4,1024,767.6,1024,512z"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </li>
            <li class="footer-row">
                <h4>Navigation</h4>
                <div class="footer-row-content">
                    <ul class="footer-navigate-list">
                        <li><a>Tidsbokning</a></li>
                        <li><a>Tjänster</a></li>
                        <li><a>Bildgaller</a></li>
                        <li><a href="https://lashbeautyco.se/services">Prislista</a></li>
                        <li><a>Kontakta oss</a></li>
                        <li><a>Om oss</a></li>
                    </ul>
                </div>
            </li>
            <li class="footer-row">
                <h4>Kontakta Oss</h4>
                <div class="footer-row-content">
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                            <a href="https://www.google.com/maps/search/?api=1&query=Tegelv%C3%A4gen%201D,%20194%2039%20Upplands%20V%C3%A4sby">Tegelvägen 1D, 194 39, Upplands Väsby</a>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"/></svg>
                            <a href="tel: +46730251600">073-025 16 00</a>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"/></svg>
                            <a href="mailto:lashbeautyandco@gmail.com">lashbeautyandco@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    <div class="copyright">
        <p>© 2021 - Lash Beauty & Co</p>
    </div>
    `
}

export { systemSettings }