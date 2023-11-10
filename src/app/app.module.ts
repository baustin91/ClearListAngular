import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListsComponent } from './lists/lists.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { TaskListComponent } from './task-list/task-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListsComponent,
    EditListComponent,
    CreateListComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
