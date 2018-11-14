import { Injectable, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Injectable()
export class DialogsService {

    constructor(private dialog: MatDialog) {
    }

    /**
     * Opens confirm modal dialog
     * Returns Observable<boolean> - true if confirmed, false if canceled
     * @param dMessage - dialog text message
     * @param dConfirmText - confirm button text
     * @param dCancelText - cancel button text
     */
    public confirmDialog(dMessage: string, dConfirmText: string, dCancelText: string): Observable<boolean> {

        const dialogRef = this.dialog.open(ConfirmDialogComponent);

        dialogRef.componentInstance.dMessage = dMessage;
        dialogRef.componentInstance.dConfirmText = dConfirmText;
        dialogRef.componentInstance.dCancelText = dCancelText;

        return dialogRef.afterClosed();
    }

}
