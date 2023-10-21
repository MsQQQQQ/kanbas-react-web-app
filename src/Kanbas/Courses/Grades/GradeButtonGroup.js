import React from "react";
import { Button, Icon, Dropdown, Input, Grid } from 'semantic-ui-react'
import "./index.css"

function GradeButtonGroup() {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="grade-dropdown">
                    <Dropdown text='Gradebook'>
                        <Dropdown.Menu>
                            <Dropdown.Item text="Hi" />
                            <Dropdown.Item text="Hi" />
                            <Dropdown.Item text="Hi" />
                            <Dropdown.Item text="Hi" />
                        </Dropdown.Menu>
                    </Dropdown>
                    <Icon name='keyboard' className="ms-5" />
                </div>
                <div className="d-flex justify-content-end">
                    <Button>
                        <Icon name='upload' />
                        Import
                    </Button>
                    <Button >
                        <Icon name='download' />
                        Export
                    </Button>
                    <Button icon>
                        <Icon name='setting' />
                    </Button>
                </div>
            </div>
            <div className="filter-input">
                <Grid columns={2} stackable className="mt-3">
                    <Grid.Column>
                        <b>Student Names</b>
                        <Input fluid icon='search' placeholder='Search Students' />
                    </Grid.Column>
                    <Grid.Column>
                        <b>Assignment Names</b>
                        <Input fluid icon='search' placeholder='Search Assignments' />
                    </Grid.Column>
                </Grid>
                <Button className="mb-2">
                    <Icon name='filter' />
                    Apply Filters
                </Button>
            </div>

        </div>
    );
}

export default GradeButtonGroup;
