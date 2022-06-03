import React from 'react';

const AddTask = (props) => {

    return (

        <div className="render-tasks">
            <div className="task add-task">
                <p>
                    <button type="button" className="add-task-plus mb-0" data-toggle="collapse" data-target="#new-task"><i className="bi bi-plus-lg add-task-plus-icon"></i>Add Task</button>
                </p>
                <div className="collapse" id="new-task">
                    <div className="add-task-field">
                        <hr/>
                        <input type="text" className="add-task-input" placeholder="Give your task a name"/><br/>
                        <textarea type="text" className="add-task-input " placeholder="Describe it"/>
                    </div>

                    <div className="additional">
                        <div className="buttons">
                            <button className="btn btn-secondary add-task-btn">Cancel</button>
                            <button className="btn btn-primary add-task-btn">Save</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddTask;