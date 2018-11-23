import { Component, Input, OnInit, Output, OnChanges, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

export interface AutocompleteItem {
    id: number;
    text: string;
}

@Component({
    selector: 'app-search-with-autocomplete',
    templateUrl: 'search-with-autocomplete.component.html',
    styleUrls: ['search-with-autocomplete.component.css'],
})
export class SearchWithAutocompleteComponent implements OnInit, OnChanges {

    @Input()
    searchText = '';

    @Input()
    options: Array<AutocompleteItem> = [];

    @Input()
    debTime = 1000;

    @Output()
    valueChanged: EventEmitter<string> = new EventEmitter();

    @Output()
    optionSelected: EventEmitter<string> = new EventEmitter();

    searchControl: FormControl = new FormControl();

    constructor() {
    }

    ngOnChanges() {
    }

    ngOnInit() {
        this.searchControl.setValue(this.searchText);
        this.initFormControl();
    }

    initFormControl() {
        this.searchControl.valueChanges
            .pipe(
                debounceTime(this.debTime)
            )
            .subscribe((value: string) => {
                this.valueChanged.next(value);
            });
    }

    onOptionSelected(event) {
        this.optionSelected.next(event.option.value);
    }

    displayFn(object?: AutocompleteItem): string | undefined {
        console.log('displayFn:' + object.text);
        return object ? object.text : undefined;
    }


}
