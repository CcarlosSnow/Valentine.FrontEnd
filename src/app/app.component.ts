import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-valentine',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor ( public viewContainerRef: ViewContainerRef,
  ) {
    this.viewContainerRef = viewContainerRef;
  }
}
