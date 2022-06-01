import React, { Component } from 'react';
import '../css/inbox.scss'
import Sidebar from './sidebar';

const Inbox = () => {

    return (

        <div className='inbox'>
            <div className='outer'>
                <Sidebar selected="inbox"></Sidebar>
                <div className='inner'>
                    <h2>Inbox</h2>
                </div>
            </div>
        </div>
    )
}

export default Inbox;