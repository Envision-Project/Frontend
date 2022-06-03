import React from 'react'

const Task = (props) => {

    const task = props.task;

    return (
        <div className='task' key={task.id}>
            <div className='check'>
                <div className='hide'>
                    <i className="bi bi-check tick"/>
                </div>
            </div>
            <div className='task-title'>
                {task.title}
            </div>
            <div className='options options-hide'>
                <button className='options-btn' title='Edit' onClick={() => props.openModal(props.index)}><i class="fas fa-pencil-alt me-3"/></button>
                <button className='options-btn' title='Delete'><i class="fas fa-trash-alt"/></button>
            </div>
        </div>
    )
}

export  default Task;