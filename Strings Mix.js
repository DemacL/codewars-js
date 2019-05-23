 

function mix(s1, s2) {
    // your code


    let getSum = (str, type) => {
        return str.split('').reduce((map, x) => {
            const code = x.charCodeAt();
            if ('a'.charCodeAt() <= code && code <= 'z'.charCodeAt()) { // 是小写字母 
                map.set(x, map.get(x) ? { num: map.get(x).num + 1, type } : { num: 1, type });
            }
            return map;
        }, new Map())
    }

    const m1 = getSum(s1, 1)
    const m2 = getSum(s2, 2) 
    for (let [key, value] of m2) {
        if (m1.has(key)) {// 如果都有这个值比较一下他们的大小更新为大值
            if (m2.get(key).num > m1.get(key).num) {
                m1.set(key, m2.get(key))
            } else if (m2.get(key).num === m1.get(key).num) {
                m1.set(key, { num: m1.get(key).num, type: '=' });
            }
        } else {
            m1.set(key, m2.get(key))
        }
    }

    return [...m1].filter(item => item[1].num > 1)
        .sort((x, y) =>{
            
            if( y[1].num !== x[1].num){
               return y[1].num - x[1].num;
            }else{
                if(x[1].type ===y[1].type ){
                    return x[0].localeCompare(y[0]);
                }else{
                    return  x[1].type.toString().codePointAt()-y[1].type.toString().codePointAt();
                } 
            }
        })
        .map(item => item[1].type + ':' + item[0].repeat(item[1].num))
        .join('/')


}

function mix1(s1, s2) {
    var counter = s => s.replace(/[^a-z]/g,'').split('').sort().reduce((x,y)=> (x[y] = 1 + (x[y]||0), x),{});
 
    s1 = counter(s1); s2 = counter(s2);
    console.log(s1,s2);
    var res = [], keys = new Set(Object.keys(s1).concat(Object.keys(s2)));
    keys.forEach(key => {
      var c1 = s1[key]||0, c2 = s2[key]||0, count = Math.max(c1, c2);
      if (count>1) {
        var from = [1, '=', 2][Math.sign(c2-c1)+1];
        var str = [...Array(count)].map(_=>key).join('');
        res.push(from+':'+str);
      }
    });
    return res.sort((x, y) => y.length - x.length || (x < y ? -1 : 1)).join('/');
  }


console.log(mix1("hhrr","yyhhrr"));