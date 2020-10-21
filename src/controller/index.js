export class Controller {
  constructor(view) {
    this.view = view;
  }

  init() {
    window.addEventListener('keypress', this.onPressKey.bind(this));
    this.view.appendUnderscore();
  }

  onPressKey(e) {
    if (/[a-zA-Zа-яА-Я]/.test(e.key)) {
      this.render(e.key);
    }
  }

  render(letter) {
    this.view.removeUnderscore();
    this.view.showLetter(letter);
    this.view.appendUnderscore();
  }
}
