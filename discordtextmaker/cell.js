

function Cell(i, j, w) {
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.w = w;
  this.neighborCount = 0;

  this.bee = false;
  this.reds = false;
  this.plain = false;
  this.green = false;
}

Cell.prototype.show = function() {
  stroke(0);
  fill(255);
  rect(this.x, this.y, this.w, this.w);
  if (this.reds) {
      fill('red');
      rect(this.x, this.y, this.w, this.w);
    }
  if (this.green) {
      fill('green');
      rect(this.x, this.y, this.w, this.w);
    }
}



Cell.prototype.countBees = function() {
  if (this.bee) {
    this.neighborCount = -1;
    return;
  }
  var total = 0;
  for (var xoff = -1; xoff <= 1; xoff++) {
    var i = this.i + xoff;
    if (i < 0 || i >= cols) continue;

    for (var yoff = -1; yoff <= 1; yoff++) {
      var j = this.j + yoff;
      if (j < 0 || j >= rows) continue;

      var neighbor = grid[i][j];
      if (neighbor.bee) {
        total++;
      }
    }
  }
  this.neighborCount = total;
}

Cell.prototype.contains = function(x, y) {
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.redcolor = function() {
  if (this.reds == true) {
    this.reds = false;
  } else {
    this.reds = true;
  }
}
Cell.prototype.isredcolor = function() {
  if (this.reds == true) {
    return true
  }
}
Cell.prototype.greencolor = function() {
  if (this.green == true) {
    this.green = false;
  } else {
    this.green = true;
  }
}
Cell.prototype.isrevealed = function() {
  if (this.revealed == true) {
    fill('white');
    rect(this.x, this.y, this.w, this.w);
  }
}








Cell.prototype.floodFill = function() {
  for (var xoff = -1; xoff <= 1; xoff++) {
    var i = this.i + xoff;
    if (i < 0 || i >= cols) continue;

    for (var yoff = -1; yoff <= 1; yoff++) {
      var j = this.j + yoff;
      if (j < 0 || j >= rows) continue;

      var neighbor = grid[i][j];
      // Note the neighbor.bee check was not required.
      // See issue #184
      if (!neighbor.revealed) {
        neighbor.reveal();
      }
    }
  }
}
