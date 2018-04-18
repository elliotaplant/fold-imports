'use babel';

import {CompositeDisposable} from 'atom';
import toggleFoldImports from './toggleFoldImports'

export default {

  foldImportsView: null,
  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles the imports
    this.subscriptions.add(atom.commands.add('atom-text-editor', {
      'fold-imports:toggle': () => this.toggle()
    }));

    // Listen for when text editors open and fold the imports if the user's config has that setting on
    atom.workspace.observeTextEditors(editor => {
      if (atom.config.get('fold-imports.foldOnStart')) {
        toggleFoldImports(editor);
      }
    })
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  toggle() {
    // Find the current editor and toggle the import fold when the toggle command is issued
    const editor = atom.workspace.getActiveTextEditor();
    toggleFoldImports(editor);
  },

  config: {
    "foldOnStart": {
      "description": "Fold `import` statements when editor is opened (default: true).",
      "type": "boolean",
      "default": "true",
    }
  },
};
