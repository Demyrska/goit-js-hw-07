const categories = document.querySelectorAll('ul#categories > li.item');

console.log(`Total categories: ${categories.length}`);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul > li');

  console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${categoryItems.length}`);
});
