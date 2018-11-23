import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { BookService } from 'src/app/services/book.service';

import { Book } from 'src/app/structures/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: [ './book-edit.component.css' ]
})
export class BookEditComponent implements OnInit {

  book: Book = new Book();

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private location: Location,
              private matSnackBar: MatSnackBar) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.bookService.findById(id)
      .subscribe((books: Book[]) => {
        this.book = books[0];
        console.log(this.book);
      });
  }

  onSubmitForm(event: Book) {
    this.bookService.update(event)
      .subscribe(result => {
        console.log(result);
        this.matSnackBar.open('Book edited', null, { duration: 3000 });
        this.router.navigate(['book-list']);
      });
  }

  onCancelForm(event: Book) {
    this.location.back();
  }

}
