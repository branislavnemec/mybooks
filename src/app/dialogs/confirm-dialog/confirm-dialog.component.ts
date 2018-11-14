import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.css']
})

/**
 * Simple confirm (yes/no) modal dialog
 */
export class ConfirmDialogComponent {

    public dMessage: string;
    public dCancelText: string;
    public dConfirmText: string;

    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {
    }

}
