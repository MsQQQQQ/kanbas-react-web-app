import React from "react";
import { Button, Icon, Input } from 'semantic-ui-react'
import "./index.css"

function AssignmentButtonGroup() {
    return (
        <div className="d-flex justify-content-between">
            <div>
                <Input icon='search' placeholder='Search for Assignment' />
            </div>
            <div className="d-flex justify-content-end">
                <Button>
                    <Icon name='plus' />
                    Group
                </Button>
                <Button color="red">
                    <Icon name='plus' />
                    Assignment
                </Button>
                <Button icon>
                    <Icon name='ellipsis vertical' />
                </Button>
            </div>
        </div >
    );
}
export default AssignmentButtonGroup;