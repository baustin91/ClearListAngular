import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../service/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  listId!: number;
  tasks: Task[] = [];

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.listId = +params['listId'];
      this.loadTasks();
    });
  }

  loadTasks(): void {
    this.taskService.getTasks(this.listId).subscribe(
      (tasks) => {
        this.tasks = tasks;
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }

  completeTask(taskID: number): void {
    if(confirm('Are you sure you want to mark this task as complete?')) {
      this.taskService.deleteTask(taskID).subscribe({
        next: (response) => {
          this.tasks = this.tasks.filter(task => task.taskID !== taskID);
          console.log('Task completed and deleted successfully');
        },
        error: (error) => {
          console.error('Error completing the task:', error);
        }
      });
    }
  }
}

