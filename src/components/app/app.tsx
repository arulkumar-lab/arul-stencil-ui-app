import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stencil-app',
  styleUrl: 'app.css',
  shadow: true
})
export class App {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
