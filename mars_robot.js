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
  keepLog('l',rover);
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
  keepLog('r',rover);
  console.log('turnRight was called!');
  console.log('The rover is now facing ' + rover.direction);
}
 
function moveForward(rover) {
  console.log('The rover is currently facing ' + rover.direction);
  console.log('And located at x: ' + rover.x + ', y: ' + rover.y);

  if((rover.x==0 && rover.direction=='W') || (rover.x==9 && rover.direction=='E') || (rover.y==0 && rover.direction=='N') || (rover.y==9 && rover.direction=='S')) {
    console.log('Sorry, you are at the limit of the grid, you cannot move forward.')
  } else {
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
  keepLog('f',rover);
  console.log('moveForward was called');
  console.log('The rover is now facing ' + rover.direction);
  console.log('And located at x: ' + rover.x + ', y: ' + rover.y);    
  }  
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

console.log(robot.travelLog);

let theMovements = 'rfffrfffllffrf';

movements(theMovements,robot);

console.log(theMovements);
console.log(robot.travelLog);