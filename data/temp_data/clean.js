import data from './data.json';

const newData = data.map((product) => {
  let price = product.price;
  price = price.replace('"', '');
  price = price.replace('$', '');
  if (price.includes('¢')) {
    return;
  }

  return {
    name: product.name,
    img: product.img,
    qtyType: product.qtyType,
    price: parseFloat(price),
  };
});

console.log(JSON.stringify(newData));
