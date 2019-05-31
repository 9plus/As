import {Directive, Output, HostListener, EventEmitter, Input, OnInit, Host} from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {

  @Output() dropHandler: EventEmitter<any> = new EventEmitter();
  @Output() dragHandler: EventEmitter<any> = new EventEmitter();

  public isDragging: boolean;
  public isInvalid: boolean;
  public imageSrc: string;

  constructor() { }

  @HostListener('dragover') onDragOver(e) {
    return false;
  }
  @HostListener('dragenter') onDragEnter() {
    this.isDragging = true;
    this.dragHandler.emit(this.isDragging);
  }

  @HostListener('dragleave') onDragLeave() {
    this.isDragging = false;
    this.dragHandler.emit(this.isDragging);
  }

  @HostListener('drop', ['$event']) onDrop(e) {
    e.preventDefault();
    this.isDragging = false;
    this.dragHandler.emit(this.isDragging);
    this.handleInputChange(e);
  }

  handleInputChange(e) {
    console.log(e);
    const file = e.dataTransfer ? e.dataTransfer.files[0] : 'null';
    const pattern = /.*png/;
    const reader = new FileReader();
    this.isInvalid = false;

    if (!file.type.match(pattern)) {
      this.isInvalid = true;
      console.log('invalid format');
      return this.dropHandler.emit({
        event: e,
        isInvalid: this.isInvalid
      });
    }

    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  handleReaderLoaded(e) {
    const reader = e.target;
    this.imageSrc = reader.result;
    this.dropHandler.emit({ event: e, invalidFlag: this.isInvalid });
  }

}
