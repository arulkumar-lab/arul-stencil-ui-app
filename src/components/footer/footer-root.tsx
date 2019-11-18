import { Component, h } from '@stencil/core';

@Component({
  tag: 'footer-root',
  styleUrl: 'app-root.css',
  shadow: true
})

export class FooterRoot {
  render(){
    return (
      <footer>
        <h5>Stencil Footer sample application</h5>
      </footer>
    )
  }
}
