import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../service/list.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css'],
})
export class CreateListComponent {
  listTitle: string = '';
  userId: number | null = null;

  constructor(
    private listService: ListService,
    private userService: UserService,
    private router: Router
  ) {
    userService.userId$.subscribe((id) => {
      this.userId = id;
    });
  }

  createList(): void {
    if (!this.userId) {
      alert('User ID is not set. Cannot create list.');
      return;
    }

    const newList = {
      userID: this.userId,
      list_title: this.listTitle,
    };

    this.listService.addList(newList).subscribe({
      next: (list) => {
        this.router.navigate(['/lists']);
      },
      error: (error) => {
        console.error('Error creating list:', error);
      },
    });
  }
}
