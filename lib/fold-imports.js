'use babel';

import {CompositeDisposable} from 'atom';

export default {

  foldImportsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-text-editor', {
      'fold-imports:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  toggle() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      console.log('editor', editor);

    }
    console.log('FoldImports was toggled!');
  }
};
