import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { BookService } from 'src/app/services/book.service';

import { Book } from 'src/app/structures/book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: [ './book-add.component.css' ]
})
export class BookAddComponent {

    constructor(private bookService: BookService,
                private router: Router,
                private matSnackBar: MatSnackBar) {}

    onSubmitForm(event: Book) {
      this.bookService.add(event)
        .subscribe(result => {
          console.log(result);
          this.matSnackBar.open('Book added', null, { duration: 3000 });
          this.router.navigate(['book-list']);
        });
    }

}
