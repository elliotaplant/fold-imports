'use babel';

import getImportRange from './getImportRange'

// Finds the atom editor and toggles the folding of import lines.
// May have some funny behavior if some import lines are already toggled

export default function toggleFoldImports() {
  // Get the current editor from the atom workspace
  const editor = atom.workspace.getActiveTextEditor();
  if (editor) {

    // Get the range of lines from the first import statement to the last
    const importRange = getImportRange(editor);
    if (importRange) {

      // Check to see if the imports are already folded
      if (editor.isFoldedAtBufferRow(importRange.start.row)) {
        editor.unfoldBufferRow(importRange.start.row);
      } else {
        editor.foldBufferRange(importRange);
      }
    }
  }
}
