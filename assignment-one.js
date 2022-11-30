//Fibonacci sequence using iteration
function fibonacci(num) {
  let num1 = 0;
  let num2 = 1;
  let array = [0, 1];
  for (let i = 2; i < num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    array.push(sum);
  }
}
fibonacci(8); // [ 0, 1, 1,  2, 3, 5, 8, 13]

//Fibonacci sequence using recursion
const fibsRec = (num, store = [0, 1]) => {
  if (store.length >= num) {
    return store.slice(0, num);
  }
  const newestArrayItem = store.at(-1) + store.at(-2);
  store.push(newestArrayItem);
  console.log(store);
  return fibsRec(num, store);
};
fibsRec(5); // [ 0, 1, 1, 2, 3 ]
