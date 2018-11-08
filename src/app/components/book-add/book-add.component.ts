import { Component } from '@angular/core';

import { BookService } from 'src/app/services/book.service';

import { Book } from 'src/app/structures/book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: [ './book-add.component.css' ]
})
export class BookAddComponent {

    constructor(private bookService: BookService) {}

    onSubmitForm(event: Book) {
      this.bookService.add(event)
        .subscribe(result => {
          console.log(result);
        });
    }
}
