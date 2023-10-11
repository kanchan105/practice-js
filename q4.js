// find the  count of the duplicate of the array
var a=[10,20,12,12,34,23,21,10,2,12,10,11];
let sortedArray=a.slice().sort()
let result=[];
count=0;
for(let i=0;i<a.length-1;i++)
{
  if(sortedArray[i++]===sortedArray[i]){
  result.push(sortedArray[i])
  count=++count
}
  
}
console.log(result)
console.log(count)