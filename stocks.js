// function maxProfit(prices)
// {
//   let globalprofit=0
//   for (let i = 0; i < prices.length-1; i++) {
//     for (let j = i+1; j <prices.length; j++) {
     
// const currentProfit= prices[j]-prices[i]
//     if(currentProfit> globalprofit)
//     globalprofit=currentProfit;

//     }
    
//   } return globalprofit
// }

// console.log(maxProfit([7,1,5,3,6,4]))

const mazProfit = function(prices)
{
min=prices[0]
profit=0;
for (let i = 1; i < prices.length; i++) {
   if(min>prices[i])
  {    min=prices[i]
}  
   profit=Math.max(profit,prices[i]-min)
}
return profit}
console.log(mazProfit([7,1,5,3,6,4]))