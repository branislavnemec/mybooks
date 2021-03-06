import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ImageCroppedEvent } from 'ngx-image-cropper';

import { imagePlaceholder } from 'src/app/utils/image-utils';

import { Book } from 'src/app/structures/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: [ './book-form.component.css' ]
})
export class BookFormComponent implements OnInit, OnChanges {

    @Input()
    book: Book = new Book();

    @Output()
    submitForm: EventEmitter<Book> = new EventEmitter();

    @Output()
    cancelForm: EventEmitter<Book> = new EventEmitter();

    inputForm: FormGroup;
    imageContent: string = imagePlaceholder;
    croppedImage: string = imagePlaceholder;
    canvasRotation: number = 0;

    constructor(private fb: FormBuilder) {}

    ngOnChanges(): void {
      console.log(this.book);
      this.initForm();
    }

    ngOnInit(): void {
      console.log(this.book);
      this.initForm();
    }

    initForm() {
      this.inputForm = this.fb.group({
        titleControl: [this.book.title, []],
        subtitleControl: [this.book.subtitle, []],
        descriptionControl: [this.book.description, []],
      });
      if (this.book.image && this.book.image.length > 0) {
        this.imageContent = this.book.image;
      }
    }

    submit() {
      const newBook: Book = new Book();
      newBook.id = this.book.id;
      newBook.title = this.inputForm.controls.titleControl.value;
      newBook.subtitle = this.inputForm.controls.subtitleControl.value;
      newBook.description = this.inputForm.controls.descriptionControl.value;
      newBook.image = this.croppedImage;
      this.submitForm.next(newBook);
    }

    cancel() {
      const newBook: Book = new Book();
      newBook.id = this.book.id;
      newBook.title = this.inputForm.controls.titleControl.value;
      newBook.subtitle = this.inputForm.controls.subtitleControl.value;
      newBook.description = this.inputForm.controls.descriptionControl.value;
      newBook.image = this.croppedImage;
      this.cancelForm.next(newBook);
    }

    onImageLoaded(event) {
      this.imageContent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
    }

    imageLoaded() {
      // show cropper
    }

    loadImageFailed() {
      // show message
    }

    rotateLeft() {
      this.canvasRotation--;
    }

    rotateRight() {
      this.canvasRotation++;
    }

}
