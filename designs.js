// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let h=document.getElementById("inputHeight");
let w=document.getElementById("inputWeight");


let table=document.getElementById("pixelCanvas");
let s=document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");



s.onsubmit = function(event){
    event.preventDefault();
    
    
    clearGrid();
    makeGrid();
};

function makeGrid()

{

for(let i=0;i<h.value;i++)
    {
      const row=table.insertRow(i);
    
    for(let j=0;j<w.value;j++)
        {  const cell=row.insertCell(j);
            cell.addEventListener("click", fillSquare);
        }
    }

}

function clearGrid(){
    while (table.firstChild){
         table.removeChild(table.firstChild);
    }
}

function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}