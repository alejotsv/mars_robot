// This is my Mars robot

// function to maintain a log of all movements
function keepLog(char,rover){
  rover.travelLog.push(char);
}

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
  console.log('The rover is currently facing ' + rover.direction);

switch(rover.direction){
  case "N":
  rover.direction = "E";
  break;

  case "E":
  rover.direction = "S";
  break;

  case "S":
  rover.direction = "W";
  break;

  case "W":
  rover.direction = "N";
  break;
}
console.log('turnRight was called!');
console.log('The rover is now facing ' + rover.direction);
}
 
function moveForward(rover) {
  console.log('The rover is currently facing ' + rover.direction);
  console.log('And located at x: ' + rover.x + ', y: ' + rover.y);

  switch(rover.direction){
    case "N":
    rover.y--;
    break;

    case "E":
    rover.x++;
    break;

    case "S":
    rover.y++;
    break;

    case "W":
    rover.x--;
    break;
  }
  console.log('moveForward was called');
  console.log('The rover is now facing ' + rover.direction);
  console.log('And located at x: ' + rover.x + ', y: ' + rover.y);
}

// Create function to call movements based on string of letters
function movements(string,rover){
  for(let i=0; i<string.length; i++){
    switch(string[i]){
      case 'r':
      turnRight(rover);
      break;

      case 'l':
      turnLeft(rover);
      break;

      case 'f':
      moveForward(rover);
      break;

      default:
      console.log("Invalid command. Please use 'r', 'l', or 'f'");
    }
  }
}

// Create robot with property "direction"

let robot = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
}

turnLeft(robot);

movements('lllrr',robot);