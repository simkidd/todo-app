import React from 'react'

const UpdateTodo = ({updateTodo, changeTask, updateTask, cancelUpdate}) => {
    return (
        <>
            <div>
                <div className="input-wrap">
                    <input type="text" value={updateTodo && updateTodo.title} onChange={changeTask} />
                </div>
                <div className="btn-wrap">
                    <button onClick={updateTask}>Update
                    <i className='fa-solid fa-pen'></i></button>
                    <button onClick={cancelUpdate}>Cancel
                    <i className='fa-solid fa-circle-xmark'></i></button>
                </div>
            </div>
        </>
    )
}

export default UpdateTodo
