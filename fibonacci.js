// function fibonacci(number){

//   const arr=[0,1]
//   for (let i = 2; i<= number; i++) {
//             arr.push(arr[i-1]+arr[i-2])
//       }
//       return arr

// }
// console.log(fibonacci(30))


// with recurrsion
const fibonacci= function(n)
{
  if (n<=1) return n;
  
  return fibonacci(n-1)+fibonacci(n-2)
}
console.log(fibonacci(20))