import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../service/list.service';
import { UserService } from '../service/user.service';
import { List } from '../models/list.model';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  list: List = {
    userID: 0,
    list_title: ''
  };
  listId!: number;
  userId!: number;
  defaultUserId: number = 1;

  constructor(
    private listService: ListService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listId = this.route.snapshot.params['id'];

    this.userService.userId$.subscribe(id => {
      this.userId = id ?? this.defaultUserId;
    });

    if (this.listId) {
      this.listService.getList(this.listId).subscribe(list => {
        this.list = list;
      }, error => {
        console.error('Error fetching list details:', error);
      });
    }
  }

  onSubmit() {
    if (this.userId !== null) {
      const updatedList: List = {
        listID: this.listId,
        userID: this.userId,
        list_title: this.list.list_title
      };

      this.listService.editList(updatedList).subscribe({
        next: (response) => {
          console.log('List updated', response);
          this.router.navigate(['/lists']);
        },
        error: (error) => {
          console.error('Error updating list', error);
        }
      });
    }
  }
}




