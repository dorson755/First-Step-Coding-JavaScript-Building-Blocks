var cats = ['Sylvester', 'Tigger', 'Mr. Bigglesworth', 'Felix', 'Simba'];

// @ts-ignore
function forOneCat(cat){
  console.log(cat.toLowerCase() + '...');
}
cats.forEach(forOneCat);