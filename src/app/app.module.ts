import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './reducer/todo.recuder';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [BrowserModule, StoreModule.forRoot({ todos: TodoReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
