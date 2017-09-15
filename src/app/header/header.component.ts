import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {MyDialogContentComponent} from '../my-dialog-content/my-dialog-content.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dialogResult = "";
  
  constructor(public dialog: MdDialog) {}
    ngOnInit() {
    }

    openDialog() {
      const dialogRef = this.dialog.open(MyDialogContentComponent, {
        height: '350px',
        width: '350px',
        data: 'Change your password'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.dialogResult = result;
      })
  
  }
}