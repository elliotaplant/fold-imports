'use babel';
// Gets the `import` statements in JS/TS/JSX/TSX files
// Assumes all lines from the first to the last `import` statement should be included

export default function getImportRange(editor) {
  // Get the lines of the editor as an array
  var lines = editor.buffer.getLines();

  // Get all `import` lines
  var importLines = lines.map(line => line.startsWith('import'));

  // Find the first import line
  var firstImportRow = importLines.indexOf(true);

  // Should only get last row if first row exists
  if (firstImportRow >= 0) {
    // Find the last line with an `import` statement
    var lastImportRow = importLines.lastIndexOf(true);

    // Get the length of that line
    var lastImportRowLength = lines[lastImportRow].length;

    // Return the range that contains all the import lines
    return {
      start: {
        row: firstImportRow,
        column: 7
      }, // Leaves `import ...` at the beginning of the folded section
      end: {
        row: lastImportRow,
        column: lastImportRowLength,
      }
    }
  }

  // If there were no import lines, return null
  return null;
}
