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

drawTree(15);