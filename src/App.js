
import { useState } from 'react';
import Todolist from './components/Todolist';
import AddTodoForm from './components/AddTodoForm';
import './styles/style.css';


function App() {

  let [todos, setTodos] = useState([{
    title: 'Clean apartment',
    description: 'Vaccum clean and mop the floors',
    completed: true
  },{
    title: 'Go shopping',
    description: 'Buy food and drinks for dinner',
    completed: false
  },{
    title: 'Do Laundry',
    description: 'Launder white and colored clothes',
    completed: false
  },{
    title: 'Call Mom',
    description: 'Call mom and congratulate on birthday',
    completed: true
  },{
    title: 'Buy present',
    description: 'Buy a present and flowers for mom',
    completed: true
  },{
    title: 'Cook dinner',
    description: 'Prepare dinner for birthday party',
    completed: false
  },{
    title: 'Bake cake',
    description: 'Bake a birthday cake',
    completed: false
  },{
    title: 'Prepare speech',
    description: 'Write and learn speech for mom',
    completed: false
  },{
    title: 'Set table',
    description: 'Set table and decorate for party',
    completed: false
  },{
    title: 'Get ready for party',
    description: 'Shower and get dressed for party',
    completed: false
  }])

  let [darkMode, setDarkMode] = useState(false)

  const addTodo = (e) => {
    e.preventDefault()
    let newTodo = {
        title: e.target.elements.title.value,
        description: e.target.elements.description.value,
        completed: false
    }
    setTodos([...todos, newTodo])
    document.querySelector('.add-todo-form').reset()
}

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <header>
        <h1>TO DO APP</h1>
        <button onClick={()=>{setDarkMode(!darkMode)}}>{darkMode ? 'Light mode' : 'Dark mode'}</button>
      </header>
      <AddTodoForm todos = {todos} addTodo = {addTodo}/>
      <Todolist todos = {todos} />

    </div>
  );
}

export default App;
