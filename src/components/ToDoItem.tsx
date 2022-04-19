import ToDoItemModel from "../models/ToDoItemModel";

export const ToDoItem = ( {title, isDone}:ToDoItemModel) => {
    return <li>{title} <input type="checkbox" checked={isDone} /></li>;
};
