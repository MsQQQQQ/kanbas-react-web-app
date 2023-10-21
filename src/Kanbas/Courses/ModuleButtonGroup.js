import React from "react";
import { Button, Icon } from 'semantic-ui-react'
import "./index.css"

function ModuleButtongroup() {
  return (
    <div className="d-flex justify-content-end mx-4">
      <Button>
        <Button.Content >Collapse All</Button.Content>
      </Button>
      <Button>
        <Button.Content >View Progress</Button.Content>
      </Button>
      <Button>
        <Icon name='check circle' color="green" />
        Publish All
        <Icon name='caret down' />
      </Button>
      <Button color="red">
        <Icon name='plus' />
        Module
      </Button>
      <Button icon>
        <Icon name='ellipsis vertical' />
      </Button>
    </div>
  );
}
export default ModuleButtongroup;