import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Message, Icon, Button } from 'semantic-ui-react'
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="mt-4">
      <li className="list-group-item border rounded-2 d-flex justify-content-between align-items-center" style={{ maxWidth: "100%", marginLeft: "20px", marginRight: "20px" }}>
        <div className="d-flex align-items-center">
          <input value={module.name} className="mx-4" style={{ width: "250px", height: "30px" }}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
          <textarea value={module.description} className="my-2" style={{ width: "350px", height: "30px" }}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} />
        </div>
        <div className="mx-4">
          <Button onClick={handleAddModule} color="green">Add</Button>
          <Button onClick={handleUpdateModule} color="blue">Update</Button>
        </div>
      </li>

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
                  <Button
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </Button>
                  <Button onClick={() => handleDeleteModule(module._id)} color="red">
                    Delete
                  </Button>
                </div>
              </Message>
            </div>
          ))
      }
    </div>
  );
}
export default ModuleList;