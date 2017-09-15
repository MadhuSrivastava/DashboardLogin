


import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {MyDialogContentComponent} from '../my-dialog-content/my-dialog-content.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  dialogResult = "";
  
  constructor(public dialog: MdDialog) {}
    ngOnInit() {
    }

    openDialog() {
      const dialogRef = this.dialog.open(MyDialogContentComponent, {
        height: '350px',
        data: 'this text is passed into the dialog'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.dialogResult = result;
      })
  
  }
}