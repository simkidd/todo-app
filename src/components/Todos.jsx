import React from 'react';


const Todos = ({ todos, deleteTask, setUpdateTodo, markCompleted }) => {


    return (
        <>
            {/* sort and map the todos */}
            {
                todos && todos
                    .sort((a, b) => a.id > b.id ? 1 : -1)
                    .map((task, index) => {
                        return (
                            <div key={index}>
                                <div className="todos">
                                    <div className="todo-list">
                                        <div className={task.isDone ? 'done' : ''}>
                                            <span className="task-number">{index + 1}</span>
                                            <span className="todo-text">{task.title}</span>
                                            <span className="todo-date">{task.createdAt}</span>
                                        </div>
                                        <div className="icons-wrap">
                                            <span onClick={(e) => markCompleted(task.id)} ><i className='fa fa-circle'></i></span>
                                            {task.isDone ? null : (
                                                <span title='Edit' onClick={() => setUpdateTodo({
                                                    id: task.id,
                                                    title: task.title,
                                                    isDone: task.isDone ? true : false
                                                })}>
                                                    <i className='fa fa-pen'></i>
                                                </span>
                                            )}
                                            <span title='Delete' onClick={() => deleteTask(task.id)} ><i className='fa fa-trash-can'></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })
            }
        </>
    )
}

export default Todos
