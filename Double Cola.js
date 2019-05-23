function whoIsNext(names, r) {
   console.log(names, r);
   let num = names.length;
   let i = 0;
   while (r > num) {
      r = r - num;
      num += num;
      i++;
   }
   const index =Math.ceil(r / (Math.pow(2 , i))) - 1;
   console.log(r, i, num,index);
   return names[index];
}

function whoIsNext1(names, r) {
   var l = names.length;
   while (r >= l) { 
      console.log(r);
      r -= l;
       l *= 2; }
       console.log(r,l);
   return names[Math.ceil(names.length * r / l)-1];
 }

// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 69));
console.log(whoIsNext1(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 69));