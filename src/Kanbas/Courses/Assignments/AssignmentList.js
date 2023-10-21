import React from "react";
import { Message, Icon, Label } from 'semantic-ui-react';
import { Link, useParams } from "react-router-dom";
import "./index.css"

function AssignmentList(props) {
    const modules = props.assignmentList;
    const { courseId } = useParams();

    function getCurrentFormattedDateTime() {
        const now = new Date();

        const month = String(now.getMonth() + 1).padStart(2, '0');
        const date = String(now.getDate()).padStart(2, '0');
        const year = now.getFullYear();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const formattedDateTime = `${month}:${date}:${year} ${hours}:${minutes}:${seconds}`;

        return formattedDateTime;
    }

    return (
        <div>
            <div className="mx-4">
                <Message className="d-flex align-items-center">
                    <Icon name='ellipsis vertical' />
                    <Message.Header>
                        ASSIGNMENTS
                    </Message.Header>
                    <div className="d-flex align-right align-items-center">
                        <Label className="rounded-label" basic >
                            40% of Total
                        </Label>
                        <Icon name='plus' />
                        <Icon name='ellipsis vertical' />
                    </div>
                </Message>
            </div>
            {
                modules.map((module, index) => (
                    <div className="mx-4" key={index}>
                        <Message className="d-flex align-items-center assignmentMsg">
                            <div className="d-flex">
                                <Icon name='ellipsis vertical' />
                                <Icon name='file alternate outline' color="green" size="large" />
                            </div>
                            <div>
                                <Message.Header>
                                    <Link
                                        key={module._id}
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${module._id}`}
                                        className="list-group-item">
                                        {module._id} - {module.title}
                                    </Link>

                                </Message.Header>
                                <Message.Content>
                                    Multiple Modules | Due {getCurrentFormattedDateTime()} | 100 pts
                                </Message.Content>
                            </div>
                            <div className="d-flex align-right">
                                <Icon name='check circle' size="large" color="green" />
                                <Icon name='ellipsis vertical' />
                            </div>
                        </Message>
                    </div>
                ))
            }
        </div>
    );
}
export default AssignmentList;