import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Task} from "./example.model";

@Injectable({
  providedIn: 'root'
})
export class ExampleTaskService {

  private tasks: Task[] = [
    { title: 'Задача 1', status: "backlog" },
    { title: 'Задача 2', status: "review" },
    { title: 'Задача 3', status: "in_progress" },
    { title: 'Задача 4', status: "in_progress" },
    { title: 'Задача 5', status: "review" },
    { title: 'Задача 6', status: "completed" },
    { title: 'Задача 7', status: "backlog" }
  ];

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }
}
