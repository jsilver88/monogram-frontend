const countDownDate = new Date('March 1, 2022 1:00:00').getTime()
const daysEl = document.getElementById('day')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const updateCountDown = setInterval(() => {
  const now = new Date().getTime()
  const distance = countDownDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  daysEl.textContent = days
  hoursEl.textContent = hours
  minutesEl.textContent = minutes
  secondsEl.textContent = seconds
}, 1000)

const submitBtn = document.querySelector('input[type="submit"]')
const input = document.querySelector('input[type="email"]')

if (input === '') {
  submitBtn.disabled = true
} else {
  submitBtn.disabled = false
}

// Toggle nav links
const hamburgerBtn = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-list')

hamburgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})
