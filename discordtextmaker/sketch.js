
function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

var grid;
var cols;
var rows;
var w = 20;
var finalarray = new Array();

var totalBees = 30;

function setup() {
  createCanvas(1920, 1080);
  var EPIC = [140,300];


  cols = floor(EPIC[0] / w);
  rows = floor(EPIC[1] / w);



  button = createButton('reset');
  button.position(EPIC[0]+150, EPIC[1]+20);
  button.mousePressed(bpress);
  // Make slider
  rowslider = createSlider(1,50, 50, 1);
  rowslider.position(EPIC[0]+50, EPIC[1]+20);
  rowslider.style('width', '80px');

  sizetxt = createElement('h2', 'Cols:'+cols+ '  ' + 'Rows: '+rows);
  sizetxt.position(EPIC[0]+50, EPIC[1]+40)

  help = createElement('h2', 'Press f12 to see output');
  help.position(EPIC[0]+50, EPIC[1]+60)

  printbutton = createButton('Print');
  printbutton.position(EPIC[0]+190, EPIC[1]+20);
  printbutton.mousePressed(printtrash);

  grid = make2DArray(cols, rows);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w);

    }
  }
  // Pick totalBees spots
  var options = [];
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      options.push([i, j]);
    }
  }


  for (var n = 0; n < totalBees; n++) {
  }


  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].countBees();
    }
  }
  if ((keyIsPressed === true) && (key == "&")){
    rows = rows-1
  }
  if ((keyIsPressed === true) && (key == "(")){
    rows = rows+1
  }
}

function mousePressed() {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {
        grid[i][j].redcolor();
        // print(grid[i][j])
        // print(grid)
        // print(grid[i][j].plain)
      }
    }
  }
}
function draw() {
  oldrowslid = rowslider.value();
  if ((keyIsPressed === true) && (key == "&")){
    rows = rows-1
  } 
  if ((keyIsPressed === true) && (key == "(")){
    rows = rows+1
    grid = make2DArray(cols, rows);
    for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        grid[i][j] = new Cell(i, j, w);
      }
    }
  }


  background(150);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();

      }
    }
  sizetxt.html('Cols: '+(floor(100 / rowslider.value())) + '   ' +'Rows: '+rowslider.value())
}


function bpress() {
  rows = rowslider.value()
  cols = floor(100 / rowslider.value())
  grid = make2DArray(cols, rows);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w);
    }
  }
}

function printtrash() {
  test = [];
  yeet = ""
  for (var i = 0; i < rows; i++) {
    var test = new Array;
    for (var j = 0; j < cols; j++) {
      if (grid[j][i].reds){
        test.push(":white_large_square:")
      } else { 
        test.push(":black_large_square:")
      }
    }
    finalarray.push(test.toString()+'\n')
  }
    // var yeet = finalarray.toString
  yeet = finalarray.toString()
  console.log(yeet.split(',').join(""))
  finalarray = []
}