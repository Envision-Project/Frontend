import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal';    
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalBody from 'react-bootstrap/ModalBody';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../css/modal.scss';
import {Button, Dropdown} from "react-bootstrap";


const TaskModal = (props) => {

    const task = props.task;
    const priorities = [1, 2, 3, 4, 5]
    const task_lists = ["Inbox", "Personal", "Work", "Shopping"]

    return (    
        <div className='task-modal'>
            <Modal show={props.open} size='lg'>
                <Modal.Header >
                    <Modal.Title>{task.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row>
                        <Col xs={7}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="">Description</Form.Label>
                                <Form.Control
                                    className="mt-1"
                                    as="textarea"
                                    rows={3}
                                    placeholder={task.description}
                                    contentEditable={true}
                                />
                                <Form.Label className="mt-4">
                                    Due Date
                                </Form.Label>
                                <Form.Control
                                    type="date"
                                    className="mt-1"
                                    placeholder={task.due_date ? task.due_date : ""}
                                >
                                </Form.Control>
                            </Form.Group>

                        </Col>
                        <Col xs={1}>

                        </Col>
                        <Col>
                            <Form.Label>Priority</Form.Label>
                            <Form.Select>
                                {
                                    priorities.map((index) => {
                                        return (
                                            <option>{index}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                            <Form.Label className="mt-4">Project</Form.Label>
                            <Form.Select>
                                {
                                    task_lists.map((task_list) => {
                                        return (
                                            <option>{task_list}</option>
                                        )
                                    })
                                }
                            </Form.Select>

                        </Col>
                    </Row>

                    {/* <Row>
                        <Col xs={8}>
                            <div>
                                {task.title}
                            </div>
                            <textarea name="" id="" className=''>
                                {task.description}
                            </textarea>
                        </Col>
                        <Col xs={4}>
                            <div className=''>
                                hell
                            </div>
                        </Col>
                    </Row> */}
                </Modal.Body>


                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeModal(true)}>Cancel</Button>
                    <Button onClick={props.closeModal(false)}>Save</Button>

                </Modal.Footer>
                
                {/* <ModalHeader>
                    <h5>Hello</h5>
                    <ModalTitle>Go to yoga</ModalTitle>
                </ModalHeader>
                <ModalBody>asdfasdf</ModalBody>
                <ModalFooter>This is the footer</ModalFooter> */}
            </Modal>
        </div>
        
    )
}

export default TaskModal;