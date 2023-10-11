//find the duplicate element in array

var a=[10,20,12,12,34,23,21,11];
let sortedArray=a.slice().sort()
let result=[];
for(let i=0;i<a.length-1;i++)
{
  if(sortedArray[i++]===sortedArray[i]){
  result.push(sortedArray[i])}
  
}
console.log(result)