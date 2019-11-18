import { Component, h } from '@stencil/core';

@Component({
  tag: 'main-root',
  styleUrl: 'app-root.css',
  shadow: true
})

export class MainRoot {
  render(){
    return (
      <main>
        <div>Main content TODO....</div>
      </main>
    )
  }
}
