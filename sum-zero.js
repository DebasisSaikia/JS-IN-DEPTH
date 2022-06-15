//Sum Zero Problem  [-5,-4,-3,-2,0,2,,4,6,8] --> input

const arr=[-5,-4,-3,-2,0,2,4,6,8]

function sumZero(n){
    
    //Quadratic o(n~2)
    // for(let nums of n){
    //     for(let j=1;j<n.length;j++){
    //         if(nums+n[j]===0){
    //             return [nums,n[j]]
    //         }
    //     }
    // }

    //optimized --linear O(n)
    let left=0;
    let right=n.length-1;
    while(left<right){
        sum=n[left]+n[right]
        if(sum===0){
            return [n[left],n[right]]
        }else if(sum>0){
            right--
        }else{
            left++
        }
    }
    
}

console.log(sumZero(arr))