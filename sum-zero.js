//Sum Zero Problem  [-5,-4,-3,-2,0,2,,4,6,8] --> input

const arr=[-5,-4,-3,-2,0,2,4,6,8]

function sumZero(n){
    
    for(let nums of n){
        for(let j=1;j<n.length;j++){
            console.log('nums n', nums+ n[j])
            if(nums+n[j]===0){
                return [nums,n[j]]
            }
        }
    }
}

console.log(sumZero(arr))