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
  selectedUser: { id: string; name: string; avatar: string } | undefined;

  getRandomUser() {
    const randomIndex = Math.floor(Math.random() * this.users.length);
    return this.users[randomIndex];
  }

  onSelectUser(id: string) {
    this.selectedUser = this.users.find(user => user.id === id);
    if (this.selectedUser) {
      console.log('Selected User:', this.selectedUser);
    }
    else {
      console.log('User not found');
    }
  }
}
