import React, {useState} from 'react'
import TodoItem from './TodoItem'
import TaskEditCard from './TaskEditCard'

import './TodoList.css'

const TodoList = () => {

    const [isOpenEditModal, setIsOpenEditModal] = useState(false)

    const [task, setTask] = useState()
    const [tasks, setTasks] = useState([])

    const [taskToEdit, setTaskToEdit] = useState(null)

    const openEditModal = (task) => {
        setIsOpenEditModal(true)
        setTaskToEdit(task)
    }
    const closeEditModal = () => {
        setIsOpenEditModal(false)
        setTaskToEdit(null);
    }

    const handlerAddTask = (event) => {

        if (!task || task.trim() === '') return

        const newTask = {
            id: Date.now(), 
            task: task
        };

        setTasks([...tasks, newTask])
        setTask('')
        closeEditModal()
    }

    const handleChangeInput = (event) => {
        setTaskToEdit({...taskToEdit, task: event.target.value});
    }

    const handleEdit = () => {
        setTasks(tasks.map(t => t.id === taskToEdit.id ? taskToEdit : t));
        setIsOpenEditModal(false);
        setTaskToEdit(null);
    }

    return (
        <div className='todo-list'>
            <div className='input-container'>
                <input className='input' type='text' value={task} onChange={(event) => setTask(event.target.value)}/>
                <button className='btn-add' onClick={handlerAddTask}>Agregar</button> 
            </div>
            <div className='container-todo-items'>
                {
                    tasks.map((todoitem) => 
                    <TodoItem  
                        key = {todoitem.id}
                        id = {todoitem.id}
                        task = {todoitem.task}
                        onEdit={() => openEditModal(todoitem)} 
                        onDelete={() => setTasks(tasks.filter(ti => ti.id !== todoitem.id))}
                    />
                )}
            </div>
                <TaskEditCard
                    isOpen={isOpenEditModal}
                    onClose={closeEditModal}
                    task={taskToEdit ? taskToEdit.task : ''}
                    onChangeInput={handleChangeInput}
                    onEdit={handleEdit}
                />
        </div>
    )
}

export default TodoList