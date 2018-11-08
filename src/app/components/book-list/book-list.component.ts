import { Component, OnInit } from '@angular/core';

import { BookService } from 'src/app/services/book.service';

import { Book } from 'src/app/structures/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getAll()
      .subscribe((books: Book[]) => {
        this.books = books;
        console.log(this.books);
      });
  }

  deleteBook(event: Book) {
    this.bookService.delete(event.id)
      .subscribe(result => {
        console.log(result);
        const index = this.books.findIndex(book => book.id === event.id);
        if (index > -1) {
          this.books.splice(index, 1);
        }
      });
  }

}
