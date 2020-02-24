import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Fun with Portals</h1>
    <p>Click this button to open a portal:</p>
    <button (click)="this.showPortal = true">open me!</button>

    <!-- Whatever you wrap with the '<window>' component will be rendered on a new window  -->
    <window *ngIf="showPortal">
      <h2>Hello world from amother window!!</h2>
      <button (click)="this.showPortal = false">Close me!</button>
    </window>
  `,
})
export class AppComponent  {
  showPortal = false;
}
