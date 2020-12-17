import { Component } from '@angular/core';
import { User } from './user/models/userModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-test';
  users: User[] = [];

  addUser(user: User): void {
    this.users = [...this.users, user];
  }
}
