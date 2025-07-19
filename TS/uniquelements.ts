(function main() {
    console.log('Hello World!');
    let nums  = [0,0,0,1,1,1,2,2,3,3,4]
    let numduplicate = []
    for(var i=0;i<nums.length;i++)
        {
            //console.log(nums[i]);
            if(i==0)
                {
                    numduplicate.push(1)
                }
            else{
                if(nums[i]==nums[i-1])
                    {
                         numduplicate.push(-1)
                    }
                else{
                     numduplicate.push(1)
                }
            }
        }
    /*
     for(var i=0;i<numduplicate.length;i++)
         {
             console.log(numduplicate[i]);
         }
     */
    let x = null
    let y = 1
    let uniquelements =1;
         for(y=1;y<numduplicate.length;)
         {
             if(numduplicate[y]==-1)
                 {
                     if(x==null)
                         {
                             x=y;
                             y =  y+1;
                         }
                     else
                         {
                           y =  y+1;
                         }
                 }
             else
                 {
                     let zzz = nums[x];
                      nums[x] = nums[y];
                     nums[y] = zzz;
                      y =  y+1;
                      x =  x+1;
                     uniquelements = uniquelements+1
                     
                 }
            
         }
       for(var i=0;i<numduplicate.length;i++)
         {
             console.log(nums[i]);
         }
    console.log("Number of unique elements..."+uniquelements)
    
}());