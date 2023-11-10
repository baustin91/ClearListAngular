import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  userId: number | null = null;
  userNotFound: boolean = false;

  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.userService.getUserID(this.username).subscribe({
      next: (data) => {
        this.userId = data.userID;
        this.userNotFound = false;
        this.userService.setUserId(data.userID);
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.userId = null;
        this.userNotFound = true;
      }
    });
  }
}
