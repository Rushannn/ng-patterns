import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListItemComponent } from './tasks-list-item/tasks-list-item.component';
import { ExampleTaskService, Task } from '@design-patterns/strategy/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-tasks-list',
  standalone: true,
  imports: [
    CommonModule,
    TasksListItemComponent
  ],
  template: `
  <div class="tasks-list-wrapper">
    @for (task of tasks$ | async; track $index) {
      <lib-tasks-list-item [task]="task"></lib-tasks-list-item>
    }

  </div>
  `,
  styleUrl: './tasks-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {

  private readonly tasksService = inject(ExampleTaskService);

  tasks$: Observable<Task[]> = this.tasksService.getTasks();

}
