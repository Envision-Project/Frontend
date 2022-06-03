import React, { Component, useState } from 'react';
import '../css/tasks.scss';
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import Task from "./task";

const Tasks = (props) => {

    const tasks = props.tasks;
    const priorities = [1, 2, 3, 4, 5]
    const task_lists = ["Inbox", "Personal", "Work", "Shopping"]
    const [showModal, setShowModal] = useState(false);
    const [activeTask, setActiveTask] = useState({});


    function openModal(task_id) {
        setShowModal(true);
        console.log(props.tasks[task_id]);
        setActiveTask(props.tasks[task_id]);
    }

    function closeModal(isSave, task_id){
        if(isSave){
            // axios.post("http://localhost:8080/projects/",
            //     {
            //         body :  {
            //                     task_id : tasks[task_id].id,
            //                     title : document.getElementById("title").value,
            //                     description : document.getElementById("description").value,
            //                     priority : document.getElementById("priority").value,
            //                     task_list : document.getElementById("task_list_id").value
            //                 }
            //     })
            //     .then(response => {

            //     })
        }
        setShowModal(false);
    }
    
    return (
        <div>
            <div className='render-tasks'>
                <div className='tasks'>
                    {
                        tasks.map((task, index) => {
                            return (
                                <Task index={index} openModal={openModal} task={task}/>
                            )
                        })
                    }
                </div>
            </div>

            <div className='task-modal'>
                <Modal show={showModal} size='lg'>
                    <Modal.Header >
                        <Modal.Title id="title">{activeTask.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col lg={7} xs={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="">Description</Form.Label>
                                    <Form.Control
                                        id="description"
                                        className="mt-1"
                                        as="textarea"
                                        rows={5}
                                        placeholder={activeTask.description}
                                    />
                                    <Form.Label className="mt-4">
                                        Due Date
                                    </Form.Label>
                                    <Form.Control
                                        id="due-date"
                                        type="date"
                                        className="mt-1"
                                        placeholder={activeTask.due_date ? activeTask.due_date : ""}
                                    >
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Label>Priority</Form.Label>
                                <Form.Select id="priority">
                                    {
                                        priorities.map((index) => {
                                            return (
                                                <option>{index}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                                <Form.Label className="mt-4">Project</Form.Label>
                                <Form.Select id="task_list_id">
                                    {
                                        task_lists.map((task_list, index) => {
                                            return (
                                                <option>{task_list}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => closeModal(true)}>Cancel</Button>
                        <Button onClick={() => closeModal(false)}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Tasks;