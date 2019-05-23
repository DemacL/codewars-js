// // function properFractions(n){
// //     if(n==1) return 0;
// //     var facts = getDivisors(n);  

// //     var r = n;
// //     for(var f of facts)
// //     {
// //       r-= Math.floor(r/f);
// //     }

// //     return r;
// //   }

// //   function getDivisors(a)
// //   {
// //     var arr = [];
// //     var p = 2;
// //     while(a > 1 && p <= a)
// //     {
// //       if(a % p == 0)
// //       {
// //         a/=p;    
// //         if(!arr.includes(p))
// //         {
// //           arr.push(p);
// //         }
// //       }
// //       else
// //       {
// //         p++;
// //       }
// //     }
// //     return arr;
// //   }

// list = [
//   {
//     name: "John",
//     points: 100,
//   },
//   {
//     name: "Bob",
//     points: 130,
//   },
//   {
//     name: "Mary",
//     points: 120,
//   },
//   {
//     name: "Kate",
//     points: 120,
//   },
// ];
// list.sort((x, y) => x.points - y.points)
 
// for (let i = 0; i < list.length; i++) {
//   list[i].position = i+1;
//   if(i>0 && list[i].points ===list[i-1].points ){
//     list[i].position =  list[i-1].position;
//   } 
// }
// console.log(list);
function ranking(people) { 
  people.sort((m, n) =>(n.points!==m.points?n.points-m.points:m.name.localeCompare(n.name) ));
   
  for (let i = 0; i < people.length; i++) {
    people[i].position = i+1;
    if(i>0 && people[i].points ===people[i-1].points ){
      people[i].position =  people[i-1].position;
    } 
  } 
  
  return people;
  }


  console.log(

  ranking([ { name: 'Udjbvvlxk', points: 150},
  { name: 'Mbjrszr', points: 140},
  { name: 'Fsjdbroi', points: 140},
  { name: 'Rebudu', points: 140},
  { name: 'Nmizjwg', points: 140},
  { name: 'Chnckupbfm', points: 120},
  { name: 'Vlgkdejsxz', points: 120},
  { name: 'Feekdzgm', points: 120},
  { name: 'Naomfh', points: 120},
  { name: 'Vsdsi', points: 110 },
  { name: 'Pquxya', points: 110 },
  { name: 'Facap', points: 110 },
  { name: 'Amdeyhiy', points: 110 },
  { name: 'Vzvmhcg', points: 100 },
  { name: 'Nelvzploa', points: 100 },
  { name: 'Ighxhf', points: 90 },
  { name: 'Cfqvydc', points: 90 },
  { name: 'Hjhwx', points: 90 },
  { name: 'Fbkkitgaz', points: 80 },
  { name: 'Ubvqkcdkpo', points: 60 },
  { name: 'Fhfhgji', points: 60 },
  { name: 'Cskabxcni', points: 60 },
  { name: 'Gdldj', points: 40 },
  { name: 'Plygk', points: 10 } ]))