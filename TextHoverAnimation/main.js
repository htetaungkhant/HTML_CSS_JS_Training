const phrase1 = 'Slider Rock Onion.'
const phrase2 = 'Thousands of variations.'
const phrase3 = 'Infinite possibilities.'

const targetEl1 = document.getElementById('bubble-hover1')
const targetEl2 = document.getElementById('bubble-hover2')
const targetEl3 = document.getElementById('bubble-hover3')

setAnimatedText(phrase1, targetEl1)
setAnimatedText(phrase2, targetEl2)
setAnimatedText(phrase3, targetEl3)

function setAnimatedText(phrase, targetEl) {
  phrase.split('').map((char, idx) => {
    const el = document.createElement('span')

    el.innerText = char
    el.setAttribute('data-index', idx.toString())
    el.classList.add('hover-char')

    targetEl.appendChild(el)
  })

  const hoverChars = [...targetEl.getElementsByClassName('hover-char')]

  const removeClasses = () => {
    hoverChars.map((char) => {
      char.classList.remove('hovered')
      char.classList.remove('hovered-adjacent')
    })
  }

  hoverChars.map((char) => {
    char.addEventListener('mouseover', (e) => {
      removeClasses()

      const currentElement = e.target
      const index = parseInt(currentElement.getAttribute('data-index'), 10)

      const prevIndex = index === 0 ? null : index - 1
      const nextIndex = index === phrase.length - 1 ? null : index + 1

      const prevEl =
        prevIndex !== null &&
        targetEl.querySelector(`[data-index="${prevIndex}"]`)

      const nextEl =
        prevIndex !== null &&
        targetEl.querySelector(`[data-index="${nextIndex}"]`)

      e.target.classList.add('hovered')
      prevEl && prevEl.classList.add('hovered-adjacent')
      nextEl && nextEl.classList.add('hovered-adjacent')
    })
  })

  targetEl.addEventListener('mouseleave', () => {
    removeClasses()
  })
}
