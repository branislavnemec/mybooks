import { Injectable } from "@angular/core";
@Injectable()
export class LoaderService {

    loading = false;

    constructor() { console.log('LoaderService...'); }

}
