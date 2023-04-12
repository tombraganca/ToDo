import { ActionParent } from './../actions/todo.actions';
import { Todo } from '../models/Todo';

export const initialState: Array<Todo> = [
  { title: 'Todo 1' },
  { title: 'Todo 2' },
  { title: 'Todo 3' },
];

/**
 * @param state
 * @param action
 * @returns
 * @description
 * This is a reducer function that takes the state and action as parameters and returns the new state.
 */

export function TodoReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'Add':
      return [...state, action.payload];
    default:
      return state;
  }
}
