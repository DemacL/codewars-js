function dirReduc(arr) {
    // ...
    let i =0;
    while(i!=arr.length){
        console.log(i);
        if(["NORTHSOUTH", "SOUTHNORTH","EASTWEST","WESTEAST"].includes(arr[i]+arr[i+1])){// 如果有连续的对立方向
            arr.splice(i,2);
            i =0;
        }else{
            i++;
        }
      
        console.log(arr);
    }
  
}

function dirReduc1(plan) {
    var opposite = {
      'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
        console.log(dirs,dir);
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();
        else
          dirs.push(dir);
        return dirs;
      }, []);
  }

dirReduc1(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);