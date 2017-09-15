import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdDialogModule} from '@angular/material';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { MdCardModule } from '@angular/material';
import { FormsModule }      from '@angular/forms';
import { Login1Component } from './login-1/login-1.component';
import { Login2Component } from './login-2/login-2.component';
import { Login3Component } from './login-3/login-3.component';
import { RouterModule }   from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import {MdListModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import { MyDialogContentComponent } from './my-dialog-content/my-dialog-content.component';


@NgModule({
   declarations: [
    AppComponent,
    Login1Component,
    Login2Component,
    Login3Component,
    HeaderComponent,
    DialogComponent,
    MyDialogContentComponent
   
  ],
  imports: [
     RouterModule.forRoot([ 
       { path: 'login',
       component:Login1Component },
       { path: 'login2',
       component:Login2Component },
       { path: 'header',
       component:HeaderComponent },
       { path: 'dialog',
       component:DialogComponent }
      ]),
     BrowserModule,
     BrowserAnimationsModule,
     NoopAnimationsModule,
     MdButtonModule,
     MdDialogModule,
     MdInputModule,
     MdCheckboxModule,
     MdListModule,
   
  ],
  entryComponents: [
    MyDialogContentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }