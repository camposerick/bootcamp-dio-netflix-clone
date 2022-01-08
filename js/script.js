const hamburger = document.getElementById('hamburger')

function toggleMenu() {
  const nav = document.querySelector('nav')
  const header = document.querySelector('header')
  const hamburgerOpen = document.querySelector('.hamburger-open')
  const hamburgerClose = document.querySelector('.hamburger-close')

  nav.classList.toggle('active')
  header.classList.toggle('bg-white')
  hamburgerOpen.classList.toggle('disable')
  hamburgerClose.classList.toggle('disable')
}

hamburger.addEventListener('click', toggleMenu)

// owl carousel
$('.owl-carousel').owlCarousel({
  stagePadding: 80,
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1,
      stagePadding: 100
    },
    450: {
      items: 2,
      stagePadding: 40
    },
    500: {
      items: 2
    },
    550: {
      items: 2,
      stagePadding: 100
    },
    650: {
      items: 3,
      stagePadding: 40
    },
    750: {
      items: 3
    },
    1050: {
      items: 4
    },
    1300: {
      items: 5
    },
    1550: {
      items: 6
    }
  }
})
