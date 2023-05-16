
const newGame = () => {

}

const initializeArena = () => {
    // inizializzazione campo di gioco
    var length = document.getElementById("userLength").value;
    var width  = document.getElementById("userWidth").value;
    let table = document.createElement("table");
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

    // aggiunta navicella
    var rowIndex = Math.floor (Math.random() * width)
    var columnIndex =  Math.floor (Math.random() * length);
    var targetCell = table.rows[rowIndex].cells[columnIndex];
    var spaceCraft = document.createElement("img");
    spaceCraft.src = "rocket.png";
    spaceCraft.style.width = "20px";
    spaceCraft.style.length = "20px";
    spaceCraft.style.display = 'block';
    spaceCraft.style.margin = 'auto';
    targetCell.appendChild(spaceCraft);

    // aggiunta ostacoli
}


window.onload = function() {
    document.getElementById('startButton').addEventListener('click', initializeArena);
};