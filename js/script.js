let navbarState = false

const navbarToggleBtn = document.querySelector('#navbarToggleBtn')
const mobileNav = document.querySelector('#navbarToggle')
const mask = document.querySelector('#mask')

navbarToggleBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden')
  mask.classList.toggle('hidden')

  navbarToggleBtn.src = navbarState
    ? 'assets/images/icon-menu.svg'
    : 'assets/images/icon-menu-close.svg'

  navbarState = !navbarState
  console.log('clicks')
})
