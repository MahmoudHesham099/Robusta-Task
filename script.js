
var color = document.getElementById("colorPicker");

var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

var table = document.getElementById("pixelCanvas");


// var rows=height.value;
// var columns=width.value;

// height.addEventListener('change',function(){
//      rows =height.value;
// })

// width.addEventListener('change',function(){
//     columns =width.value;
// })


function makeGrid(){
 
    var newRows =height.value;
    var newColumns =width.value;
   
    var oldRows = table.rows.length 
    
    // clear the old table
    // table.innerHTML=""
    // OR by loop
    for (let i = 0; i < oldRows; i++) {
        var oldColumns = table.rows[i].cells.length    
        for (let y = 0; y < oldColumns; y++) { 
             table.rows[i].deleteCell(table.rows[i].cells.length-1)  
    }}

    //create the new table
    for (let i = 0; i < newRows; i++) {
        var row = table.insertRow(i);
        for (let y = 0; y < newColumns; y++) {
          let cell=row.insertCell(y);
          cell.addEventListener('click',function(){
            var newColor=color.value
            cell.style.backgroundColor = newColor;
          })
    }}
}
