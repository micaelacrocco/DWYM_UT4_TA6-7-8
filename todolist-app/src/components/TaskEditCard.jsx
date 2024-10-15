import React from 'react'
import ReactDOM from 'react-dom'
import './TaskEditCard.css'

const TaskEdit = ({isOpen, onClose, task, onChangeInput, onEdit}) => {

    if(!isOpen) return null

    return ReactDOM.createPortal(

        <div className='edit-modal-overlay' onClick={onClose}>
            <div className='edit-modal-content' onClick={(event) => event.stopPropagation()}>
                <div className='input-container'>
                    <input className='input' type='text' value={task} onChange={onChangeInput}/>
                    <button className='btn-add' onClick={onEdit}>Editar</button>
                    <button className='btn-close' onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </div>,

        document.getElementById('edit-modal-root')
    )
}

export default TaskEdit