import React, { useState } from 'react'
import './TodoItem.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoItem = ({id, task, onEdit, onDelete}) => {

    return (
        <div className='todo-item'>
            <span className='task-text'>{task}</span>
            <div className='button-container'>
                <button className='btn-edit' onClick={() => onEdit(id)}><EditIcon /></button>
                <button className='btn-delete' onClick={() => onDelete(id)}><DeleteIcon /></button>
            </div>
        </div>
    )
}

export default TodoItem