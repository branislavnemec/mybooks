import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, public loaderService: LoaderService) {
  }

  ngOnInit() {
  }

  goToAddBook() {
    this.router.navigate(['book-add']);
  }

  goToBookList() {
    this.router.navigate(['book-list']);
  }

}
