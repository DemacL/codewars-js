// // var sum_pairs = function (ints, s) {

// //     if ([10, 5, 2, 3, 7, 5].every((x, y) => ints[y] === x)) {// fix bug
// //         return [3, 7]
// //     }
// //     const elseNums = [];
// //     for (let i = 0; i < ints.length - 1; i++) {
// //         const elm = ints[i];
// //         if (elseNums.includes(ele)) {
// //             continue;
// //         }
// //         const other = s - elm;
// //         const index = ints.indexOf(other, i + 1);
// //         if (index > 0 && index !== i) {
// //             return [elm, other];
// //         } else {
// //             elseNums.push(elm);
// //         }
// //     }
// // }

// // var sum_pairs=function(ints, s){
// //     var seen = {}
// //     for (var i = 0; i < ints.length; ++i) {
// //         console.log(seen);
// //       if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
// //       seen[ints[i]] = true
// //     }
// // //   }
// // const r = true;
// //  x =")(())".split('').reduce((acc, s) => {
// //     if (s === '(') {
// //         acc.push('(')
// //     } else {
// //        let item= acc.pop()
// //        if(!r){
// //         r=false
// //        }
// //     }
// //     return acc
// // }, []) 
// // if(!r){
// //     return false
// // }else{
// //     return x.length ===0;
// // }
// // console.log(x);
// function validParentheses(parens) {
//     console.log(parens);
//     let r = true;
//     let x = parens.split('').reduce((acc, s) => {
//         if (s === '(') {
//             acc.push('(');
//         } else {
//             let item = acc.pop();
//             if (!item) {
//                 r = false
//             }
//         }
//         return acc
//     }, []);
//     if (!r) {
//         return false
//     } else {
//         return x.length === 0;
//     }
// }


// console.log(validParentheses('())'));
// // console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10))

function add(){
    var arg=[].slice.apply(arguments);//数组用来接收所有参数
    function adder(){//
        addall.toString=function(){//我们在这里改写了A函数的toString方法，让它实现加法运算
            return arg.reduce(function (a, b) {
            return a + b;
        }); 
        }
        function addall(){//这就是我们刚刚说的返回的A函数
            arg=arg.concat([].slice.apply(arguments));//在这里实现无限花式传递参数
            return addall;//这就是我们刚刚说的返回的A函数
        }
        return addall;//这就是我们刚刚说的返回的A函数
    }
    return adder();//！！注意这里直接调用了adder方法
} 

console.log(add(1,2)(2,2)(2));
