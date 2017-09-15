import { Component, OnInit ,Inject} from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-my-dialog-content',
  templateUrl: './my-dialog-content.component.html',
  styleUrls: ['./my-dialog-content.component.css']
})
export class MyDialogContentComponent implements OnInit {
  

  constructor(public thisDialogRef: MdDialogRef<MyDialogContentComponent>, @Inject(MD_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
