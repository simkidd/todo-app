import React from 'react';
import '../styles/inputStyle.scss';

const AddTodo = ({newTodo, addTodo, handleInputChange, handleSubmit}) => {

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="inputWrap">
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
