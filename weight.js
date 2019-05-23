function orderWeight(strng) {
    return  strng.trim() ===''? '':
            strng.trim().split(/\s+/)
          .map(item =>[item,item.split('').reduce((x,y)=>x + y,0)])
          .sort( (x,y)=>{ 
              console.log(x,y);
              if(x[1]===y[1]){
                   return x[0]().localeCompare(y[0]);
              }else{
                  return x[1]-y[1];
              }
          })
          .map(item=>item[0]).join(' ');
  }

  function orderWeight1(strng) {
    return  strng.trim() ===''? '':
            strng.trim().split(/\s+/)
          .map(item =>[item,item.split('').reduce((x,y)=>Number(x) + Number(y),0)])
          .sort( (x,y)=>{ 
              if(x[1]===y[1]){
                   return x[0].toString().localeCompare(y[0].toString());
              }else{
                  return x[1]-y[1];
              }
          })
          .map(item=>item[0]).join(' ');
  }

  function orderWeight2(strng) {
    return  strng.trim() ===''? '':
            strng.trim().split(/\s+/)
          .map(item =>[item,item.split('').reduce((x,y)=>x + Number(y))])
          .sort( (x,y)=>{ 
            console.log(x,y);
              if(x[1]===y[1]){
                   return x[0].toString().localeCompare(y[0].toString());
              }else{
                  return x[1]-y[1];
              }
          })
          .map(item=>item[0]).join(' ');
  }
  console.log(orderWeight('5 122 131'));
console.log(orderWeight1('5 122 131')); 
console.log(orderWeight2('5 122 131'));