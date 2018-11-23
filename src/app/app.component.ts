import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from 'src/app/services/book.service';
import { LoaderService } from 'src/app/services/loader.service';

import { Book } from 'src/app/structures/book';
import { AutocompleteItem } from 'src/app/components/search-with-autocomplete/search-with-autocomplete.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  searchText = '';
  options: AutocompleteItem[] = [];

  constructor(private router: Router,
              private bookService: BookService,
              public loaderService: LoaderService) {
  }

  ngOnInit() {
  }

  goToAddBook() {
    this.router.navigate(['book-add']);
  }

  goToBookList() {
    this.router.navigate(['book-list']);
  }

  searchValueChanged(event) {
    console.log('searchValueChanged:' + event);
    this.bookService.findByPhrase(event, 'short')
      .subscribe((books: Book[]) => {
        console.log(books);
        this.options = [];
        books.forEach((book: Book) => {
          const acItem: AutocompleteItem = { id: book.id, text: book.title };
          this.options.push(acItem);
        });
      });
  }

  optionSelected(event) {
    console.log(event.id);
    this.router.navigate(['book-detail', event.id]);
  }

}
