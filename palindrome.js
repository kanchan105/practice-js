const palindrome=function(x)
{
   return x===+x.toString().split("").reverse().join("")
}
const result=palindrome(13321)
console.log(result)
