const SLIDER_RIGHT_ARROW = document.querySelector('#slide-right-arrow')
const SLIDER_LEFT_ARROW = document.querySelector('#slide-left-arrow')
const MAIN_TABLE_SLIDER = document.querySelector('#main--table-slider')
const PLANS_RIGHT_ARROW = document.querySelector('#plans--right-arrow')
const PLANS_LEFT_ARROW = document.querySelector('#plans--left-arrow')
const SLIDER_TABLE_COINS = document.querySelector('.main--table.coins')
const SLIDER_TABLE_COMMISSIONS = document.querySelector('.main--table.commissions')
const CARDS_SLIDER = document.querySelector('.cards--slider')

SLIDER_RIGHT_ARROW.addEventListener('click', (event) => {
  if (!MAIN_TABLE_SLIDER.lastElementChild.classList.contains('active')) {
    SLIDER_TABLE_COINS.classList.toggle('active')
    SLIDER_TABLE_COMMISSIONS.classList.toggle('active')

    SLIDER_RIGHT_ARROW.style.opacity = '0'
    SLIDER_LEFT_ARROW.style.opacity = '100'
  }
})

SLIDER_LEFT_ARROW.addEventListener('click', (event) => {
  const CURRENT_TABLE_CONTAINER = event.target.parentElement

  if (!MAIN_TABLE_SLIDER.firstElementChild.classList.contains('active')) {
    SLIDER_TABLE_COINS.classList.toggle('active')
    SLIDER_TABLE_COMMISSIONS.classList.toggle('active')

    SLIDER_RIGHT_ARROW.removeAttribute('style')
    SLIDER_LEFT_ARROW.style.opacity = '0'
  }
})

PLANS_RIGHT_ARROW.addEventListener('click', () => {
  for (const CARD_SLIDE of CARDS_SLIDER.children) {
    if (CARD_SLIDE.classList.contains('active')) {
      if (!CARDS_SLIDER.lastElementChild.classList.contains('active')) {
        CARD_SLIDE.classList.remove('active')
        CARD_SLIDE.nextElementSibling.classList.add('active')
        PLANS_LEFT_ARROW.style.opacity = '100'
      }

      if (CARDS_SLIDER.lastElementChild.classList.contains('active')) {
        PLANS_RIGHT_ARROW.style.opacity = '0'
      }
      return CARD_SLIDE
    }
  }
})


PLANS_LEFT_ARROW.addEventListener('click', () => {
  for (const CARD_SLIDE of CARDS_SLIDER.children) {
    if (CARD_SLIDE.classList.contains('active')) {
      if (!CARDS_SLIDER.firstElementChild.classList.contains('active')) {
        CARD_SLIDE.classList.remove('active')
        CARD_SLIDE.previousElementSibling.classList.add('active')
        PLANS_RIGHT_ARROW.removeAttribute('style')
      }

      if (CARDS_SLIDER.firstElementChild.classList.contains('active')) {
        PLANS_LEFT_ARROW.style.opacity = '0'
      }
      return CARD_SLIDE
    }
  }
})


