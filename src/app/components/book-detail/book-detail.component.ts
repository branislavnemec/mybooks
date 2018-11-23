import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { BookService } from 'src/app/services/book.service';
import { DialogsService } from 'src/app/dialogs/dialogs.service';

import { Book } from 'src/app/structures/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

    book: Book = new Book();

    constructor(private bookService: BookService,
                private dialogsService: DialogsService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private matSnackBar: MatSnackBar) {}

    ngOnInit() {
        this.activatedRoute.paramMap
            .subscribe(params => {
                this.bookService.findById(Number(params.get('id')))
                    .subscribe((books: Book[]) => {
                        this.book = books[0];
                        console.log(this.book);
                    });
            });
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
                            this.matSnackBar.open('Book deleted', null, { duration: 3000 });
                            this.router.navigate(['book-list']);
                        });
                }
            });
    }

}
