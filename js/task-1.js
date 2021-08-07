const categories = document.querySelectorAll('.item')
console.log(`В списке ${categories.length} категории.`)

const category = document.querySelectorAll('.item')
category.forEach((item) =>
  console.log(`Категория: ${item.querySelector('h2').textContent}
  Количество элементов: ${item.querySelectorAll('li').length}`),
)
