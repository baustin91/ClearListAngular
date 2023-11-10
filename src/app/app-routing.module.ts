import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListsComponent } from './lists/lists.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'edit-list/:id', component: EditListComponent },
  { path: 'create', component: CreateListComponent },
  { path: 'tasks/:listId', component: TaskListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
