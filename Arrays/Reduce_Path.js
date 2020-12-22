function directionReduce(arr){
  const opposite = {
    'NORTH': 'SOUTH', 
    'EAST': 'WEST', 
    'SOUTH': 'NORTH', 
    'WEST': 'EAST'
  };
  return arr.reduce(function(direction, nextDirection){
    direction[direction.length - 1] === opposite[nextDirection] ? direction.pop(): direction.push(nextDirection);
    return direction;
  }, []);
}
