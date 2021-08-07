const refs = {
  btnDecr: document.querySelector('[data-action="decrement"]'),
  span: document.querySelector('#value'),
  btnInc: document.querySelector('[data-action="increment"]'),
}
let conterValue = Number(refs.span.textContent)
refs.btnDecr.addEventListener('click', () => {
  conterValue--
  refs.span.textContent = conterValue
})
refs.btnInc.addEventListener('click', () => {
  conterValue++
  refs.span.textContent = conterValue
})
