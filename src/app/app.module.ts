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

import { ImageCropperModule } from 'ngx-image-cropper';

import { AppComponent } from './app.component';
import { BookListComponent } from 'src/app/components/book-list/book-list.component';
import { BookBoxComponent } from 'src/app/components/book-box/book-box.component';
import { BookFormComponent } from 'src/app/components/book-form/book-form.component';
import { BookEditComponent } from 'src/app/components/book-edit/book-edit.component';
import { BookAddComponent } from 'src/app/components/book-add/book-add.component';
import { FileUploadComponent } from 'src/app/components/file-upload/file-upload.component';

import { BookService } from 'src/app/services/book.service';

const appRoutes: Routes = [
  { path: 'book-list', component: BookListComponent },
  { path: 'book-add', component: BookAddComponent },
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
    BookAddComponent,
    FileUploadComponent,
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
    ImageCropperModule,
    RouterModule.forRoot(appRoutes, { useHash: true}),
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
