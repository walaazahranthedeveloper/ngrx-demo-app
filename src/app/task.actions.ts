import { createAction, props } from '@ngrx/store';
import { Task } from './task.model';

export const loadTasks = createAction('[Task List] Load Tasks');

export const loadTasksSuccess = createAction(
  '[Task List] Load Tasks Success',
  props<{ tasks: Task[] }>()
);

export const addTask = createAction(
  '[Task List] Add Task',
  props<{ task: Task }>()
);

export const toggleTask = createAction(
  '[Task List] Toggle Task',
  props<{ taskId: string }>()
);
