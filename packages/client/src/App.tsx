import './App.css'

// Components
import TodoCreate from './components/TodoCreate/TodoCreate'
import TodoList from './components/TodoList/TodoList'

function App() {

  return (
    <>
      <main className='app_container'>
        <TodoCreate />
        <TodoList/>
      </main>

    </>
  )
}

export default App
