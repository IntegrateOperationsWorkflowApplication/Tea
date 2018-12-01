import React, { Component } from "react";
import { Segment, Header, Table } from "semantic-ui-react";
import ProjectTileEvent from "./ProjectTileEvent";

export default class CurrentProjectsTable extends Component {
  constructor(props) {
    super(props);
    console.log("current projects is: " + this.props.currentProjects);
  }

  render() {
    const noCurrentProjectsFound = <Header>No Current Projects Found</Header>;
    var Rows;
    if (this.props.currentProjects[0] === "dx") {
      Rows = noCurrentProjectsFound;
    } else {
      Rows = this.props.currentProjects.map(currentProject => (
        <tbody>
          <ProjectTileEvent
            isFinished={false}
            description={currentProject.description}
            projectleader={currentProject.projectleader}
            projName={currentProject.title}
            groupSize={currentProject.groupsize}
            percentDone={currentProject.percentdone}
            tags={currentProject.tags}
          />
        </tbody>
      ));
    }

    return (
      <Segment className="profile-columns1">
        <Header>Current Project(s)</Header>
        <Table celled>{Rows}</Table>
      </Segment>
    );
  }
}
