import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('name-tag')
class NameTag extends LitElement {
  _defaultName: string = 'Default Name';

  @property()
  name = this._defaultName;

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
      <input @input=${this._changeName} placeholder="Enter your name">
    `;
  }

  _changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input === undefined || input.value.length === 0) {
      this.name = this._defaultName;
    } else {
      this.name = input.value;
    }
  }
}
