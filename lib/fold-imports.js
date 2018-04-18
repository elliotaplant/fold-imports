'use babel';

import FoldImportsView from './fold-imports-view';
import { CompositeDisposable } from 'atom';

export default {

  foldImportsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.foldImportsView = new FoldImportsView(state.foldImportsViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.foldImportsView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'fold-imports:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.foldImportsView.destroy();
  },

  serialize() {
    return {
      foldImportsViewState: this.foldImportsView.serialize()
    };
  },

  toggle() {
    console.log('FoldImports was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
