import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { DialogsService } from './dialogs.service';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    exports: [
        ConfirmDialogComponent
    ],
    declarations: [
        ConfirmDialogComponent
    ],
    providers: [
        DialogsService
    ],
    entryComponents: [
        ConfirmDialogComponent
    ],
})
export class DialogsModule { }
