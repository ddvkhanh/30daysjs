const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  //1.
  //products.forEach(p => console.log(p.price));

  //2.
  products.forEach((item) => {
    //let price = typeof item.price === 'string' ? item.price.trim() : item.price;
    let priceText = (typeof item.price === 'number') ?  `${item.price} euros` : 'unknown';
    console.log(`The price for each ${item.product} is ${priceText}.`);
  });

  //3.
  let sum = 0;
  products.forEach((item) => {
      if (typeof item.price ==='number') {
        sum += item.price; 
      }
  })
  console.log('Sum by forEach: ', sum);

  //4. 
  const newArray = products.map(item => item.price);
  console.log(newArray);

  //5.
  const filterdPrice = products.filter(item => item.price > 5);
  console.log(filterdPrice);

  //6.
  const sumItemPriceMoreThan5 = products.map(item => item.price).filter(p => p > 5).reduce((acc, cur) => acc + cur)
  console.log('Sum: ', sumItemPriceMoreThan5);

  //7.
  const sumUsingReduce = products.reduce((acc, cur) => (typeof cur === 'number'? acc + cur.price : sum), 0);
  console.log('Sum using Reduce: ', sumUsingReduce);

  //8. 
  const findNoPrice = products.find(p => !(typeof p.price === 'number'));
  console.log(findNoPrice);

  //9. 
  const findNoPriceIndex = products.findIndex(p => !(typeof p.price === 'number'));
  console.log(findNoPriceIndex);

  //10.
  const checkIfSomeHasPrice = products.some(p => typeof p.price === 'number');
  console.log(checkIfSomeHasPrice);

  //11.
  const checkIfAllHasPrice = products.every(p => typeof p.price === 'number');
  console.log(checkIfAllHasPrice);
