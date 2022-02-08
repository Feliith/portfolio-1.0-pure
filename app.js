
const instagramTab = () => {
    const felipeImage = document.querySelector('.felipe-image')

    felipeImage.addEventListener('click', () => {
        window.open('https://www.instagram.com/feliith/', '_blank')
    })
}
instagramTab()

const navLinksActive = () => {
    const navBurger = document.querySelector('.nav-burger')
    const burgerLines = document.querySelectorAll('.burger-lines')
    const navLinks = document.querySelector('.nav-links')
    const navLink = document.querySelectorAll('.nav-link')

    navBurger.onclick = () => {
        navLinks.classList.toggle('active')

        if (navLinks.classList.contains('active')) {
            for (let c = 0 ; c < navLink.length ; c ++) {
                navLink[c].style.animation = `navFadeIn .5s forwards ${(c + 1) / 7}s`
            }
        } else {
            for (let c = 0 ; c < navLink.length ; c ++) {
                navLink[c].style.animation = ''
            }
        }

        burgerLines[0].classList.toggle('line-01')
        burgerLines[1].classList.toggle('line-02')
        burgerLines[2].classList.toggle('line-03')
    }
}
navLinksActive()