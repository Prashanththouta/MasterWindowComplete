import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DxSelectBoxModule, DxDataGridModule } from "devextreme-angular";

import { AppComponent } from './app.component';
import { DxTreeViewModule } from 'devextreme-angular';
import { HelloComponent } from './hello.component';
import { PropertiesComponent } from './properties/properties.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DxSelectBoxModule, DxTreeViewModule, DxDataGridModule ],
  declarations: [ AppComponent, HelloComponent, PropertiesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

