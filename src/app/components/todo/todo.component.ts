import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnDestroy {
  public todos!: Todo[];
  private storeObservables$!: Subscription;

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.storeObservables$ = store
      .pipe(select(({ todos }) => todos))
      .subscribe((todos: any) => {
        console.log(todos);
        this.todos = todos;
      });
  }

  ngOnDestroy(): void {
    this.storeObservables$.unsubscribe();
  }

  ngOnInit(): void {}
}
