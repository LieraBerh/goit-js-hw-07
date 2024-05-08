// ============================================

const ulElem = document.querySelector('#categories');

const ulItems = ulElem.querySelectorAll('li.item');

console.log(`Number of categories: ${ulItems.length}`);

// ============================================

ulItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const numberCategoryItems = item.querySelectorAll('li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numberCategoryItems}`);
});
