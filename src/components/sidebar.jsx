import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './../css/sidebar.scss'

const Sidebar = (props) => {    
    
    return (
        <div className="sidebar">
            <Link to='/inbox' className={'link ' + (props.selected == 'inbox' ? 'selected' : " ")}>
                    <i className="bi bi-speedometer2"></i>
                <div className={'menu-option ' + (props.selected == 'inbox' ? 'selected' : " ")}>
                    Inbox
                </div>
            </Link>
            <Link to='/today' className={'link ' + (props.selected == 'today' ? 'selected' : " ")}><i class="bi bi-person"></i>
                <div className={'menu-option ' + (props.selected == 'today' ? 'selected' : " ")}>
                    Today
                </div>
            </Link>            
            <Link to='/upcoming' className={'link ' + (props.selected == 'upcoming' ? 'selected' : " ")}><i class="bi bi-person"></i>
                <div className={'menu-option ' + (props.selected == 'upcoming' ? 'selected' : " ")}>
                    Upcoming
                </div>
            </Link>     
            <Link to='/filterslabels' className={'link ' + (props.selected == 'filters-labels' ? 'selected' : " ")}><i class="bi bi-person"></i>
                <div className={'menu-option ' + (props.selected == 'filters-labels' ? 'selected' : " ")}>
                    Filters & Labels
                </div>
            </Link>      

            <div className='projects'>  
                <h4 className='projects-header'>Projects</h4>
                <Link to='/personal' className={'link ' + (props.selected == 'personal' ? 'selected' : " ")}><i class="bi bi-plus-lg"></i>
                    <div className={'menu-option ' + (props.selected == 'personal' ? 'selected' : " ")}>
                        Personal
                    </div>  
                </Link>
                <Link to='/shopping' className={'link ' + (props.selected == 'shopping' ? 'selected' : " ")}><i class="bi bi-person"></i>
                    <div className={'menu-option ' + (props.selected == 'shopping' ? 'selected' : " ")}>
                        Shopping
                    </div>
                </Link>      
                <Link to='/work' className={'link ' + (props.selected == 'work' ? 'selected' : " ")}><i class="bi bi-person"></i>
                <div className={'menu-option ' + (props.selected == 'work' ? 'selected' : " ")}>
                    Work
                </div>
            </Link>      
            </div>         
        </div>
    )
    
}
 
export default Sidebar;