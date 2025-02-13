import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../app/store";
import { addTodo, removeTodo } from "../features/todos/todoActions";


const TodoList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos)

  const [todoText, setTodoText] = useState<string>('');

  const emojeMap: { [key: string]: string } = {
    eat: '🍔',
    sleep: '💤',
    code: '💻',
  }

  const handleAddTodo = () => {
    const mappedText = emojeMap[todoText.trim().toLowerCase()] || todoText;
    if (mappedText.trim()) {
      dispatch(addTodo(mappedText));
      setTodoText('');
    }
  }

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  }
  
  return (
    <div>
      <em>Made with Redux Toolkit</em>
      <h1>Emoji Todo List</h1>
      <input 
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
        placeholder="Enter a todo..."
       />
       <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => handleRemoveTodo(todo.id)}
            >
              {todo.text}
            </li>
          ))}
       </ul>
    </div>
  )
}

export default TodoList
