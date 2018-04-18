// Fold the `import` statements in JS/TS/JSX/TSX files
// Assumes all lines until the last `import` statement should be folded

// Get the lines of the editor as an array
var lines = e.buffer.getLines();

// Get all `import` lines
var importLines = lines.map(line => line.startsWith('import'));

// Find the first import line
var firstImportRow = importLines.indexOf(true);

// Only fold if `import` line was found
if (firstImportRow >= 0) {
  // Find the last line with an `import` statement
  var lastImportRow = importLines.lastIndexOf(true);

  // Get the length of that line
  var lastImportRowLength = lines[lastImportRow].length;

  e.foldBufferRange({
    start: {
      row: firstImportRow,
      column: 7, // Leaves `import ...` at the beginning of the folded section
    },
    end: {
      row: lastImportRow,
      column: lastImportRowLength,
    }
  });
}
