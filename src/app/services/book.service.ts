import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoaderService } from 'src/app/services/loader.service';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Book } from 'src/app/structures/book';

import { endpoint } from 'src/environments/environment';

@Injectable()
export class BookService {

    constructor(private http: HttpClient, private loaderService: LoaderService) {
    }

    getAll(): Observable<Book[]> {
        setTimeout( () => { this.loaderService.loading = true; });
        return this.http.get<Book[]>(endpoint + '/book/')
            .pipe( tap( () => { this.loaderService.loading = false; },
                        () => { this.loaderService.loading = false; } ) );
    }

    findById(id: number): Observable<Book[]> {
        setTimeout( () => { this.loaderService.loading = true; });
        return this.http.get<Book[]>(endpoint + '/book/' + id)
            .pipe( tap( () => { this.loaderService.loading = false; },
                        () => { this.loaderService.loading = false; } ) );
    }

    add(book: Book): Observable<any> {
        setTimeout( () => { this.loaderService.loading = true; });
        return this.http.post<any>(endpoint + '/book/', book)
            .pipe( tap( () => { this.loaderService.loading = false; },
                        () => { this.loaderService.loading = false; } ) );
    }

    update(book: Book): Observable<any> {
        setTimeout( () => { this.loaderService.loading = true; });
        return this.http.put<any>(endpoint + '/book/', book)
            .pipe( tap( () => { this.loaderService.loading = false; },
                        () => { this.loaderService.loading = false; } ) );
    }

    delete(id: number): Observable<any> {
        setTimeout( () => { this.loaderService.loading = true; });
        return this.http.delete<any>(endpoint + '/book/' + id)
            .pipe( tap( () => { this.loaderService.loading = false; },
                        () => { this.loaderService.loading = false; } ) );
    }

}
