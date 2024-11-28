/* =================== SHOW MWNU ======================= */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* =================== SHOW MWNU ======================= */
/* validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


/* =================== MWNU HIDDEN ======================= */
/* validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* =================== REMOVE MENU MOBILE ======================= */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* =================== CHANGE BACKGROUND HEADER ======================= */
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/* =================== SCROLL SECTION ACTIVE LINK ======================= */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* =================== SHOW SCROLL UP ======================= */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* =================== SCROLL REVEAL ANIMATION ======================= */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 400,
    reset: true
})

sr.reveal('.home__data, .footer__content, .footer__logo, .footer__description')
sr.reveal('.home__tree-1', {origin: 'left', delay: 800})
sr.reveal('.home__tree-2', {origin: 'right', delay: 800})
sr.reveal('.home__img', {delay: 800})
sr.reveal('.category__card, .items__card', {interval: 100})
sr.reveal('.about__img, .about__data, .footer__tree-2', {origin: 'left'})
sr.reveal('.party__images, .party__data, .footer__tree-1', {origin: 'right'})