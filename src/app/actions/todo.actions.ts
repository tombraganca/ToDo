import { Action } from '@ngrx/store';
import { TodoActionsTypes } from '../shared/enum/todo-action-types.enum';

export class ActionParent implements Action {
  type: any;
  payload: any;
}

export class TodoAdd implements ActionParent {
  type: any;

  constructor(public payload: any) {}

}
