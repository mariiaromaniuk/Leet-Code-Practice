function directionReduce(arr){
  const opposite = {
    'NORTH': 'SOUTH', 
    'EAST': 'WEST', 
    'SOUTH': 'NORTH', 
    'WEST': 'EAST'
  };
  // reduce() method executes a reducer function (that I provided) 
  // on each element of the array, resulting in single output value
  return arr.reduce(function(direction, nextDirection){
    direction[direction.length - 1] === opposite[nextDirection] ? direction.pop(): direction.push(nextDirection);
    return direction;
  }, []);
}
