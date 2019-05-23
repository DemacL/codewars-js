// function solution(number) {
//     sum = 0;
//     for (let i = 0; i < number; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         } 
//     }
//     return sum;

// }

// console.log(solution(10))


function digital_root(n) {
    if(n <10){
      return n
    }else{  
      return digital_root(n.toString().split('').reduce((x,y)=>(+x)+(+y),0))
    }
  }
// a=942;
//   console.log(a.toString().split('').reduce((x,y)=>(+x)+(+y),0));
console.log(digital_root(132189))