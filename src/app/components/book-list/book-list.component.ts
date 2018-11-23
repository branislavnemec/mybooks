import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { BookService } from 'src/app/services/book.service';
import { DialogsService } from 'src/app/dialogs/dialogs.service';

import { Book } from 'src/app/structures/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService,
              private router: Router,
              private dialogsService: DialogsService,
              private matSnackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.bookService.getAll()
      .subscribe((books: Book[]) => {
        this.books = books;
        console.log(this.books);
      });
  }

  infoBook(event: Book) {
    console.log(event.id);
    this.router.navigate(['book-detail', event.id]);
  }

  editBook(event: Book) {
    console.log(event.id);
    this.router.navigate(['book-edit', event.id]);
  }

  deleteBook(event: Book) {
    this.dialogsService.confirmDialog('Are you sure?', 'Delete', 'Cancel')
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.bookService.delete(event.id)
          .subscribe(result => {
            console.log(result);
            const index = this.books.findIndex(book => book.id === event.id);
            if (index > -1) {
              this.books.splice(index, 1);
            }
            this.matSnackBar.open('Book deleted', null, { duration: 3000 });
          });
        }
      });
  }

}
