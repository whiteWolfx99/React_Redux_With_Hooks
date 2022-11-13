import {ADD_TODO,REMOVE_TODO,EDIT_TODO } from './action';
import {todos} from './state.js'

export let reducer = (state = todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        case EDIT_TODO:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, title: action.payload.title };
                }
                return todo;
            });
        default:
            return state;
    }
}