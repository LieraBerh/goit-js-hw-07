// ============================================

const ulElem = document.querySelector('#categories');

console.log(`Number of categories: ${ulElem.children.length}`);

// ============================================

const headerElem1 = ulElem.children[0].querySelector('h2');

console.log(`Category: ${headerElem1.textContent}`);

const category1ListElem = ulElem.children[0].querySelector('ul');

console.log(`Elements: ${category1ListElem.children.length}`);

// ============================================

const headerElem2 = ulElem.children[1].querySelector('h2');

console.log(`Category: ${headerElem2.textContent}`);

const category2ListElem = ulElem.children[1].querySelector('ul');

console.log(`Elements: ${category2ListElem.children.length}`);

// ============================================

const headerElem3 = ulElem.children[2].querySelector('h2');

console.log(`Category: ${headerElem3.textContent}`);

const category3ListElem = ulElem.children[2].querySelector('ul');

console.log(`Elements: ${category3ListElem.children.length}`);

// ============================================
