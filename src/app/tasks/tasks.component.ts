import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  userId = input.required<string>();
  name = input.required<string>();

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'First Task',
      summary: 'This is the first task',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Second Task',
      summary: 'This is the second task',
      dueDate: '2025-12-31'
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Third Task',
      summary: 'This is the third task',
      dueDate: '2025-12-31'
    } 
  ]

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId());
  }
}
