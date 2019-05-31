import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Drag';

  public imageSrc = '';

  private isDragging = false;

  onDropHandler(object) {
    console.log('event ' + JSON.stringify(object));
    this.imageSrc = object.event.target.result;
  }

  onDragHandler(value) {
    this.isDragging = value;
  }
}
