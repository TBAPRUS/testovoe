import { $qs } from '../helper'

import { Template } from '../template';

export class View {
  constructor() {
    this.template = new Template();

    this.text = $qs('#text');

    this.underscore = document.createElement('div');
    this.underscore.innerHTML = '_';
    this.underscore.className = 'underscore';
  }

  removeUnderscore() {
    $qs('.underscore').remove();
  }

  appendUnderscore() {
    this.text.append(this.underscore);
  }

  showLetter(letter) {
    const node = this.template.createNodeLetter(letter);
    this.text.append(node);
  }
}
