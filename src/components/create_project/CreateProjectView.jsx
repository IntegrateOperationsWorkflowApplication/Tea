import React, { Component } from "react";
import CreateProjectForm from "./CreateProjectForm";
import { createProject } from "../../server/api";

export default class CreateProjectView extends Component {
  constructor(props) {
    super(props);
    this.state = { isSubmitting: false };
    this.handleCreateProject = this.handleCreateProject.bind(this);
  }

  componentDidMount() {
    this.setState({ isSubmitting: false });
  }

  handleCreateProject(
    title,
    project_leader,
    percent_done,
    group_size,
    isPrivate,
    tags,
    deadline,
    calendar_id,
    description,
    members_list
  ) {
    const createProjectPromise = createProject(
      title,
      project_leader,
      percent_done,
      group_size,
      isPrivate,
      tags,
      deadline,
      calendar_id,
      description,
      members_list
    );
    var createProjectSuccess = false;
    this.setState({ isSubmitting: true });
    createProjectPromise.then(response => {
      console.log(response);
      this.setState({ isSubmitting: false });
      createProjectSuccess = response.success;
      if (!createProjectSuccess) {
        alert("Error creating project");
      } else {
        // update
        alert("Successfully created project!");
      }
    });
  }

  render() {
    return (
      <CreateProjectForm
        isSubmitting={this.state.isSubmitting}
        onCreateProject={this.handleCreateProject}
      />
    );
  }
}
