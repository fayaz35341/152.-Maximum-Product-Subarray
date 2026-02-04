class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        n=len(nums)
        postsum=1

        # for i in range(n):
        #     presum=1
        #     for j in range(i,n):
        #         presum =presum * nums[j]
        #         postsum=max(postsum,presum) 
        presum=1
        ans=float('-Inf')
        for i in range(n):
            if presum==0 :
                presum=1
            if postsum==0:
                postsum=1

            presum*= nums[i]
            postsum*=nums[n-i-1]
            ans=max(ans,presum,postsum)
        
        return ans
        
