// This is my Mars robot

function turnLeft(rover) {
  console.log('The rover is currently facing ' + rover.direction);

  switch(rover.direction){
    case "N":
    rover.direction = "W";
    break;

    case "E":
    rover.direction = "N";
    break;

    case "S":
    rover.direction = "E";
    break;

    case "W":
    rover.direction = "S";
    break;
  }
  console.log('turnLeft was called!');
  console.log('The rover is now facing ' + rover.direction);
}
 
function turnRight(rover) {
  console.log('turnRight was called!');
}
 
function moveForward(rover) {
  console.log('moveForward was called');
}

// Create robot with property "direction"

let robot = {
  direction: 'N'
}

turnLeft(robot);