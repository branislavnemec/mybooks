import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: [ './file-upload.component.css' ]
})
export class FileUploadComponent {

    @Output()
    loadFile: EventEmitter<string> = new EventEmitter();

    constructor() {}

    readFile(event): void {
        const file: File = event.target.files[0];
        const myReader: FileReader = new FileReader();
        myReader.onloadend = (e) => {
            this.loadFile.next(myReader.result.toString());
        };
        myReader.readAsDataURL(file);
    }
}
