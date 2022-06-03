import React, { useEffect, useState } from 'react';
import '../css/inbox.scss'
import Sidebar from './sidebar';
import Tasks from "./tasks";
import AddTask from "./addTask";

const Inbox = () => {

    const [tasks, setTasks] = useState([]);

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

        // axios.get("http://localhost:8080/inbox")
        //     .then(response => {
        //         setTasks(sampleTasks);
        //     console.log(tasks);
        //     });
        setTasks(sampleTasks);
        console.log(tasks);
    }, [])

    return (

        <div className='app'>
            <div className='outer'>
                <Sidebar selected="inbox"/>
                <div className='inner'>
                    <h2>Inbox</h2>

                    <Tasks tasks={tasks}/>
                </div>
            </div>
        </div>
    )
}

export default Inbox;