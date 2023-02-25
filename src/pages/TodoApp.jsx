import React, { useState, useEffect } from 'react'
import AddTodo from '../components/AddTodo'
import Todos from '../components/Todos'
import UpdateTodo from '../components/UpdateTodo'

// import { TodoData } from '../data/TodoData';

const TodoApp = () => {
    const [todos, setTodos] = useState(() => {
        // restore saved todos using lazy initial state
        const savedTodos = localStorage.getItem('myTodos')
        if (savedTodos) {
            return JSON.parse(savedTodos)
        } else {
            // initial state
            return [];
        }
    });

    const [newTodo, setNewTodo] = useState('');
    const [updateTodo, setUpdateTodo] = useState('')

    useEffect(() => {
        localStorage.setItem('myTodos', JSON.stringify(todos))
    }, [todos])



    // add task
    const addTodo = () => {
        if (newTodo) {
            const num = todos.length + 1;
            const newEntry = {
                id: num,
                title: newTodo,
                isDone: false,
                createdAt: new Date().toUTCString()
            }
            setTodos([...todos, newEntry])

            console.log([...todos, newEntry])
            // clear out input field
            setNewTodo("")
        }
    }

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo();
    }

    // handle input change
    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    // mark task as completed
    const markCompleted = (id) => {
        const filterDone = todos.map((task) => {
            if (task.id === id) {
                return ({
                    ...task,
                    isDone: !task.isDone
                })
            }
            return task
        })
        setTodos(filterDone)
        console.log("task completed");
        
        console.log(filterDone);
    }

    // delete task
    const deleteTask = (id) => {
        const filterTasks = todos.filter((task) => task.id !== id)
        setTodos(filterTasks);
        console.log('Deleted!');
    }

    // edit task for update
    const changeTask = (e) => {
        const newEntry = {
            id: updateTodo.id,
            title: e.target.value,
            isDone: updateTodo.isDone ? true : false,
            createdAt: new Date().toUTCString()
        }
        setUpdateTodo(newEntry)
    };

    // update task
    const updateTask = () => {
        const filterRecords = [...todos].filter((task) => task.id !== updateTodo.id)
        const updatedItem = [...filterRecords, updateTodo]
        setTodos(updatedItem)
        setUpdateTodo('')

        console.log("updatedItem")
    }

    // for cancel update
    const cancelUpdate = () => {
        setUpdateTodo('')

        console.log("updated cancel")
    }

    const handleDeleteAll = () => {
        setTodos([])
        console.log('Deleted all todos');
    }

    // delete completed tasks
    const handleFilter=()=>{
        const removeDone = todos.filter((task)=>{
            return !task.isDone;
        })
        setTodos(removeDone)
        console.log("do something");
        console.log(removeDone);
    }

    return (
        <div className='app-container'>
            <h1>Todos...</h1>

            {updateTodo && updateTodo ? (
            <UpdateTodo
                changeTask={changeTask}
                updateTask={updateTask}
                updateTodo={updateTodo}
                cancelUpdate={cancelUpdate}
            />
            ):(
            <AddTodo
                newTodo={newTodo}
                addTodo={addTodo}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />
            ) }

            {todos && todos.length ? '' : (<h2>No task found...</h2>)}

            <Todos
                todos={todos}
                deleteTask={deleteTask}
                setUpdateTodo={setUpdateTodo}
                markCompleted={markCompleted}
            />

            <button onClick={() => handleDeleteAll(todos)}>Clear List<i className='fa-solid fa-trash-can-list'></i></button>
            <button onClick={() => handleFilter(todos)}>Clear completed<i className='fa-solid fa-trash-can-check'></i></button>

        </div>
    )
}

export default TodoApp
