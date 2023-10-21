import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { Message, Icon } from 'semantic-ui-react'
import "./index.css"

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div className="my-4 mx-4">
              <Message className="d-flex align-items-center">
                <div className="d-flex">
                  <Icon name='ellipsis vertical' />
                  <Icon name='caret right' />
                </div>
                <div>
                  <Message.Header>
                    {module.name}
                  </Message.Header>
                  <Message.Content>
                    {module.description}
                  </Message.Content>
                </div>
                <div className="d-flex align-right">
                  <Icon name='check circle' size="large" color="green" />
                  <Icon name='caret down' />
                  <Icon name='ellipsis vertical' />
                </div>
              </Message>
            </div>
          ))
      }
    </div>
  );
}
export default ModuleList;