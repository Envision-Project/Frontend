import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './../css/sidebar.scss'

const Sidebar = (props) => {    
    
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
            <Link to='/filterslabels' className={'link ' + (props.selected == 'filters-labels' ? 'selected' : " ")}>
                <div className={'menu-option ' + (props.selected == 'filters-labels' ? 'selected' : " ")}>
                    <i class="bi bi-filter"></i>Filters & Labels
                </div>
            </Link>      

            <div className='projects'>  
                <h5 className='projects-header'>Projects</h5>
                <Link to='/personal' className={'link ' + (props.selected == 'personal' ? 'selected' : " ")}>
                    <div className={'menu-option ' + (props.selected == 'personal' ? 'selected' : " ")}>
                        <i class="bi bi-person"></i>Personal
                    </div>  
                </Link>
                <Link to='/shopping' className={'link ' + (props.selected == 'shopping' ? 'selected' : " ")}>
                    <div className={'menu-option ' + (props.selected == 'shopping' ? 'selected' : " ")}>
                    <i class="bi bi-cart"></i>Shopping
                    </div>
                </Link>      
                <Link to='/work' className={'link ' + (props.selected == 'work' ? 'selected' : " ")}>
                <div className={'menu-option ' + (props.selected == 'work' ? 'selected' : " ")}>
                    <i class="bi bi-person"></i>Work
                </div>
            </Link>      
            </div>         
        </div>
    )
    
}
 
export default Sidebar;