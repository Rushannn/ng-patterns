import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, taskStatusInfoMap } from '@design-patterns/strategy/data-access';

@Component({
  selector: 'lib-tasks-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks-list-item.component.html',
  styleUrl: './tasks-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListItemComponent {
  @Input() task!: Task;

  public readonly taskStatusInfoMap = taskStatusInfoMap;


}
