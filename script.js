var table = null;
var length = 0;
var width = 0;

var numberObstacles = 0; 
var postitionTakenArray = [];

const newGame = () => {
    initializeArena();
}

const resetGame = () => {
table.remove();
}

const initializeArena = () => {
    buildArena();
    addSpacecraft();
    addObstacles(numberObstacles);
}

const buildArena = () => {
    length = document.getElementById("userLength").value;
    width  = document.getElementById("userWidth").value;
    numberObstacles = 3;
    table = document.createElement("table");
    table.style.borderCollapse = "collapse";

    for (var i = 0; i < width; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < length; j++) {
        var cell = document.createElement("td");
        cell.style.border = "2px dashed orange";
        cell.style.width = "100px"; 
        cell.style.height = "50px"; 
        row.appendChild(cell);
    }
    table.appendChild(row);
    } 
    var arenaContainer = document.getElementById("arenaContainer");
    arenaContainer.appendChild(table);  
}

const addSpacecraft = () => {
    rowIndexSpacecarft = Math.floor (Math.random() * width);
    columnIndexSpacecraft =  Math.floor (Math.random() * length);
    var targetCell = table.rows[rowIndexSpacecarft].cells[columnIndexSpacecraft];
    var spaceCraft = document.createElement("img");
    spaceCraft.src = "rocket.png";
    spaceCraft.style.length = "20px";
    spaceCraft.style.width = "20px";
    spaceCraft.style.display = "block";
    spaceCraft.style.margin = "auto";
    targetCell.appendChild(spaceCraft);
    postitionTakenArray.push([rowIndexSpacecarft, columnIndexSpacecraft]);
}

const addObstacles = (numberObstacles) => {
    console.log(postitionTakenArray)
    console.log(numberObstacles);
    var created = 0;
    var count = 0;
    while (created < numberObstacles) {
      let rowIndexObstacle = Math.floor(Math.random() * width);
      let columnIndexObstacle = Math.floor(Math.random() * length);
      
      let isPositionTaken = postitionTakenArray.some(element => {
        return element[0] === rowIndexObstacle && element[1] === columnIndexObstacle;
      });
      
      if (!isPositionTaken) {
        addObstacle(rowIndexObstacle, columnIndexObstacle);
        postitionTakenArray.push([rowIndexObstacle, columnIndexObstacle]);
        created++;
      }
      
      if (count > width * length -1){
        break;
      }
      count++;
    }
  }

const addObstacle = (rowIndexObstacle, columnIndexObstacle) => {
  var targetCell = table.rows[rowIndexObstacle].cells[columnIndexObstacle];
  var obstacle = document.createElement("img");
  obstacle.src = "asteroid.png";
  obstacle.style.length = "30px";
  obstacle.style.width = "30px";
  obstacle.style.display = "block";
  obstacle.style.margin = "auto";
  targetCell.appendChild(obstacle);
  postitionTakenArray = postitionTakenArray.concat([rowIndexObstacle,columnIndexObstacle]);
}

window.onload = function() {
    document.getElementById('startButton').addEventListener('click', newGame);
};