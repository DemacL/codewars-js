// var isPP = function (n) {
//     const result = [];
//     const divisor = [] // 所有因子
//     let num = 2;
//     while (n !== 1) {
//         if (n % num == 0) {
//             n = n / num;
//             divisor.push(num);
//             num = 2;
//         } else {
//             num++
//         }
//     }
//     const un = [...new Set(divisor)];  // 不重复的因子
//     if (divisor.length > 1) {
//         const times = divisor.length / un.length;
//         const arrs = un.map(x => [x, divisor.filter(y => x === y).length]);// 因子和对应个数的对应数组
//         const minp = Math.min(...arrs.map(x => x[1]));// 最小的一个因子的个数
//         console.log(divisor, un, arrs, times, minp);
//         const isPower = un.every(x => divisor.filter(y => x === y).length % minp === 0) // 所有因子都是这个最小因子的倍数
//         console.log(isPower);
//         if (isPower) {
//             console.log(un, minp);
//             const mm = arrs.reduce((acc, x) => Math.pow(x[0], x[1] / minp) * acc, 1)
//             console.log(mm);
//             result.push(mm, minp);
//             return result;
//         }
//     }

//     return null;

// }
// console.log(isPP(56));

// console.log([[2,3] ].reduce((m,n)=> m[1]+n[1] ))
// function score(dice) {
//     console.log(dice);
//     let result = 0;
//     const threeNum = [1, 2, 3, 4, 5, 6].map(x => [x, dice.filter(y => y === x).length]).filter(x => x[1] >= 3)[0];
//     if (threeNum) {
//         if (threeNum[0] === 1) {
//             result += 1000
//         }
//         else {
//             result += threeNum[0] * 100
//         }
//     }

//     let elseNum = (num) => {
//        return dice.filter(y => y === num).length - (threeNum ? (threeNum[0] === num ? 3 : 0) : 0)
//     };
//     result += elseNum(1) * 100;
//     result += elseNum(5) * 50;
//     return result
// }

function score( dice ) {
    var dc = [0,0,0,0,0,0];
    var tdr = [1000,200,300,400,500,600];
    var sdr = [100,0,0,0,50,0];
    dice.forEach(function(x){ dc[x-1]++; });
    return dc.reduce(function(s,x,i){ 
      return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
    },0);
  }
console.log(score([2, 4, 4, 5, 4]));