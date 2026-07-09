import React,{useState, useEffect} from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {        // if json parse returns null, 2nd parameter takes empty array "[]" as default value
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  //state to update draggable cards
  const [activeCard, setActiveCard] = useState(null)

  //useEffect hook the parameter on "[]" will trigger the action of the callback function 
  useEffect(() =>{                 //stringify will turn object into string, bcause localstorage accept strings
     localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]
  )

  const handleDelete =(taskIndex) =>{
    const newTasks = tasks.filter((task,index) => index !== taskIndex)
    setTasks(newTasks)
  }
  return (
    <div className='app'>
      <TaskForm  setTasks={setTasks} />
      <main className='app_main'>
         <TaskColumn 
           title='To do'
           icon={todoIcon} 
           tasks={tasks} 
           status="todo" 
           handleDelete={handleDelete} 
           setActiveCard={setActiveCard} />

         <TaskColumn 
          title = 'Doing' 
          icon={doingIcon} 
          tasks={tasks} 
          status="doing" 
          handleDelete={handleDelete} 
          setActiveCard={setActiveCard}/>
         
         <TaskColumn 
         title ='Done' 
         icon={doneIcon} 
         tasks={tasks} 
         status="done" 
         handleDelete={handleDelete}  
         setActiveCard={setActiveCard}/>
      </main>
      <h1> Active Card -{activeCard}</h1>
    </div>
  )
}

export default App