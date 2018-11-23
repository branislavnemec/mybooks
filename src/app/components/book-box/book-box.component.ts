import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from 'src/app/structures/book';

@Component({
  selector: 'app-book-box',
  templateUrl: './book-box.component.html',
  styleUrls: ['./book-box.component.css']
})
export class BookBoxComponent {

  @Input()
  book: Book = new Book();

  @Output()
  edit: EventEmitter<Book> = new EventEmitter();

  @Output()
  delete: EventEmitter<Book> = new EventEmitter();

  @Output()
  info: EventEmitter<Book> = new EventEmitter();

  constructor() {
  }

  onEditClicked(book: Book) {
    this.edit.next(book);
  }

  onDeleteClicked(book: Book) {
    this.delete.next(book);
  }

  onImageClicked(book: Book) {
    this.info.next(book);
  }

}
