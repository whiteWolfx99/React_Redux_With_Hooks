export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export function addtodo (todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function removetodo (todoId) {
    return {
      type: REMOVE_TODO,
      payload: todoId,
    };
  }

export function EDITtodo (todo) {
    return {
      type: EDIT_TODO,
      payload: todo,
    };
  }
  
