import React from 'react';


const AddTodo = ({newTodo, addTodo, handleInputChange, handleSubmit}) => {

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="input-wrap">
                    <input type="text" value={newTodo} placeholder="Add a new task" onChange={handleInputChange} />
                </div>
                <div className="btn-wrap">
                    <button type='submit' >Add Task
                    <i className='fa fa-plus'></i></button>
                </div>
            </form>
        </>
    )
}

export default AddTodo
