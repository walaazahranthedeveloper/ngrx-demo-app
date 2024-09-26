import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Task } from './task.model';
import * as TaskActions from './task.actions';
import { selectAllTasks } from './task.selectors';

@Component({
  selector: 'app-task-list',
  template: `
    <div>
      <h2>Task List</h2>
      <input #taskTitle type="text" placeholder="Add a new task" />
      <button (click)="addTask(taskTitle.value); taskTitle.value = ''">Add Task</button>

      <ul>
        <li *ngFor="let task of tasks$ | async">
          <input type="checkbox" [checked]="task.completed" (change)="toggleTaskCompletion(task.id)" />
          {{ task.title }}
        </li>
      </ul>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class TaskListComponent {
  tasks$: Observable<Task[]>;

  constructor(private store: Store) {
    this.tasks$ = this.store.select(selectAllTasks);
  }

  addTask(title: string) {
    const newTask: Task = { id: Math.random().toString(36).substring(2), title, completed: false };
    this.store.dispatch(TaskActions.addTask({ task: newTask }));
  }

  toggleTaskCompletion(taskId: string) {
    this.store.dispatch(TaskActions.toggleTask({ taskId }));
  }
}
