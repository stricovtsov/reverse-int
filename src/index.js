module.exports = function reverse (n) {
   n=n.toString(10).split('').map(int => parseInt(int, 10))
   let temp = 0;
   for(var i=0; i<n.length/2; i++){
         temp=n[i];
         n[i]=n[n.length-i-1];
         n[n.length-1-i]=temp;
         }
        return n=parseInt(n.join(''),10);
}
