function drawTree(height) {
  var draw = 1;
  var middle = Math.ceil((height * 2 - 1) / 2);

  // Draw leaves
  var space = middle;
  for(var i = 0; i < height; i++) {
    for(var j = 0; j < space; j++) {
      process.stdout.write(' ');
    }
    for(var k = 0; k < draw; k++) {
      process.stdout.write('*');
    }
    console.log();
    draw+=2;
    space--;
  }

  //Draw trunk
  for(var l = 0; l < middle; l++) {
    process.stdout.write(' ');
  }
  process.stdout.write('*');
  console.log();
}

function print2DArrayAsGrid(array, seperator /* OPTIONAL */) {
  if (typeof(seperator) === 'undefined') {
    seperator = ' ';
  }

  for(var r = 0; r < array.length; r++) {
    for(var c = 0; c < array[r].length; c++) {
      process.stdout.write((array[r][c]).toString());
      if (c !== array[r].length - 1) {
        process.stdout.write(seperator);
      }
    }
    console.log();
  }
}