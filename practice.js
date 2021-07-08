let arr =[1,2,3,4,5]
const fun =(arr)=>{
 let maxi = Math.max(...arr)
 let min = Math.min(...arr)
 return [min,maxi]
}
console.log(fun(arr));