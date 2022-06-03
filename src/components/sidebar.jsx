import React, {Component, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './../css/sidebar.scss'

const Sidebar = (props) => {

    const sample_task_list = [
        'Personal',
        'Work',
        'Shopping'
    ]
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        setTaskList((sample_task_list));

    }, []);

    const colors = ['#EF9A9A', '#80DEEA', '#A5D6A7', '#E6EE9C', '#FFCC80'];

    function getStyle(index){
        return {backgroundColor : colors[index]}
    }

    return (
        <div className="sidebar">
            <Link to='/inbox' className={'link ' + (props.selected == 'inbox' ? 'selected' : " ")}>
                    
                <div className={'menu-option ' + (props.selected == 'inbox' ? 'selected' : " ")}>
                    <i class="bi bi-inbox"></i>Inbox
                </div>
            </Link>
            <Link to='/today' className={'link ' + (props.selected == 'today' ? 'selected' : " ")}>
                <div className={'menu-option ' + (props.selected == 'today' ? 'selected' : " ")}>
                <i class="bi bi-calendar"></i>Today
                </div>
            </Link>            
            <Link to='/upcoming' className={'link ' + (props.selected == 'upcoming' ? 'selected' : " ")}>
                <div className={'menu-option ' + (props.selected == 'upcoming' ? 'selected' : " ")}>
                    <i class="bi bi-card-list"></i>Upcoming
                </div>
            </Link>     
            {/*<Link to='/filterslabels' className={'link ' + (props.selected == 'filters-labels' ? 'selected' : " ")}>*/}
            {/*    <div className={'menu-option ' + (props.selected == 'filters-labels' ? 'selected' : " ")}>*/}
            {/*        <i class="bi bi-filter"></i>Filters & Labels*/}
            {/*    </div>*/}
            {/*</Link>      */}

            <div className='projects'>

                <h5 className='projects-header'>Projects</h5>
                {
                    taskList.map((taskListElement, index) => {
                        return (
                            <Link to={'/project/' + taskListElement} className={'link ' + (props.selected === taskListElement ? 'selected' : " ")}>
                                <div className={'menu-option ' + (props.selected === taskListElement ? 'selected' : " ")}>
                                    <div className="color" style={getStyle(index)}/>{taskListElement}
                                </div>
                            </Link>
                        )
                    })
                }

            </div>         
        </div>
    )
    
}
 
export default Sidebar;