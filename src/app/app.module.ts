import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';

import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxLoadingModule } from 'ngx-loading';

import { DialogsModule } from 'src/app/dialogs/dialogs.module';

import { AppComponent } from 'src/app/app.component';
import { BookListComponent } from 'src/app/components/book-list/book-list.component';
import { BookBoxComponent } from 'src/app/components/book-box/book-box.component';
import { BookFormComponent } from 'src/app/components/book-form/book-form.component';
import { BookEditComponent } from 'src/app/components/book-edit/book-edit.component';
import { BookDetailComponent } from 'src/app/components/book-detail/book-detail.component';
import { BookAddComponent } from 'src/app/components/book-add/book-add.component';
import { FileUploadComponent } from 'src/app/components/file-upload/file-upload.component';
import { SearchWithAutocompleteComponent } from 'src/app/components/search-with-autocomplete/search-with-autocomplete.component';

import { BookService } from 'src/app/services/book.service';
import { LoaderService } from 'src/app/services/loader.service';

const appRoutes: Routes = [
  { path: 'book-list', component: BookListComponent },
  { path: 'book-add', component: BookAddComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: 'book-edit/:id', component: BookEditComponent },
  { path: '**',
    redirectTo: 'book-list',
    pathMatch: 'full'
  },
  { path: '',
    redirectTo: 'book-list',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookBoxComponent,
    BookFormComponent,
    BookEditComponent,
    BookDetailComponent,
    BookAddComponent,
    FileUploadComponent,
    SearchWithAutocompleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatMenuModule,
    ImageCropperModule,
    NgxLoadingModule.forRoot({}),
    DialogsModule,
    RouterModule.forRoot(appRoutes, { useHash: true}),
  ],
  providers: [
    BookService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
