// process.stdout.write(); to print without newline

function drawTree(height) {
  // How many *'s to draw at the start
  var draw = 1;
  // The middle of the tree.
  var middle = Math.ceil((height * 2 - 1) / 2);

  // Save again because it gets modified
  var space = middle;
  // Loop for the whole tree height
  for(var i = 0; i < height; i++) {
    // Draw spaces
    for(var j = 0; j < space; j++) {
      process.stdout.write(' ');
    }
    // Draw *'s
    for(var k = 0; k < draw; k++) {
      process.stdout.write('*');
    }
    // Log new line to wrap
    console.log();
    // Increase by 2 so it stays odd. That way there is an exact middle.
    draw+=2;
    space--;
  }
  // Draw spaces for the trunk
  for(var l = 0; l < middle; l++) {
    process.stdout.write(' ');
  }
  // Draw the trunk
  process.stdout.write('*');
  // New line to finish if off
  console.log();
}

function print2DArrayAsGrid(array, seperator /* OPTIONAL */) {
  // Check if a seperator was passed. Use default if not.
  if (typeof(seperator) === 'undefined') {
    seperator = ' ';
  }

  // Loop through rows
  for(var r = 0; r < array.length; r++) {
    // Loop through columns
    for(var c = 0; c < array[r].length; c++) {
      // Check if last index in row
      if(c === array[r].length - 1) {
        // Don't print a seperator if last index
        process.stdout.write((array[r][c]).toString());
      } else {
        // Print a seperator if not last index
        process.stdout.write((array[r][c]).toString() + seperator);
      }
    }
    // Newline
    console.log();
  }
}