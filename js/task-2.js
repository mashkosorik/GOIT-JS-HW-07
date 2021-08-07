const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]
const ul = document.querySelector('#ingredients')

const li = ingredients.map((el) => {
  const LiItem = document.createElement('li')
  LiItem.textContent = el
  return LiItem
})

ul.append(...li)
