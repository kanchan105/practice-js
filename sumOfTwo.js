// given an array of integers and an integer as target

// const twoSum=function(nums,target)
// {
//  for (let i = 0; i < nums.length; i++) {
//   {
//     for (let j = i+1; j <nums.length; j++)
//        if(nums[i]+nums[j]===target)
//        return [i,j]   
//     }
//   }
  
//  }
 
//  nums=[2,3,5,1,9,4]
//  console.log(twoSum(nums,8))


const twoSum=function(nums,target)
{
  const obj={}
  for (let i = 0; i< nums.length; i++) {
        var n=nums[i]
        if(obj[target-n]>=0)
        {
          return [obj[target-n],i]
        }
        else{
         [obj[n]=i]}
      }
}

nums=[2,3,5,1,9,4]
 console.log(twoSum(nums,8))