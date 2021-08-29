import { ITodoState, TodoActions, TodoActionTypes } from "../../types/todo";

const initialState: ITodoState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false,
}

export const todoReducer = (state = initialState, action: TodoActions): ITodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODO:
            return { ...state, loading: true };
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return { ...state, loading: false, todos: action.payload };
        case TodoActionTypes.FETCH_TODO_ERROR:
            return { ...state, loading: false, error: action.payload };
        case TodoActionTypes.SET_TODO_PAGE:
            return { ...state, page: action.payload };
        default:
           return state;
    }
}