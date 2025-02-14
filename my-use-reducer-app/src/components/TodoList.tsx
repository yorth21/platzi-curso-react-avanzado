import React, { useReducer, useState } from 'react'

type Todo = {
  id: number;
  text: string;
}

type State = {
  todos: Todo[];
}

type Actions = 
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'REMOVE_TODO'; payload: number };

const initialState: State = {
  todos: []
}

const todoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: action.payload
          }
        ]
      }
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    default:
      return state;
  }
}

const emojiMap: { [key: string]: string } = {
  eat: "🍔",
  sleep: "🛏️",
  exercise: "🏋🏽",
  code: "💻",
  animal: "🐶",
  plant: "🌵",
  study: "📚",
  work: "💼",
  play: "🎮",
};

const TodoList: React.FC = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todoText, setTodoText] = useState<string>('');

  const handleAddTodo = () => {
    const mappedText = emojiMap[todoText.trim().toLowerCase()] || todoText;
    dispatch({ type: 'ADD_TODO', payload: mappedText });
    setTodoText('');
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  }

  return (
    <div>
      <em>Made with useReducer</em>
      <h1>Emoji TodoList</h1>
      <input
        type="text"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Add a new todo...'
      />

      <ul>
        {state.todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
