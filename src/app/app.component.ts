import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  getRandomUser() {
    const randomIndex = Math.floor(Math.random() * this.users.length);
    return this.users[randomIndex];
  }

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId) || null;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
