// sort a number araay# insertion sort

a=[22,23,11,34,22,1,33,23]
let temp

for(let i=0;i<a.length-1;i++)
{
 for (let j=i+1;j<a.length;j++)
 {
  if(a[i]>a[j])
  {
    const temp = a[i];
a[i] = a[j];
a[j] = temp;
  }
 } 

}

console.log(a)