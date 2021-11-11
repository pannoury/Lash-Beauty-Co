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
            setTimeout(() => {
                document.getElementById('navbar_logo').setAttribute('src', './Assets/Lash Beauty & Co white.svg')
            }, 300);
        }
        else{
            setTimeout(() => {
                hamburger.setAttribute('aria-label', 'untoggled')
            }, 400);
            hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>`
            mobileNav.setAttribute('aria-label', 'untoggled')
            document.getElementById('navbar_logo').setAttribute('src', './Assets/Lash Beauty & Co.svg')
        }
    }
}

function loadNavbar(){
    var header = document.getElementsByTagName('header')[0];
    header.innerHTML = 
    `
    <nav>
        <a class="navbar-logo hover" href="https://lashbeautyco.se"><img id="navbar_logo" src="./Assets/Lash Beauty & Co.svg" width="120px" height="100px"></a>
        <a id="nav-hamburger" class="hover" aria-label="untoggled"><svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg></a>
        <div id="navbar-list-desktop">
            <ul>
                <li class="nav-list"><a class="hover">Tidsbokning</a></li>
                <li class="nav-list"><a class="hover">Tjänster</a></li>
                <li class="nav-list"><a class="hover">Bildgalleri</a></li>
                <li class="nav-list"><a class="hover" href="https://lashbeautyco.se/services">Prislista</a></li>
                <li class="nav-list"><a class="hover">Kontakta oss</a></li>
                <li class="nav-list"><a class="hover">Om oss</a></li>
            </ul>
        </div>
        <div id="navbar-list-mobile" aria-label="untoggled">
            <ul>
                <li class="nav-list"><a class="hover">Tidsbokning</a></li>
                <li class="nav-list"><a class="hover">Tjänster</a></li>
                <li class="nav-list"><a class="hover">Bildgalleri</a></li>
                <li class="nav-list"><a class="hover" href="https://lashbeautyco.se/services">Prislista</a></li>
                <li class="nav-list"><a class="hover">Kontakta oss</a></li>
                <li class="nav-list"><a class="hover">Om oss</a></li>
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
        <div class="footer-row"><a class="navbar-logo hover" href="https://lashbeautyco.se/"><img src="./Assets/Lash Beauty & Co white.svg" width="120px" height="100px"></a></div>
        <div class="footer-row">
            <h4>Kontakta Oss</h4>
        </div>
        <div class="footer-row">
            <div>
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
        </div>
        <div class="social-media">
            <h4>Sociala Medier</h4>
            <a class="social-media-link" href="https://www.instagram.com/lashbeautyandco/">
            <svg version="1.1"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                 x="0px" y="0px" width="81.5px" height="81px" viewBox="0 0 81.5 81" style="enable-background:new 0 0 81.5 81;"
                 xml:space="preserve">
            <style type="text/css">
                .st0{fill:#FFFFFF;}
            </style>
            <defs>
            </defs>
            <g id="XMLID_21_">
                <path id="XMLID_26_" class="st0" d="M50,30.5c-2.6-1.9-5.5-2.8-8.7-3c-0.8,0-1.6,0.1-2.4,0.1c-0.5,0.1-1.1,0.2-1.6,0.3
                    c-0.5,0.1-0.9,0.2-1.4,0.4c-2.2,0.8-4.2,1.9-5.8,3.6c-0.9,0.9-1.7,1.8-2.3,2.9c-1.1,1.7-1.8,3.6-2.1,5.6c-0.3,1.8-0.3,3.7,0.1,5.5
                    c0.4,2.1,1.3,4.1,2.5,5.9c1.5,2.1,3.4,3.8,5.8,4.9c2.7,1.3,5.5,1.8,8.4,1.5c2.5-0.3,4.7-1.1,6.8-2.4c0.9-0.6,1.7-1.3,2.5-2
                    c0.7-0.7,1.3-1.5,1.8-2.3c0.9-1.3,1.5-2.6,1.9-4.1c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2c0.1-0.1,0.1-0.2,0.1-0.4c0,0,0-0.1,0-0.1
                    c0.1-0.1,0.1-0.2,0.1-0.3c0.1-0.6,0.2-1.2,0.3-1.8c0.2-2,0.1-4-0.5-5.9C54.7,35.3,52.8,32.5,50,30.5z"/>
                <path id="XMLID_22_" class="st0" d="M80.8,19c-0.5-2.8-1.4-5.4-2.9-8c-3.4-5.6-9.2-9.9-15.8-10.8C61.2,0.1,60.3,0,59.5,0
                    C46.9,0,34.4,0,21.9,0C15.3,0,9.1,3.5,5.1,8.6c-4.8,6.1-4.9,12.8-4.9,20.2c0,5.4,0,10.8,0,16.2c0,4.3-0.3,8.6-0.1,12.9
                    c0.4,6.4,3,12.7,7.6,17.1c5.7,5.4,12.6,6.3,20.1,6.1c0.4,0,0.9,0,1.3,0c9.8-0.1,19.5,0,29.3,0c1.3,0,2.7-0.1,4-0.4
                    c6.4-1.1,12.5-5.2,15.6-10.9c3.5-6.5,3.2-13.2,3.3-20.3c0-5.2,0.1-10.4,0.1-15.6C81.4,28.8,81.7,23.8,80.8,19z M61.7,47.1
                    c-0.3,1.5-0.8,3-1.4,4.4c-0.7,1.5-1.6,3-2.6,4.4c-1.1,1.4-2.3,2.6-3.8,3.7c-2,1.5-4.1,2.7-6.5,3.4c-1.5,0.5-3,0.8-4.6,0.9
                    c-1.9,0.2-3.8,0.1-5.7-0.3c-2.5-0.5-4.8-1.3-6.9-2.6c-1.5-0.9-2.8-1.9-4-3.1c-1.2-1.2-2.3-2.6-3.2-4.1c-1.2-2-2.1-4.2-2.6-6.6
                    c-0.4-1.8-0.5-3.6-0.4-5.5c0.2-3,0.9-5.8,2.3-8.5c0.9-1.7,2-3.3,3.3-4.7c1.5-1.7,3.3-3,5.3-4.2c1.4-0.8,2.9-1.4,4.5-1.9
                    c0.1,0,0.2-0.1,0.3-0.1c1.1-0.3,2.2-0.5,3.3-0.6c0.3,0,0.5,0,0.8,0c0.8,0,1.7,0,2.5,0c2,0,4,0.5,5.9,1.1c2.3,0.8,4.4,2,6.3,3.5
                    c2.2,1.8,4,3.9,5.3,6.4c1.3,2.4,2.1,5,2.4,7.7C62.2,42.6,62.1,44.9,61.7,47.1z M62.9,22.1c-1.9,0-3.9-1.6-3.7-3.8
                    c-0.1-2.1,1.7-3.7,3.5-3.8c2.4-0.1,4,1.8,4.1,3.7C66.8,20.2,65.3,22.1,62.9,22.1z"/>
            </g>
            </svg>
            @lashbeautyandco
            </a>
        </div>
        <p>© 2021 - Lash Beauty & Co</p>
    </div>
    `
}

export { systemSettings }