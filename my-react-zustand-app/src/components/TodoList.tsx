import React from 'react'
import { useTodoStore } from '../store/useTodoStore'

const emojiMap: { [key: string]: string } = {
  eat: '🍔',
  sleep: '💤',
  code: '💻',
}

const TodoList: React.FC = () => {
  const [todoText, setTodoText] = React.useState('');

  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  
  const handleAddTodo = () => {
    const todoEmoji = emojiMap[todoText.trim().toLowerCase()] || todoText;
    if (todoEmoji.trim()) {
      addTodo(todoEmoji);
      setTodoText('');
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  }

  return (
    <div>
      <em>Made with Zustand</em>
      <h1>Emoji Todo List</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Add a todo...'
      />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => removeTodo(todo.id)}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
