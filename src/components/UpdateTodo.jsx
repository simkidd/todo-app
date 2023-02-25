import React from 'react';
import '../styles/inputStyle.scss';

const UpdateTodo = ({updateTodo, changeTask, updateTask, cancelUpdate}) => {
    return (
        <>
            <div className='updateWrap'>
                <div className="inputWrap">
                    <input type="text" value={updateTodo && updateTodo.title} onChange={changeTask} />
                </div>
                <div className="btnWrap">
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
