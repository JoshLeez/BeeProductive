import React from 'react'
import './Dashboard.css'
import './Todo.css'
import {useState} from 'react'
import editicon from '../image/edit-icon.png'
import plusicon from '../image/plus_icon.png'
import trashicon from '../image/trash_icon.png'
import piechart from '../image/pie_chart.png'

function Todo() {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState('')
  const [edittext , setEditingText] = useState('')
  const [edit, setEditing]= useState(null)
  const [count, setCount] = useState(0);
 

  const InputHandler = (e)=>{
    setInput(e.target.value)
  }
  

  const SubmitHandler = (e)=>{
    if(input === ""){
      alert("Todo can't be empty")
    }else{
    e.preventDefault()
    setCount(count+1)
    setTodo([...todo, {text:input, id: Math.random()*1000}])
    setInput('')}
  }

  const EditHandler = (e)=>{
    setEditingText(e.target.value)
  }

  const SubmitEdit = (id)=>{
    setTodo([...todo].map((todos)=>{
      if(todos.id === id){
        todos.text = edittext
      }
      return todos
    }))
    setEditing(null)
    setEditingText("")
  }
  
  const DeleteHandler = (id) =>{
    setTodo(todo.filter((todos)=> todos.id !== id))
    setCount(count-1)
  }

  return (
    <div className="dashboard-page">
      <div className='todo-top'>
        <h3>To Do | Board X/X</h3>
        <div className="todopage-progressbar"></div>
        <nav className='navbar-todo'>
         <span>Tugas Kuliah</span>
        </nav>
        <div className='garis'></div>
      </div>
      <div className="todolist-page">
        <div className="todo-container">
        <h3>To Do</h3>
        <div className="todolist-container">
          <div className="todolisttop-container">
            <h4>Sort By</h4>
            <div className="todotop-right">
                <button onClick={SubmitHandler}><img src={plusicon} alt="plus-icon"/></button>
                <input className="todotop-input" type="text" placeholder="Add a To Do" value={input} onChange={InputHandler}/>
            </div>
          </div>
          <div className="todoitem">
            {todo.map(todos =>(
            <div className="todoitemlist" key={todos.id}>
                 {edit === todos.id ? 
                 (<div className='edittodo-container'>
                 <input className="edit-todo" type="text" value={edittext} onChange={EditHandler}/>
                <button onClick={()=>SubmitEdit(todos.id)}><img src={editicon} alt="edit-todo-btn"/></button>
                 </div>) :
             ( <><input type="checkbox"/>
              <span onDoubleClick={()=>{setEditing(todos.id); setEditingText(todos.text)}}>{todos.text}</span>  <button onClick={()=>DeleteHandler(todos.id)}><img src={trashicon} alt="trash-icon"/></button></>)
            }
            </div>))}
          </div>
        </div>
        </div>
        <div className="todo-container">
        <h3>Done</h3>
        <div className="todolist-container">
          <div className="done-top">
            <h4>Sort By</h4>
          </div>
          <div className="todoitem">
            <div className="todoitemlist">
              <input type="checkbox"/>
              <span>Membuat ppt 500 halaman</span>
            </div>
          </div>
        </div>
        </div>
        <div className='pie-chart'>
            <h3>Achievement</h3>
            <div className='pie-chart-details'>
            <img src={piechart} className="piechart-img" alt="pie-chart"/>
            <div className='perbandingan-todo'>
              <h2>X/{count}</h2>
              <div className="completed-ongoing">
                <div className='complete-rectangle'></div>
                <span>Completed</span>
              </div>
              <div className="completed-ongoing">
              <div className='ongoing-rectangle'></div>
              <span>On Going</span>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Todo