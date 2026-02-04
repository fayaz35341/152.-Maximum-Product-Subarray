/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n=nums.length  
    // let postsum=0
    // let c=0
    // for (let i=0;i<n;i++){
    //     let presum=1
    //     for (let j=i;j<n;j++){
    //         presum =presum * nums[j]
    //         postsum=Math.max(postsum,presum)
    //     }
    // }
    // if (n<=1 & nums[0]<0){
    //     return nums[0]
    // }
    // return postsum
    let postsum=1
    let presum=1
    let ans = -Infinity
    for (let i=0;i<n;i++){
        if (postsum===0) {
            postsum=1
        }
        if (presum===0) {
            presum=1
        }
        presum*=nums[i]
        postsum*=nums[n-i-1]
        ans=Math.max(ans, presum , postsum)
    }
    return ans
    
};
