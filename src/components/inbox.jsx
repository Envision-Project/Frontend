import React, { Component, useEffect, useState } from 'react';
import '../css/inbox.scss'
import Sidebar from './sidebar';
import TaskModal from './taskmodal';

const Inbox = () => {

    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [activeTask, setActiveTask] = useState({});
    console.log(showModal);

    const sampleTasks= [
        {
            'id' : 1,
            'title' : 'React app',
            'description' : 'Envision project - activity planner',
            // 'due_date' : '2022-06-04',
            'priority' : 2
        },
        {
            'id' : 2,
            'title' : 'Clean my table',
            'description' : 'Envision project - activity planner',
            'due_date' : '2022-06-04',
            'priority' : 2
        },
        {
            'id' : 3,
            'title' : 'Water the plants',
            'description' : 'Envision project - activity planner',
            'due_date' : '2022-06-04',
            'priority' : 2
        }
    ]

    useEffect(() => {
        setTasks(sampleTasks);
        console.log(tasks);
    }, [])

    function openModal(task_id) {
        // document.getElementById('mymodal').classList.add('show')
        setShowModal(true);
        console.log(tasks[task_id]);
        setActiveTask(tasks[task_id]);
    }

    function closeModal(isSave){
        setShowModal(false);
    }

    return (

        <div className='inbox'>
            <div className='outer'>
                <Sidebar selected="inbox"></Sidebar>
                <div className='inner'>
                    <h2>Inbox</h2>
                        <div className='todos'>
                            {
                                tasks.map((task, index) => {
                                    console.log(index);
                                    return (
                                        <div className='todo' key={task.id} onClick={() => openModal(index)}>
                                            <div className='check'>
                                                <div className='hide'>
                                                    <i className="bi bi-check"></i>
                                                </div>
                                            </div>
                                            <div className='todo-title'>
                                                {task.title}
                                            </div>
                                            <div className='options hide'>
                                                <button className='options-btn'><i class="fas fa-pencil-alt me-3"></i></button>
                                                <button className='options-btn'><i class="fas fa-trash-alt"></i></button>
                                            </div>                                            
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <TaskModal open={showModal} task={activeTask} closeModal={() => closeModal}></TaskModal>
                        
                </div>
            </div>
        </div>
    )
}

export default Inbox;