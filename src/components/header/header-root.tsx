import { Component, h } from '@stencil/core';

@Component({
  tag: 'header-root',
  styleUrl: 'app-root.css',
  shadow: true
})

export class HeaderRoot {
render(){
  return (
    <header>
      <h1>Stencil Header sample application</h1>
    </header>
  )
}
}
