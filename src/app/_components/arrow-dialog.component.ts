import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  hidden: boolean;
  up: boolean;
}

@Component({
  selector: 'arrow-dialog',
  templateUrl: './arrow-dialog.component.html'
})
export class ArrowDialogComponent {

  constructor(public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}

