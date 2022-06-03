import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import Tasks from "./tasks";

const Upcoming = () => {

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
                <Sidebar selected="upcoming"/>
                <div className='inner'>
                    <h2>Upcoming</h2>
                    <Tasks tasks={tasks}/>
                </div>
            </div>
        </div>
    )
}

export default Upcoming;