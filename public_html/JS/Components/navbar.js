function navbar(){
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
            hamburger.setAttribute('aria-label', 'untoggled')
            hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>`
            mobileNav.setAttribute('aria-label', 'untoggled') 
        }
    }
}

export { navbar }