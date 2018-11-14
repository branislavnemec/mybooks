import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Book } from 'src/app/structures/book';

@Injectable()
export class BookService {

    endpoint = 'http://apps.branislavnemec.com/mybooksapi/rest';
    endpointLocal = 'http://localhost:8080/myBooksApi/rest';


    constructor(private http: HttpClient) {

        this.endpoint = this.endpointLocal;

    }

    getAll(): Observable<Book[]> {
        return this.http.get<Book[]>(this.endpoint + '/book/');
    }

    findById(id: number): Observable<Book[]> {
        return this.http.get<Book[]>(this.endpoint + '/book/' + id);
    }

    add(book: Book): Observable<any> {
        return this.http.post<any>(this.endpoint + '/book/', book);
    }

    update(book: Book): Observable<any> {
        return this.http.put<any>(this.endpoint + '/book/', book);
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(this.endpoint + '/book/' + id);
    }

}
