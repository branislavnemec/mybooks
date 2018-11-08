import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from 'src/app/structures/book';

@Component({
  selector: 'app-book-box',
  templateUrl: './book-box.component.html',
  styleUrls: ['./book-box.component.css']
})
export class BookBoxComponent {

  @Input()
  book: Book;

  @Output()
  delete: EventEmitter<Book> = new EventEmitter();

  constructor() {
  }

  onDeleteClicked(book: Book) {
    this.delete.next(book);
  }

}
