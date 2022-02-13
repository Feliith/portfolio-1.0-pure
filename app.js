
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

const Slider = (btnL, btnR, sBox, qntSlide) => {
    let pos = 0
    btnL.onclick = () => {
        if (pos < 1) {
            pos = qntSlide - 1
        } else {
            pos--
        }
        sBox.style.marginLeft = `${-660 * pos}px`
    }
    btnR.onclick = () => {
        if (pos == qntSlide - 1) {
            pos = 0
        } else {
            pos++
        }
        sBox.style.marginLeft = `${-660 * pos}px`
    }
}

const Sliders = () => {
    const leftButton = document.querySelectorAll('.slider-button.left')
    const rightButton = document.querySelectorAll('.slider-button.right')
    const sliderBox = document.querySelectorAll('.slider-box')
    Slider(leftButton[0], rightButton[0], sliderBox[0], 1)
}
Sliders()

const projectsLinksOn = () => {
    const projectsLinksButton = document.querySelector('.nav-link.projects > button')
    const projectLinksSpan = document.querySelector('.nav-link.projects span')
    const projectsLinks = document.querySelector('.projects-links')
    const projectsLink = document.querySelectorAll('.projects-link')

    projectsLinksButton.onclick = () => {
        projectsLinksButton.classList.toggle('on')
        projectsLinks.classList.toggle('on')
        for (let i = 0 ; i < projectsLink.length ; i++) {
            projectsLink[i].classList.toggle('on')
        }
        projectLinksSpan.classList.toggle('on')
    }
}
projectsLinksOn()