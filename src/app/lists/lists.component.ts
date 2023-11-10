import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';
import { List } from '../models/list.model';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { TaskService } from '../service/task.service';
import { Task } from '../models/task.model';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: List[] = [];
  userId: number | null = null;
  selectedTasks: Task[] = [];

  constructor(
    private listService: ListService,
    private userService: UserService,
    private router: Router,
    private taskService: TaskService
    ) { }

  ngOnInit(): void {
    this.userService.userId$.subscribe(
      (id) => {
        if (id !== null) {
          this.userId = id;
          this.loadLists();
        }
      }
    );
  }

  loadLists(): void {
    if (this.userId != null) {
      this.listService.getLists(this.userId).subscribe(
        (data) => {
          this.lists = data;
        },
        (error) => {
          console.error('There was an error!', error);
        }
      );
    }
  }

  editList(list: List): void {
  this.router.navigate(['/edit-list', list.listID]);
  }


  deleteList(list: List): void {
    if(confirm(`Are you sure you want to delete the list "${list.list_title}"?`)) {
      this.listService.deleteList(list.listID!).subscribe(
        () => {
          this.lists = this.lists.filter(l => l.listID !== list.listID);
          console.log('List deleted successfully');
        },
        error => {
          console.error('Error deleting list:', error);
        }
      );
    }
  }

  onListClick(listId?: number): void {
    if (listId === undefined) {
      console.error('List ID is undefined');
      return;
    }

    this.taskService.getTasks(listId).subscribe(
      tasks => {
        this.selectedTasks = tasks;
      },
      error => {
        console.error('Error fetching tasks:', error);
      }
    );
  }

}
